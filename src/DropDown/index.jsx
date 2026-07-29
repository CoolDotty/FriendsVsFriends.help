import './styles.css';

export default function DropDown({ options, value, onChange, ...rest }) {
  return (
    <select
      className="DropDown"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...rest}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
