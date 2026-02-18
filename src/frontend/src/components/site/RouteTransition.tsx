import { type ReactNode } from 'react';

interface RouteTransitionProps {
  children: ReactNode;
}

/**
 * RouteTransition wraps page content with a smooth fade-in animation
 * when navigating between routes.
 */
export function RouteTransition({ children }: RouteTransitionProps) {
  return (
    <div className="animate-in fade-in duration-300">
      {children}
    </div>
  );
}
