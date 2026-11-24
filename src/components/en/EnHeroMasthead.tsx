import React from 'react';
import { EnEditionData } from '../../data/weddingData';
import './EnHeroMasthead.scss';
import img from '../../assets/img/wedding_01.png';

interface EnHeroMastheadProps {
  hero: EnEditionData['hero'];
}

export const EnHeroMasthead: React.FC<EnHeroMastheadProps> = ({ hero }) => {
  return (
    <header className="en-masthead">
      <p className="issue-meta">{hero.volumeLabel}</p>
      <h1 className="couple-heading">{hero.coupleDisplay}</h1>
      <p className="date-caption">{hero.dateLine}</p>

      <div className="portrait-box">
        <img src={img} />
      </div>

      <p className="lead-copy">{hero.headlineQuote}</p>
      <p className="venue-caption">{hero.venueSummary}</p>
    </header>
  );
};
