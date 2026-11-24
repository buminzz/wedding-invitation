import React from 'react';
import { KoEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './KoGreetingSection.scss';

interface KoGreetingSectionProps {
  greeting: KoEditionData['greeting'];
}

export const KoGreetingSection: React.FC<KoGreetingSectionProps> = ({ greeting }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`section-wrapper alt-bg ko-greeting-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{greeting.kicker}</span>
        <h2 className="ko-title">{greeting.heading}</h2>
      </div>

      <div className="ko-greeting-paragraphs">
        {greeting.paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      <div className="ko-family-box">
        <div className="row">
          <span className="parents">{greeting.groomFamily.parents}</span>
          <span className="relation">{greeting.groomFamily.relation}</span>
          <span className="child">{greeting.groomFamily.child}</span>
        </div>
        <div className="row">
          <span className="parents">{greeting.brideFamily.parents}</span>
          <span className="relation">{greeting.brideFamily.relation}</span>
          <span className="child">{greeting.brideFamily.child}</span>
        </div>
      </div>
    </section>
  );
};
