import PropTypes from 'prop-types';

const TextArea = ({
  baseClasses = 'w-full border border-gray-200 rounded p-4 text-sm outline-none placeholder:text-grey-300',
  className,
  dbName,
  disabled,
  errors,
  isResize = false,
  register,
  ...rest
}) => {
  const isInvalidMessage = errors?.[dbName]?.message;
  return (
    <>
      <textarea
        {...{
          className: `${baseClasses} ${className} ${
            isResize ? 'resize-y' : 'resize-none'
          } ${disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          disabled,
          ...register,
          ...rest
        }}
      />
      {isInvalidMessage && (
        <div className='text-xs text-red-500'>{isInvalidMessage}</div>
      )}
    </>
  );
};

export default TextArea;

TextArea.propTypes = {
  autofocus: PropTypes.bool,
  className: PropTypes.string,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number
};
