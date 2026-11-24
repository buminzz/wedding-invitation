import React from 'react';
import { EnEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './EnLetterAndSchedule.scss';

interface EnLetterAndScheduleProps {
  letter: EnEditionData['letter'];
  schedule: EnEditionData['weekendSchedule'];
}

export const EnLetterAndSchedule: React.FC<EnLetterAndScheduleProps> = ({
  letter,
  schedule,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`section-wrapper alt-bg en-letter-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{letter.kicker}</span>
        <h2 className="en-title">{letter.heading}</h2>
      </div>

      <p className="salutation">{letter.salutation}</p>
      <div className="letter-copy">
        {letter.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
      <p className="sign-off-line">{letter.signOffName}</p>
      <p className="parents-credit">{letter.parentsCreditLine}</p>

      {/* <div className="schedule-subhead">
        <span className="kicker">{schedule.kicker}</span>
        <h3>{schedule.heading}</h3>
      </div> */}

      {/* <div className="schedule-rows">
        {schedule.items.map((item, idx) => (
          <div key={idx} className="row">
            <span className="time">{item.time}</span>
            <div>
              <p className="title">{item.title}</p>
              <p className="loc">{item.location}</p>
              <p className="note">{item.note}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};
