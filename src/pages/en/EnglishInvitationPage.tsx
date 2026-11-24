import React, { useEffect } from 'react';
import { EN_WEDDING_DATA } from '../../data/weddingData';
import { EnHeroMasthead } from '../../components/en/EnHeroMasthead';
import { EnLetterAndSchedule } from '../../components/en/EnLetterAndSchedule';
import { EnLookbookGallery } from '../../components/en/EnLookbookGallery';
import { EnVenueAndTravel } from '../../components/en/EnVenueAndTravel';
import { EnEditionFooter } from '../../components/en/EnEditionFooter';

interface EnglishInvitationPageProps {
  onCopy: (text: string, toast: string) => void;
}

export const EnglishInvitationPage: React.FC<EnglishInvitationPageProps> = ({ onCopy }) => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = EN_WEDDING_DATA.pageTitle;
  }, []);

  return (
    <>
      <EnHeroMasthead hero={EN_WEDDING_DATA.hero} />
      <EnLetterAndSchedule
        letter={EN_WEDDING_DATA.letter}
        schedule={EN_WEDDING_DATA.weekendSchedule}
      />
      <EnLookbookGallery gallery={EN_WEDDING_DATA.gallery} />
      <EnVenueAndTravel venue={EN_WEDDING_DATA.venueAndTravel} onCopyAddress={onCopy} />
      <EnEditionFooter footer={EN_WEDDING_DATA.footer} onCopyLink={onCopy} />
    </>
  );
};
