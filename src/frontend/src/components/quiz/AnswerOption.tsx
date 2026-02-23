import { Button } from '@/components/ui/button';

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  isAnswered: boolean;
  onSelect: () => void;
}

/**
 * AnswerOption displays a single answer choice button with visual feedback:
 * default state, selected-correct (green), and selected-incorrect (red).
 */
export function AnswerOption({
  option,
  index,
  isSelected,
  isCorrectAnswer,
  isAnswered,
  onSelect,
}: AnswerOptionProps) {
  const letters = ['A', 'B', 'C', 'D'];
  
  // Determine button styling based on state
  let buttonClass = 'w-full justify-start text-left h-auto py-4 px-6 text-base';
  let variant: 'outline' | 'default' | 'secondary' = 'outline';
  
  if (isAnswered) {
    if (isSelected) {
      // User selected this answer
      if (isCorrectAnswer) {
        // Selected the correct answer - show green
        buttonClass += ' bg-success/10 border-success text-success hover:bg-success/20 hover:text-success';
      } else {
        // Selected wrong answer - show red
        buttonClass += ' bg-destructive/10 border-destructive text-destructive hover:bg-destructive/20 hover:text-destructive';
      }
    } else if (isCorrectAnswer) {
      // Show the correct answer in green even if not selected
      buttonClass += ' bg-success/10 border-success text-success';
    }
  } else if (isSelected) {
    variant = 'secondary';
  }

  return (
    <Button
      variant={variant}
      className={buttonClass}
      onClick={onSelect}
      disabled={isAnswered}
    >
      <span className="mr-3 font-bold">{letters[index]}.</span>
      <span className="flex-1">{option}</span>
    </Button>
  );
}
