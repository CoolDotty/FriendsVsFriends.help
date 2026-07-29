import './styles.css';

export default function Button({ label, forceActive = false, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`Button ${forceActive ? 'forceActive' : ''} ${className}`.trim()}
      {...rest}>
      <span>{label}</span>
    </button>
  );
}
