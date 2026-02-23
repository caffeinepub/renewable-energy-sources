import { QuizQuestion } from '@/data/quizQuestions';

/**
 * Fisher-Yates shuffle algorithm to randomize array order
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Select a random subset of questions ensuring all topics are represented
 */
export function selectQuizQuestions(
  allQuestions: QuizQuestion[],
  count: number = 10
): QuizQuestion[] {
  // Get unique topics
  const topics = Array.from(new Set(allQuestions.map(q => q.topic)));
  
  // Calculate questions per topic (at least 1 per topic)
  const questionsPerTopic = Math.floor(count / topics.length);
  const remainder = count % topics.length;
  
  const selectedQuestions: QuizQuestion[] = [];
  
  // Select questions from each topic
  topics.forEach((topic, index) => {
    const topicQuestions = allQuestions.filter(q => q.topic === topic);
    const shuffledTopicQuestions = shuffleArray(topicQuestions);
    
    // Add extra question to first topics if there's a remainder
    const numToSelect = questionsPerTopic + (index < remainder ? 1 : 0);
    selectedQuestions.push(...shuffledTopicQuestions.slice(0, numToSelect));
  });
  
  // Shuffle the final selection
  return shuffleArray(selectedQuestions);
}

/**
 * Calculate percentage score
 */
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * Get performance message based on score percentage
 */
export function getPerformanceMessage(percentage: number): string {
  if (percentage >= 90) return 'Outstanding! You\'re a renewable energy expert!';
  if (percentage >= 80) return 'Excellent work! You have a strong understanding!';
  if (percentage >= 70) return 'Good job! You\'re learning well!';
  if (percentage >= 60) return 'Not bad! Keep studying to improve!';
  return 'Keep learning! Review the material and try again!';
}
