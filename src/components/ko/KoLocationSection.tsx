import React from 'react';
import { KoEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './KoLocationSection.scss';

interface KoLocationSectionProps {
  location: KoEditionData['location'];
  onCopyAddress: (text: string, toast: string) => void;
}

export const KoLocationSection: React.FC<KoLocationSectionProps> = ({
  location,
  onCopyAddress,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`section-wrapper alt-bg ko-location-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{location.kicker}</span>
        <h2 className="ko-title">{location.heading}</h2>
      </div>

      <div className="venue-summary">
        <p className="name">{location.venueFullName}</p>
        <p className="addr">{location.roadAddress}</p>
        <p className="tel">{location.datetimeAndTel}</p>
        <button
          type="button"
          className="copy-addr-btn"
          onClick={() =>
            onCopyAddress(location.roadAddress, location.copiedToast)
          }
        >
          {location.copyButtonLabel}
        </button>
      </div>
    </section>
  );
};
