import { useCallback } from 'react';

export function useClipboard(onSuccess: (message: string) => void) {
  const copyText = useCallback(
    async (text: string, successMessage: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        onSuccess(successMessage);
      } catch {
        onSuccess(text);
      }
    },
    [onSuccess]
  );

  return { copyText };
}
