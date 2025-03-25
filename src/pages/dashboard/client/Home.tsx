import { MdOutlinePlayLesson, MdOutlineSportsScore, MdOutlineTimer } from 'react-icons/md';
import Layout from './Layout';
import { motion } from 'framer-motion';
import { PiExamThin } from 'react-icons/pi';
import Notes from './components/Notes';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getuserAttempts } from '../../../utils/getuserAttempts';
import { getuserInfo } from '../../../utils/getUserInfo';

const Home = () => {
  const { t } = useTranslation();
  const [loggedInUserTotalAttempts, setLoggedInUserTotalAttempts] = useState(0);
  const [loggedInUserMaxScore, setLoggedInUserMaxScore] = useState(0);
  const [loggedInUserAttemptsLeft, setLoggedInUserAttemptsLeft] = useState('0');

  useEffect(() => {
    const fetchAttempts = async () => {
      const attemptsData = await getuserAttempts();
      const userInfo = await getuserInfo();
      if (
        attemptsData &&
        userInfo &&
        new Date(userInfo.active_subscription.end_date).getTime() > Date.now()
      ) {
        setLoggedInUserTotalAttempts(attemptsData.totalAttempts);
        setLoggedInUserMaxScore(attemptsData.maxScore);
        const attemptsFromSub = userInfo.active_subscription?.attempts_left || 0;

        let finalAttemptsLeft = attemptsFromSub;
        if (userInfo.hasFreeTrial) {
          finalAttemptsLeft += 1;
        }
        setLoggedInUserAttemptsLeft(finalAttemptsLeft);
        if (userInfo.active_subscription && userInfo.active_subscription?.attempts_left == null) {
          setLoggedInUserAttemptsLeft('Unlimited');
        }
      }
    };

    fetchAttempts();
  }, []);

  return (
    <Layout>
      {/* Metrics Section */}
      <motion.div
        className="px-6 py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 - Lessons */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <MdOutlinePlayLesson className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{t('lessons')}</h2>
              <p className="text-2xl sm:text-3xl font-bold text-blue-500">3</p>
            </div>
          </motion.div>

          {/* Card 2 - Exams Taken */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <PiExamThin className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{t('exams_taken')}</h2>
              <p className="text-2xl sm:text-3xl font-bold text-green-500">
                {loggedInUserTotalAttempts}
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Highest Score */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <MdOutlineSportsScore className="w-12 h-12 sm:w-16 sm:h-16 text-red-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                {t('highest_score')}
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-red-500">{loggedInUserMaxScore}</p>
            </div>
          </motion.div>

          {/* Card 4 - Attempts Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 flex items-center space-x-4 sm:space-x-2"
          >
            <MdOutlineTimer className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600" />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                {t('attempts_left')}
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-purple-500">
                {loggedInUserAttemptsLeft}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Courses Section */}
      <motion.div
        className="px-6 py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Notes length={3} />
      </motion.div>
    </Layout>
  );
};

export default Home;
