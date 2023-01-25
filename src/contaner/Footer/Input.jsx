import { useState } from 'react'


const InputForm = ({ className, type, placeholder, name, errorMessage }) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="app__flex">
      <input
       onBlur={handleFocus}
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        required
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;