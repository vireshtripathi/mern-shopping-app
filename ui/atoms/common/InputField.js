import PropTypes from 'prop-types';

const InputField = ({
  baseClass = 'w-full border text-gray-900 px-2 py-2 outline-none placeholder:text-grey-400',
  className,
  dbName,
  disabled,
  errorClass = 'flex-1',
  errors,
  inputGroup,
  label = '',
  labelClass = 'text-neuo py-1',
  register,
  ...rest
}) => {
  const isInvalidMessage = errors?.[dbName]?.message;
  return (
    <div className={inputGroup}>
      {label && <label className={labelClass}>{label}</label>}
      <div className={errorClass}>
        <input
          {...{
            ...register,
            className: `${baseClass} ${className} ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`,
            disabled,
            onWheel: (e) => e.target.blur(),
            ...rest
          }}
        />
        {isInvalidMessage && (
          <div className='text-xs text-red-500'>{isInvalidMessage}</div>
        )}
      </div>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  autocomplete: PropTypes.oneOf(['on', 'off']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};
