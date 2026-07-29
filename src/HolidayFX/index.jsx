import { useMemo, useState } from 'react';
import './styles.css';

const date = new Date();
date.setHours(0, 0, 0, 0);
const december1 = new Date(date.getFullYear(), 11, 1);
const december25 = new Date(date.getFullYear(), 11, 25);
const snowContent = ['❄', '❅', '❆'];
const random = (num) => Math.floor(Math.random() * num);

export default function HolidayFX() {
  const [isSnowing] = useState(date >= december1 && date <= december25);
  const flakes = useMemo(
    () =>
      [...Array(100)].map((_, index) => (
        <div
          key={index}
          className="snow"
          style={{
            top: `-${random(100)}%`,
            left: `${random(100)}%`,
            fontSize: `${random(10) + 10}px`,
            animationDuration: `${random(25) + 25}s`,
          }}>
          {snowContent[random(snowContent.length)]}
        </div>
      )),
    []
  );

  return isSnowing ? <div id="snowContainer">{flakes}</div> : null;
}
