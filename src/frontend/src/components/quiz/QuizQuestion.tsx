import { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from '@/data/quizQuestions';
import { AnswerOption } from './AnswerOption';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

/**
 * QuizQuestion displays a single question with four answer options,
 * handles answer selection, shows immediate feedback, and provides a Next button.
 */
export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    // Reset state for next question
    setSelectedAnswer(null);
    setIsAnswered(false);
    onNext();
  };

  const isCorrect = selectedAnswer !== null && selectedAnswer === question.correctAnswer;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-earth-green">
            {question.topic}
          </span>
        </div>
        <CardTitle className="text-2xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              isCorrectAnswer={index === question.correctAnswer}
              isAnswered={isAnswered}
              onSelect={() => handleSelectAnswer(index)}
            />
          ))}
        </div>

        {isAnswered && (
          <div className="mt-6 space-y-4">
            <div
              className={`flex items-center gap-3 p-4 rounded-lg ${
                isCorrect
                  ? 'bg-success/10 text-success border border-success/20'
                  : 'bg-destructive/10 text-destructive border border-destructive/20'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium">Correct! Well done!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium">
                    Incorrect. The correct answer is: {question.options[question.correctAnswer]}
                  </span>
                </>
              )}
            </div>

            <Button
              onClick={handleNext}
              className="w-full"
              size="lg"
            >
              {questionNumber < totalQuestions ? 'Next Question' : 'See Results'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
