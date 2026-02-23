import { Heart } from 'lucide-react';
import { SITE_NAME } from '@/constants/site';

/**
 * SiteFooter displays consistent footer content across all pages with dark mode support,
 * including attribution and copyright information.
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'renewable-energy-edu'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30 transition-colors dark:bg-muted/10">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
            <p className="mt-1">
              Learn about sustainable energy sources for a cleaner future.
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 fill-earth-coral text-earth-coral" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
