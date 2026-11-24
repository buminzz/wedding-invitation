import React, { useCallback, useEffect, useState } from 'react';
import { useRoute } from './hooks/useRoute';
import { useClipboard } from './hooks/useClipboard';
import { KoreanInvitationPage } from './pages/ko/KoreanInvitationPage';
import { EnglishInvitationPage } from './pages/en/EnglishInvitationPage';

export const App: React.FC = () => {
  const { route, navigateTo } = useRoute();
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  useEffect(() => {
    document.addEventListener('gesturestart', (e) => {
      e.preventDefault();
    });
    document.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      },
      { passive: false },
    );
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const { copyText } = useClipboard(showToast);

  return (
    <div className="app-viewport">
      <div className="mobile-container">
        <nav
          className="edition-switcher-bar"
          aria-label="언어 버전 페이지 전환"
        >
          <button
            type="button"
            className={`edition-link-btn ${route === '/ko' ? 'is-active' : ''}`}
            onClick={() => navigateTo('/ko')}
          >
            KR
          </button>
          <span
            style={{
              display: 'inline-block',
              width: '1px',
              height: '10px',
              backgroundColor: '#8c867e',
            }}
          />
          <button
            type="button"
            className={`edition-link-btn ${route === '/en' ? 'is-active' : ''}`}
            onClick={() => navigateTo('/en')}
          >
            EN
          </button>
        </nav>

        <main>
          {route === '/en' ? (
            <EnglishInvitationPage onCopy={copyText} />
          ) : (
            <KoreanInvitationPage onCopy={copyText} />
          )}
        </main>
      </div>

      <div
        className={`toast-banner ${toast ? 'show' : ''}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
};

export default App;
