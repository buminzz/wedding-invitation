import React, { useState } from 'react';
import { EnEditionData } from '../../data/weddingData';
import './EnEditionFooter.scss';

interface EnEditionFooterProps {
  footer: EnEditionData['footer'];
  onCopyLink: (url: string, toast: string) => void;
}

export const EnEditionFooter: React.FC<EnEditionFooterProps> = ({
  footer,
  onCopyLink,
}) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="en-footer">
        <div className="section-header">
          <span className="en-subtitle">Registry & Gifts</span>
          {/* <h2 className="en-title">{venue.heading}</h2> */}
        </div>
        <p className="gift-note">{footer.noGiftsNote}</p>
        <button
          type="button"
          className="share-link-btn"
          onClick={() => setOpen(true)}
        >
          RSVP
        </button>

        <p className="gift-note">
          If you would like to bless us with a gift, we have set up a honeymoon
          fund below.
        </p>
        <div
          style={{
            textAlign: 'left',
            fontSize: '0.8rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e0d8',
            borderRadius: '2px',
            padding: '22px 16px',
            display: 'flex',
            flexDirection: 'column',
            color: '#8c867e',
          }}
        >
          <div>Venmo ID: @a_zara</div>
          <div>
            Name: Eric Zaragoza{' '}
            <span style={{ fontSize: '0.72rem' }}>
              (phone last 4 digits: 9871)
            </span>
          </div>
        </div>
      </div>

      <footer className="ko-share-footer en-footer">
        <p className="monogram">{footer.monogram}</p>
      </footer>
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {
            close();
            setError(false);
          }}
        >
          <form
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{
              position: 'relative',
              background: '#fff',
              padding: '36px 24px 24px',
              borderRadius: '8px',
              width: 'calc(100% - 60px)',
              maxWidth: '380px',
            }}
          >
            <button
              type="button"
              className="popup-close"
              onClick={(e) => {
                close();
                setError(false);
              }}
            ></button>
            <div
              style={{
                display: 'flex',
                gap: 8,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: '"Noto Serif KR", Georgia, serif',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  textAlign: 'center',
                  marginBottom: '12px',
                }}
              >
                RSVP Access
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  width: '80%',
                  textAlign: 'center',
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: '1px dashed #d0d2d5',
                }}
              >
                To respond to our invitation, <br />
                please enter the password printed on your invitation card.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                  }}
                >
                  password:
                </span>
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={4}
                  autoFocus
                ></input>
                {error && (
                  <p
                    style={{
                      flex: '0 0 auto',
                      width: '100%',
                      color: 'red',
                      margin: '4px 0 0',
                      fontSize: '0.68rem',
                      textAlign: 'center',
                    }}
                  >
                    Please check your password again.
                  </p>
                )}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: 36,
              }}
            >
              <button
                type="button"
                style={{
                  minHeight: 'auto',
                  padding: '10px 40px',
                  borderRadius: '4px',
                  background: '#516349',
                  color: '#fff',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setError(true);
                }}
              >
                Continue to RSVP
              </button>
              {/* <button
                type="button"
                style={{
                  minHeight: 'auto',
                  padding: '4px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
                onClick={close}
              >
                cancel
              </button> */}
            </div>
          </form>
        </div>
      )}
    </>
  );
};
