import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, RotateCcw } from 'lucide-react';
import { calculatePercentage, getPerformanceMessage } from '@/utils/quizHelpers';

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

/**
 * QuizResults displays the final score, percentage, performance message,
 * and a Restart button to generate a new randomized quiz.
 */
export function QuizResults({
  correctAnswers,
  totalQuestions,
  onRestart,
}: QuizResultsProps) {
  const percentage = calculatePercentage(correctAnswers, totalQuestions);
  const message = getPerformanceMessage(percentage);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-earth-green/10 p-6">
            <Trophy className="h-16 w-16 text-earth-green" />
          </div>
        </div>
        <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="text-6xl font-bold text-earth-green">
              {percentage}%
            </div>
            <div className="text-xl text-muted-foreground">
              {correctAnswers} out of {totalQuestions} correct
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-medium">{message}</p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={onRestart}
            className="w-full"
            size="lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Take Another Quiz
          </Button>
          
          <p className="text-sm text-center text-muted-foreground">
            Each quiz is randomly generated with different questions!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
