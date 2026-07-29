import assetUrl from '../assetUrl';
import './styles.css';

export default function Radio({ options, onChange, value }) {
  return options.map((option) => (
    <label
      className={`radio ${option.value === value ? 'checked' : ''}`}
      key={option.value}>
      <input
        className="visuallyHidden"
        name="card-type"
        type="radio"
        value={option.value}
        checked={option.value === value}
        onChange={() => onChange(option.value)}
      />
      {option.icon ? (
        <>
          <img
            src={assetUrl(`icons/${option.icon}`)}
            alt=""
            style={{ width: '1em', height: '1em' }}
          />
          <span className="visuallyHidden">{option.label}</span>
        </>
      ) : (
        <span>{option.label}</span>
      )}
    </label>
  ));
}
