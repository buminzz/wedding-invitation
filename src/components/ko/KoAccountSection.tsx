import React, { useState } from 'react';
import { KoEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './KoAccountSection.scss';

interface KoAccountSectionProps {
  account: KoEditionData['account'];
  onCopyAccount: (text: string, toast: string) => void;
}

export const KoAccountSection: React.FC<KoAccountSectionProps> = ({
  account,
  onCopyAccount,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [openSide, setOpenSide] = useState<'groom' | 'bride' | null>('groom');

  return (
    <section
      ref={ref}
      className={`section-wrapper ko-account-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{account.kicker}</span>
        <h2 className="ko-title">{account.heading}</h2>
      </div>

      <p className="intro-note">{account.description}</p>

      <div className="group-list">
        {account.groups.map((group) => {
          const expanded = openSide === group.side;
          return (
            <div key={group.side} className="group-card">
              <button
                type="button"
                className="trigger"
                aria-expanded={expanded}
                onClick={() => setOpenSide(expanded ? null : group.side)}
              >
                <span>{group.title}</span>
                <span>{expanded ? '−' : '+'}</span>
              </button>

              {expanded && (
                <div className="panel">
                  {group.accounts.map((acc) => (
                    <div key={acc.id} className="acc-item">
                      <div>
                        <div className="who">
                          <span>{acc.relationLabel}</span>
                          <strong>{acc.owner}</strong>
                        </div>
                        <div className="num">
                          {acc.bankName} {acc.accountNumber}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() =>
                          onCopyAccount(
                            `${acc.bankName} ${acc.accountNumber} (${acc.owner})`,
                            `${acc.owner}님의 계좌번호가 복사되었습니다.`
                          )
                        }
                      >
                        {account.copyButtonLabel}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
