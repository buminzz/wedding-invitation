import React from 'react';
import { KoEditionData } from '../../data/weddingData';
import './KoHeroSection.scss';
import img from '../../assets/img/wedding_01.png';

interface KoHeroSectionProps {
  hero: KoEditionData['hero'];
}

export const KoHeroSection: React.FC<KoHeroSectionProps> = ({ hero }) => {
  return (
    <header className="ko-hero-section">
      <div className="ko-hero-bar">
        <span>{hero.topLabel}</span>
        {/* <span>{hero.dateBadge}</span> */}
      </div>

      <div className="ko-couple-title">
        {/* <h1>
          <span>{hero.groomName}</span>
          <span className="amp" aria-hidden="true">
            &amp;
          </span>
          <span>{hero.brideName}</span>
        </h1> */}
        {/* <p className="en-sub">{hero.englishNames}</p> */}
        <p className="en-sub">Eric Zaragoza &middot; 강이든</p>
        <p className="date-caption">{hero.dateBadge}</p>
      </div>

      <div className="ko-hero-photo">
        <img src={img} alt={hero.photoAlt} />
      </div>

      <p className="ko-hero-quote">{hero.quote}</p>
      <p className="ko-hero-invite">{hero.inviteLine}</p>

      <div className="ko-hero-meta">
        <p className="date">{hero.ceremonyDateText}</p>
        <p className="venue">{hero.ceremonyVenueText}</p>
      </div>
    </header>
  );
};
