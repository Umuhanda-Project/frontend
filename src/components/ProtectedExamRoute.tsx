import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getuserInfo } from '../utils/getUserInfo';
import { SubscriptionNotice } from '../pages/dashboard/client/components/subscriptionNotice';

const ProtectedExamRoute = () => {
  const [loggedInUserAttemptsLeft, setLoggedInUserAttemptsLeft] = useState(0);
  const [hasFreeTrial, setHasFreeTrial] = useState(false);
  const [unLimited, setUnLimited] = useState(false);

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const userInfo = await getuserInfo();
        if (userInfo) {
          if (userInfo.active_subscription && userInfo.active_subscription.attempts_left != null) {
            const attemptsFromSub = userInfo.active_subscription?.attempts_left || 0;
            let finalAttemptsLeft = attemptsFromSub;
            if (userInfo.hasFreeTrial) {
              finalAttemptsLeft += 1;
            }
            setLoggedInUserAttemptsLeft(finalAttemptsLeft);
            setHasFreeTrial(userInfo.hasFreeTrial);
          } else if (
            userInfo.active_subscription &&
            userInfo.active_subscription.attempts_left == null
          ) {
            setUnLimited(true);
          }
        }
      } catch (error) {
        console.error('Error fetching user attempts:', error);
      }
    };
    fetchAttempts();
  }, []);

  return loggedInUserAttemptsLeft > 0 || hasFreeTrial || unLimited ? (
    <Outlet />
  ) : (
    <SubscriptionNotice />
  );
};

export default ProtectedExamRoute;
