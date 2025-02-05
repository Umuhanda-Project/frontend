import { useState, useEffect, useCallback } from "react";
import Layout from "./Layout";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import ScoreModel from "./components/ScoreModel";
import { MdOutlineTimer } from "react-icons/md";
import { useNavigate } from "react-router";

const questions = {
  title: "Ibibazo byo mu Kizamini",
  author: "Teacher Francois Twizeyimana",
  contact: ["0781272066", "0735494981"],
  questions: [
    {
      id: 1,
      question:
        "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
      options: [
        "Umuyobozi",
        "Umuherekeza",
        "A na B ni ibisubizo by’ukuri",
        "Nta gisubizo cy’ukuri kirimo",
      ],
      answer: "Umuyobozi",
    },
    {
      id: 2,
      question:
        "Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
      options: [
        "Abanyamaguru",
        "Ibinyabiziga bigendera ku biziga bibiri",
        "A na B ni ibisubizo by’ukuri",
        "Nta gisubizo cy’ukuri kirimo",
      ],
      answer: "A na B ni ibisubizo by’ukuri",
    },
  ],
};

const ExamQuestions = () => {
  const [currentState, setCurrentState] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<
    Array<{
      question: string;
      selectedAnswer: string;
      correctAnswer: string;
      isCorrect: boolean;
    }>
  >([]);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const currentQuestion = questions.questions[currentState];

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !showModal) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      timerFinish(); // Auto-submit when timer reaches 0
    }
  }, [timeLeft, showModal]);

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = useCallback(() => {
    if (!selectedAnswer) {
      alert("Hitamo igisubizo mbere yo gukomeza!");
      return;
    }

    // Check if answer is correct
    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Store user's answer
    const updatedAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect,
      },
    ];
    setAnswers(updatedAnswers);

    // Move to next question
    if (currentState < questions.questions.length - 1) {
      setCurrentState((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      localStorage.setItem("examAnswers", JSON.stringify(updatedAnswers)); // Save to localStorage
      setShowConfetti(true);
      setShowModal(true);
    }
  }, [selectedAnswer, currentQuestion, currentState, answers]);

  const timerFinish = () => {
    navigate("/client");
  };
  const handleFinishExam = () => {
    localStorage.setItem("examAnswers", JSON.stringify(answers));
    // localStorage.setItem("examCount",JSON.stringify())
    navigate("/client/exam-answers");
  };

  return (
    <Layout>
      <div className="p-6">
        {showConfetti && <Confetti width={width} height={height} />}
        {showModal && (
          <div className="absolute inset-0 flex items-center justify-center h-screen bg-black/50">
            <ScoreModel
              score={score}
              total={questions.questions.length}
              onClose={handleFinishExam}
            />
          </div>
        )}

        {/* Timer */}
        <div className="absolute right-0 pr-10 flex items-center space-x-4">
          <MdOutlineTimer className="text-xl" />
          <span className="font-bold">{formatTime(timeLeft)}</span>
        </div>

        {/* Question */}
        <div className="mt-6 border p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">{currentQuestion.question}</h2>
          <ul className="space-y-2 mt-4">
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                  className="mr-2"
                  aria-label={option}
                />
                <label htmlFor={`option-${index}`} className="cursor-pointer">
                  {option}
                </label>
              </li>
            ))}
          </ul>

          {/* Next Button */}
          <button
            className="bg-blue-500 px-6 py-2 rounded-sm text-white hover:bg-blue-700 mt-10"
            onClick={handleNext}
          >
            Komeza
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ExamQuestions;
