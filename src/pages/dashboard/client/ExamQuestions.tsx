import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { useWindowSize } from "react-use";
import { MdOutlineTimer } from "react-icons/md";
import Confetti from "react-confetti";

import Layout from "./Layout";
import ScoreModel from "./components/ScoreModel";

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

interface ExamData {
  title: string;
  author: string;
  contact: string[];
  questions: Question[];
}

const questions: ExamData = {
  title: "Ibibazo byo mu Kizamini",
  author: "Teacher Francois Twizeyimana",
  contact: ["0781272066", "0735494981"],
  questions: [
    {
      id: 1,
      question: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
      options: [
        "Umuyobozi",
        "Umuherekeza",
        "A na B ni ibisubizo by'ukuri",
        "Nta gisubizo cy'ukuri kirimo",
      ],
      answer: "Umuyobozi",
    },
    {
      id: 2,
      question: "Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
      options: [
        "Abanyamaguru",
        "Ibinyabiziga bigendera ku biziga bibiri",
        "A na B ni ibisubizo by'ukuri",
        "Nta gisubizo cy'ukuri kirimo",
      ],
      answer: "A na B ni ibisubizo by'ukuri",
    },
  ],
};

const EXAM_TIME = 20 * 60; // 20 minutes in seconds
const LOCAL_STORAGE_KEYS = {
  EXAM_ANSWERS: "examAnswers",
};

const ExamQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout>();
  
  const currentQuestion = questions.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.questions.length - 1;

  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  const timerFinish = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    navigate("/client");
  }, [navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      timerFinish();
      return;
    }

    if (showModal) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          timerFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timeLeft, showModal, timerFinish]);

  const handleAnswerSelect = useCallback((option: string) => {
    setSelectedAnswer(option);
  }, []);

  const handleNext = useCallback(() => {
    if (!selectedAnswer) {
      alert("Hitamo igisubizo mbere yo gukomeza!");
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
      const updatedAnswers = [...answers, newAnswer];
      localStorage.setItem(LOCAL_STORAGE_KEYS.EXAM_ANSWERS, JSON.stringify(updatedAnswers));
      setShowConfetti(true);
      setShowModal(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  }, [selectedAnswer, currentQuestion, answers, isLastQuestion]);

  const handleFinishExam = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.EXAM_ANSWERS, JSON.stringify(answers));
    navigate("/client/exam-answers");
  }, [answers, navigate]);

  return (
    <Layout>
      <div className="p-6">
        {showConfetti && <Confetti width={width} height={height} recycle={false} />}
        
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <ScoreModel
              score={score}
              total={questions.questions.length}
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
              Ikibazo {currentQuestionIndex + 1} / {questions.questions.length}
            </span>
            <span className="text-sm text-gray-500">
              Amanota: {score} / {currentQuestionIndex}
            </span>
          </div>

          <h2 className="text-lg font-semibold mb-6">{currentQuestion.question}</h2>
          
          <ul className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <li 
                key={index} 
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
                  aria-label={option}
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
            {isLastQuestion ? "Rangiza" : "Komeza"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ExamQuestions;