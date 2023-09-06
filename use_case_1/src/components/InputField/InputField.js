import './InputField.css';

export const InputField = ({ id, value, label, name, placeholder, type, onChange, validationMessage} ) => (
    <div className='input-container'>
        {label && (
            <label className='input-label' htmlFor={name}>
                {label}
            </label>
        )}
        <input
            id={id}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
        {validationMessage && <p className='validation-message'>{validationMessage}</p>}
    </div>
);
