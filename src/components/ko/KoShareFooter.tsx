import React from 'react';
import { KoEditionData } from '../../data/weddingData';
import './KoShareFooter.scss';

interface KoShareFooterProps {
  footer: KoEditionData['footer'];
  shareTitle: string;
  onCopyLink: (url: string, toast: string) => void;
}

export const KoShareFooter: React.FC<KoShareFooterProps> = ({
  footer,
  shareTitle,
  onCopyLink,
}) => {
  const handleKakao = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url });
        return;
      } catch {
        // 취소 시 클립보드 폴백
      }
    }
    onCopyLink(url, footer.fallbackShareToast);
  };

  return (
    <footer className="ko-share-footer">
      {/* <div className="btn-stack">
        <button type="button" className="kakao" onClick={handleKakao}>
          {footer.kakaoButtonLabel}
        </button>
        <button
          type="button"
          className="link"
          onClick={() => onCopyLink(window.location.href, footer.copiedLinkToast)}
        >
          {footer.copyLinkButtonLabel}
        </button>
      </div> */}
      <p className="sign-off">{footer.signOff}</p>
    </footer>
  );
};
