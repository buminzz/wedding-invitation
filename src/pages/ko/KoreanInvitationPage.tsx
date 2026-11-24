import React, { useEffect } from 'react';
import { KO_WEDDING_DATA } from '../../data/weddingData';
import { KoHeroSection } from '../../components/ko/KoHeroSection';
import { KoGreetingSection } from '../../components/ko/KoGreetingSection';
import { KoGallerySection } from '../../components/ko/KoGallerySection';
import { KoLocationSection } from '../../components/ko/KoLocationSection';
import { KoAccountSection } from '../../components/ko/KoAccountSection';
import { KoShareFooter } from '../../components/ko/KoShareFooter';

interface KoreanInvitationPageProps {
  onCopy: (text: string, toast: string) => void;
}

export const KoreanInvitationPage: React.FC<KoreanInvitationPageProps> = ({ onCopy }) => {
  useEffect(() => {
    document.documentElement.lang = 'ko';
    document.title = KO_WEDDING_DATA.pageTitle;
  }, []);

  return (
    <>
      <KoHeroSection hero={KO_WEDDING_DATA.hero} />
      <KoGreetingSection greeting={KO_WEDDING_DATA.greeting} />
      <KoGallerySection gallery={KO_WEDDING_DATA.gallery} />
      <KoLocationSection location={KO_WEDDING_DATA.location} onCopyAddress={onCopy} />
      <KoAccountSection account={KO_WEDDING_DATA.account} onCopyAccount={onCopy} />
      <KoShareFooter
        footer={KO_WEDDING_DATA.footer}
        shareTitle={KO_WEDDING_DATA.pageTitle}
        onCopyLink={onCopy}
      />
    </>
  );
};
