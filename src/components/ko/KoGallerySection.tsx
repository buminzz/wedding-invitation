import React, { useEffect, useState } from 'react';
import { KoEditionData } from '../../data/weddingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './KoGallerySection.scss';
import img02 from '../../assets/img/wedding_02.png';
import img03 from '../../assets/img/wedding_03.png';
import img04 from '../../assets/img/wedding_04.png';

interface KoGallerySectionProps {
  gallery: KoEditionData['gallery'];
}

export const KoGallerySection: React.FC<KoGallerySectionProps> = ({
  gallery,
}) => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const imgList = [img02, img03, img04];

  const goPrev = () => {
    setActiveIdx((prev) =>
      prev === null ? null : (prev - 1 + imgList.length) % imgList.length,
    );
  };

  const goNext = () => {
    setActiveIdx((prev) =>
      prev === null ? null : (prev + 1) % imgList.length,
    );
  };
  return (
    <section
      ref={ref}
      className={`section-wrapper ko-gallery-section fade-reveal ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="section-header">
        <span className="en-subtitle">{gallery.kicker}</span>
        <h2 className="ko-title">{gallery.heading}</h2>
      </div>

      {imgList && activeIdx !== null && (
        <div
          className="ko-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIdx(null)}
        >
          {/* <div className="top-bar" onClick={(e) => e.stopPropagation()}>
            <span className="count">
              {activeIdx + 1} / {gallery.items.length}
            </span>
            <button
              type="button"
              className="close-btn"
              onClick={() => setActiveIdx(null)}
              aria-label="닫기"
            >
              &times;
            </button>
          </div> */}

          <div className="stage" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="arrow-btn prev"
              onClick={goPrev}
              aria-label="이전 사진"
            >
              &#8249;
            </button>
            <img src={imgList[activeIdx]} />
            <button
              type="button"
              className="arrow-btn next"
              onClick={goNext}
              aria-label="다음 사진"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
