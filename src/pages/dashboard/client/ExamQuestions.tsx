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
      question: "Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
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
      question: "Ijambo 'akayira' bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
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
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const { width, height } = useWindowSize();
  const currentQuestion = questions.questions[currentState];
  const navigate = useNavigate();

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !showModal) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setShowModal(true);
    }
  }, [timeLeft, showModal]);

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = useCallback(() => {
    if (!selectedAnswer) {
      alert("Hitamo igisubizo mbere yo gukomeza!");
      return;
    }

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentState < questions.questions.length - 1) {
      setCurrentState((prev) => prev + 1);
      setSelectedAnswer(null); // Reset selection for next question
    } else {
      setShowConfetti(true);
      setShowModal(true);
    }
  }, [selectedAnswer, currentQuestion, currentState]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext]);

  return (
    <Layout>
      <div className="p-6">
        {showConfetti && <Confetti width={width} height={height} />}
        {showModal && (
          <div className="absolute inset-0 flex items-center justify-center h-screen bg-black/50">
            <ScoreModel
              score={score}
              total={questions.questions.length}
              onClose={() => {
                setShowModal(false)
                setShowConfetti(false)
                navigate("/client/lessons")
            }}
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