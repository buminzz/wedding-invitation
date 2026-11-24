import React from 'react';
import { EnEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './EnVenueAndTravel.scss';

interface EnVenueAndTravelProps {
  venue: EnEditionData['venueAndTravel'];
  onCopyAddress: (text: string, toast: string) => void;
}

export const EnVenueAndTravel: React.FC<EnVenueAndTravelProps> = ({
  venue,
  onCopyAddress,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`section-wrapper alt-bg en-venue-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{venue.kicker}</span>
        {/* <h2 className="en-title">{venue.heading}</h2> */}
      </div>
      <div className="venue-summary">
        <p className="name">{venue.venueName}</p>
        <p className="addr">{venue.hallDetail}</p>
        <p className="tel">{venue.date}</p>
        <button
          type="button"
          className="copy-btn"
          onClick={() => onCopyAddress(venue.hallDetail, venue.copiedToast)}
        >
          {venue.copyAddressLabel}
        </button>
      </div>
      {/* <div className="venue-box">
        <p className="venue-title">{venue.venueName}</p>
        <p className="venue-addr">{venue.hallDetail}</p>
        <div className="actions">
          <button
            type="button"
            className="copy-btn"
            onClick={() => onCopyAddress(venue.streetAddress, venue.copiedToast)}
          >
            {venue.copyAddressLabel}
          </button>
          <a
            href={venue.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Open in Map
          </a>
        </div>
      </div> */}
    </section>
  );
};
