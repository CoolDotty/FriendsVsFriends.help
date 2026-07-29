import { useEffect, useId } from 'react';
import Button from '../Button';
import './styles.css';

export default function Modal({ isOpen, title, onCancel, onConfirm }) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  return (
    <>
      <div
        className={`modal ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!isOpen}
        inert={!isOpen}>
        <h2 id={titleId}>{title}</h2>
        <Button onClick={onConfirm} label="Yes" />
        <Button onClick={onCancel} label="Cancel" />
      </div>
      <button
        type="button"
        className={`modalBackdrop ${isOpen ? 'open' : ''}`}
        onClick={onCancel}
        aria-label="Close dialog"
        aria-hidden={!isOpen}
        inert={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      />
    </>
  );
}
