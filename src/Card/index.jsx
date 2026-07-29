import { useRef } from 'react';
import assetUrl from '../assetUrl';
import './styles.css';

export default function Card({ card, equipped, 'aria-label': ariaLabel, ...rest }) {
  const { name, img, cost, type } = card;
  const contentRef = useRef();

  const updateTilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    const offsetX = ((event.clientX - rect.left - middleX) / middleX) * 9;
    const offsetY = ((event.clientY - rect.top - middleY) / middleY) * 9;

    contentRef.current?.style.setProperty('--rotateX', `${offsetX}deg`);
    contentRef.current?.style.setProperty('--rotateY', `${-offsetY}deg`);
  };

  const resetTilt = () => {
    contentRef.current?.style.removeProperty('--rotateX');
    contentRef.current?.style.removeProperty('--rotateY');
  };

  const defaultLabel = `${equipped ? 'Remove' : 'Add'} ${name} ${
    equipped ? 'from' : 'to'
  } deck`;

  return (
    <button
      type="button"
      className="cardContainer"
      aria-label={ariaLabel ?? defaultLabel}
      aria-pressed={equipped === undefined ? undefined : Boolean(equipped)}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
      {...rest}>
      <span
        className={`card ${equipped ? 'equipped' : ''}`}
        title={name}
        ref={contentRef}>
        <span
          className={`cardContent cost${cost}`}
          style={{ backgroundImage: `url("${assetUrl(`cards/${img}`)}")` }}>
          <span
            className="cost"
            style={{
              backgroundImage: `url("${assetUrl(`cost/card_cost_icon_${cost}.webp`)}")`,
            }}
          />
          <span
            className="level"
            style={{
              backgroundImage: `url("${assetUrl(
                type === 'Personality'
                  ? 'level/card_lvl_10.webp'
                  : 'level/card_lvl_max.webp'
              )}")`,
            }}
          />
        </span>
      </span>
    </button>
  );
}
