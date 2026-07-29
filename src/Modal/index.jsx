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

  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal open"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}>
        <h2 id={titleId}>{title}</h2>
        <Button onClick={onConfirm} label="Yes" />
        <Button onClick={onCancel} label="Cancel" />
      </div>
      <button
        type="button"
        className="modalBackdrop open"
        onClick={onCancel}
        aria-label="Close dialog"
      />
    </>
  );
}
