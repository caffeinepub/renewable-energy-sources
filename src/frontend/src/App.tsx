import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { SiteLayout } from './components/site/SiteLayout';
import { RouteTransition } from './components/site/RouteTransition';
import HomePage from './pages/HomePage';
import SolarEnergyPage from './pages/SolarEnergyPage';
import HydropowerTidalPage from './pages/HydropowerTidalPage';
import WindEnergyPage from './pages/WindEnergyPage';
import GeothermalEnergyPage from './pages/GeothermalEnergyPage';
import BiomassEnergyPage from './pages/BiomassEnergyPage';
import BiofuelsPage from './pages/BiofuelsPage';
import SourcesPage from './pages/SourcesPage';

// Root route with layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <RouteTransition>
        <Outlet />
      </RouteTransition>
    </SiteLayout>
  ),
});

// Define all page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const solarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solar',
  component: SolarEnergyPage,
});

const hydroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hydro',
  component: HydropowerTidalPage,
});

const windRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wind',
  component: WindEnergyPage,
});

const geothermalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/geothermal',
  component: GeothermalEnergyPage,
});

const biomassRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/biomass',
  component: BiomassEnergyPage,
});

const biofuelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/biofuels',
  component: BiofuelsPage,
});

const sourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sources',
  component: SourcesPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  solarRoute,
  hydroRoute,
  windRoute,
  geothermalRoute,
  biomassRoute,
  biofuelsRoute,
  sourcesRoute,
]);

// Create router instance
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
