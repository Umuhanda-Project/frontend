import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { useWindowSize } from "react-use";
import { MdOutlineTimer } from "react-icons/md";
import Confetti from "react-confetti";

import Layout from "./Layout";
import ScoreModel from "./components/ScoreModel";
import { englishQuestions } from "../../../utils/englishQuestions";
import { kinyarwandaQuestions } from "../../../utils/kinyarwandaQuestions";
import { frenchQuestions } from "../../../utils/frenchQuestions";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface Answer {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const EXAM_TIME = 20 * 60; // 20 minutes in seconds
const QUESTIONS_LIMIT = 20;

const LOCAL_STORAGE_KEYS = {
  EXAM_ANSWERS: "examAnswers",
};

const LANGUAGE_CONFIG = {
  kiny: {
    questions: kinyarwandaQuestions.questions,
    label: "Kinyarwanda",
    noSelectionMessage: "Hitamo igisubizo mbere yo gukomeza!"
  },
  en: {
    questions: englishQuestions.questions,
    label: "English",
    noSelectionMessage: "Please select an answer before continuing!"
  },
  fr: {
    questions: frenchQuestions.questions,
    label: "Français",
    noSelectionMessage: "Veuillez sélectionner une réponse avant de continuer!"
  }
} as const;

const ExamQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<keyof typeof LANGUAGE_CONFIG>();

  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout>();

  // Initialize questions based on language
  useEffect(() => {
    const language = localStorage.getItem("i18nextLng") as keyof typeof LANGUAGE_CONFIG;
    
    if (!LANGUAGE_CONFIG[language]) {
      navigate("/client"); // Redirect if invalid language
      return;
    }

    setCurrentLanguage(language);
    
    // Get questions for the selected language and shuffle them
    const shuffledQuestions = [...LANGUAGE_CONFIG[language].questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, QUESTIONS_LIMIT);
    
    setExamQuestions(shuffledQuestions);
  }, [navigate]);

  const currentQuestion = examQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS_LIMIT - 1;

  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  // Timer management
  const handleTimerFinish = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    navigate("/client");
  }, [navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimerFinish();
      return;
    }

    if (showModal) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev <= 1 ? 0 : prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeLeft, showModal, handleTimerFinish]);

  const handleAnswerSelect = useCallback((option: string) => {
    setSelectedAnswer(option);
  }, []);

  const handleNext = useCallback(() => {
    if (!currentLanguage || !selectedAnswer) {
      alert(LANGUAGE_CONFIG[currentLanguage!]?.noSelectionMessage);
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const newAnswer: Answer = {
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect,
    };

    setAnswers((prev) => [...prev, newAnswer]);

    if (isLastQuestion) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.EXAM_ANSWERS, 
        JSON.stringify([...answers, newAnswer])
      );
      setShowConfetti(true);
      setShowModal(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  }, [selectedAnswer, currentQuestion, answers, isLastQuestion, currentLanguage]);

  const handleFinishExam = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.EXAM_ANSWERS, JSON.stringify(answers));
    navigate("/client/exam-answers");
  }, [answers, navigate]);

  if (!currentQuestion || !currentLanguage) {
    return <Layout><div className="p-6">Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="p-6">
        {showConfetti && <Confetti width={width} height={height} recycle={false} />}
        
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <ScoreModel
              score={score}
              total={QUESTIONS_LIMIT}
              onClose={handleFinishExam}
            />
          </div>
        )}

        <div className="absolute right-0 pr-10 flex items-center space-x-4">
          <MdOutlineTimer className="text-xl text-gray-600" />
          <span className={`font-bold ${timeLeft <= 60 ? 'text-red-600 animate-pulse' : ''}`}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="mt-6 border p-6 rounded-lg shadow-lg bg-white">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {currentQuestionIndex + 1} / {QUESTIONS_LIMIT}
            </span>
            <span className="text-sm text-gray-500">
              {LANGUAGE_CONFIG[currentLanguage].label}: {score} / {currentQuestionIndex}
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-6">{currentQuestion.question}</h2>
          
          <ul className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <li 
                key={`${currentQuestionIndex}-${index}`}
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <label 
                  htmlFor={`option-${index}`} 
                  className="cursor-pointer flex-1"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>

          <button
            className="mt-8 w-full bg-blue-500 px-6 py-3 rounded-lg text-white font-medium
                     hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ExamQuestions;