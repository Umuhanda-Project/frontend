import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getuserInfo } from "../utils/getUserInfo";
import { SubscriptionNotice } from "../pages/dashboard/client/components/subscriptionNotice";

const ProtectedExamRoute = () => {
   const [loggedInUserAttemptsLeft, setLoggedInUserAttemptsLeft] = useState(0);
    
      useEffect(() => {
        const fetchAttempts = async () => {
          try {
          const userInfo = await getuserInfo();
          if (userInfo) {
            // setLoggedInUserAttemptsLeft(userInfo.active_subscription.attempts_left);
            setLoggedInUserAttemptsLeft(0);
          }
        }
        catch (error) {
          console.error("Error fetching user attempts:", error);
        } 
        };
        fetchAttempts(); 
      }, []);


  return loggedInUserAttemptsLeft > 0 ? <Outlet /> : <SubscriptionNotice />;
};

export default ProtectedExamRoute;
