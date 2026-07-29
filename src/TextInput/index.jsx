import { forwardRef } from 'react';
import './styles.css';

export default forwardRef(function TextInput({ onChange, className = '', ...rest }, ref) {
  return (
    <input
      type="text"
      className={`TextInput ${className}`.trim()}
      onChange={onChange ? (event) => onChange(event.target.value) : undefined}
      ref={ref}
      {...rest}
    />
  );
});
