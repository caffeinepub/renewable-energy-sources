import { useState, useEffect } from 'react';
import { QuizQuestion as QuizQuestionComponent } from '@/components/quiz/QuizQuestion';
import { QuizResults } from '@/components/quiz/QuizResults';
import { quizQuestions } from '@/data/quizQuestions';
import { selectQuizQuestions } from '@/utils/quizHelpers';
import { QuizQuestion } from '@/data/quizQuestions';
import { BookOpen } from 'lucide-react';

/**
 * QuizPage manages the quiz flow, including question selection, answer tracking,
 * and results display. Questions are randomized on mount and restart.
 */
export default function QuizPage() {
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize quiz with randomized questions
  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    const questions = selectQuizQuestions(quizQuestions, 10);
    setSelectedQuestions(questions);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIsComplete(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    initializeQuiz();
  };

  // Show loading state while questions are being selected
  if (selectedQuestions.length === 0) {
    return (
      <div className="container py-12">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <BookOpen className="h-12 w-12 text-earth-green mx-auto animate-pulse" />
            <p className="text-lg text-muted-foreground">Preparing your quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Renewable Energy Quiz
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge about solar, hydro, wind, geothermal, biomass, and biofuels energy.
            Each quiz is randomly generated!
          </p>
        </div>

        {/* Quiz Content */}
        {!isComplete ? (
          <QuizQuestionComponent
            question={selectedQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={selectedQuestions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        ) : (
          <QuizResults
            correctAnswers={correctAnswers}
            totalQuestions={selectedQuestions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
