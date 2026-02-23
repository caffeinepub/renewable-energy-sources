import { Link, useRouterState } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SITE_NAME } from '@/constants/site';
import { ThemeToggle } from './ThemeToggle';

/**
 * Navigation links configuration
 */
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/solar', label: 'Solar Energy' },
  { path: '/hydro', label: 'Hydropower & Tidal' },
  { path: '/wind', label: 'Wind Energy' },
  { path: '/geothermal', label: 'Geothermal' },
  { path: '/biomass', label: 'Biomass' },
  { path: '/biofuels', label: 'Biofuels' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/sources', label: 'Sources' },
];

/**
 * SiteNav renders a responsive navigation bar with links to all sections and a theme toggle.
 * On mobile, navigation collapses into a hamburger menu.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-earth-green to-earth-teal">
            <span className="text-xl font-bold text-white">RE</span>
          </div>
          <span className="hidden font-bold text-foreground sm:inline-block">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  currentPath === link.path
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      currentPath === link.path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
