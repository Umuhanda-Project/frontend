import React, { createContext, useContext, useState, useEffect } from 'react';
import { getuserInfo } from '../utils/getUserInfo';
import { getuserAttempts } from '../utils/getuserAttempts';
import axios from '../config/axios';

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [attempts, setAttempts] = useState({
    totalAttempts: 0,
    maxScore: 0,
    attemptsLeft: '0',
  });

  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const data = await getuserInfo();
    setUser(data);
    setLoading(false);
  };

  const fetchAttempts = async () => {
    try {
      const attemptsData = await getuserAttempts();
      const userData = await getuserInfo();
      if (
        attemptsData &&
        userData?.active_subscription &&
        new Date(userData.active_subscription?.end_date).getTime() > Date.now()
      ) {
        let attemptsFromSub = userData.active_subscription?.attempts_left || 0;
        if (userData.hasFreeTrial) {
          attemptsFromSub += 1;
        }

        const finalAttemptsLeft =
          userData.active_subscription?.attempts_left == null ? 'Unlimited' : attemptsFromSub;

        setAttempts({
          totalAttempts: attemptsData.totalAttempts,
          maxScore: attemptsData.maxScore,
          attemptsLeft: finalAttemptsLeft,
        });
      }
    } catch (err) {
      console.error('❌ Error fetching attempts:', err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateActiveSubscription = async (subId: string) => {
    try {
      await axios.post(
        '/user-subscription/change-active',
        { subscription_id: subId },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          withCredentials: true,
        },
      );

      // 🔁 Re-fetch fresh user data from backend
      const freshUser = await getuserInfo();
      setUser(freshUser);
    } catch (error) {
      console.error('❌ Error updating active subscription:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, updateActiveSubscription, loading, attempts, fetchAttempts }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
