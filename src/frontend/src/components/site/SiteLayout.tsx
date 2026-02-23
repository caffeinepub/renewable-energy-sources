import { type ReactNode } from 'react';
import { SiteNav } from './SiteNav';
import { SiteFooter } from './SiteFooter';

interface SiteLayoutProps {
  children: ReactNode;
}

/**
 * SiteLayout provides the consistent header, navigation, and footer
 * wrapper for all pages in the application with dark mode support.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
