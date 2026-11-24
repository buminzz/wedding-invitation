import { useCallback, useEffect, useState } from 'react';

export type EditionRoute = '/ko' | '/en';

function normalizePath(pathname: string): EditionRoute {
  if (pathname.startsWith('/en')) {
    return '/en';
  }
  return '/ko';
}

export function useRoute() {
  const [route, setRoute] = useState<EditionRoute>(() => {
    if (typeof window === 'undefined') return '/ko';
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((nextRoute: EditionRoute) => {
    if (window.location.pathname !== nextRoute) {
      window.history.pushState({}, '', nextRoute);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigateTo };
}
