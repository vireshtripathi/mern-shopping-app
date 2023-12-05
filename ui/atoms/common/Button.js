import Image from "next/image";
import PropTypes from "prop-types";

const iconPositions = { left: "Left", right: "Right" };

const Button = ({
  alt = "cart-bag",
  children,
  className,
  iconGroupClassName,
  iconHeight = 100,
  iconPosition = null,
  iconUrl,
  iconWidth = 100,
  imageClassName,
  width = "w-full",
  ...rest
}) => (
  <button
    className={`${className} flex items-center justify-center cursor-pointer hover:opacity-90 hover:no-underline focus:outline-none focus:ring-0 ${width}`}
    {...rest}
  >
    <div
      className={`flex ${iconGroupClassName} ${
        iconPosition === "Right" && "flex-row-reverse space-x-2 space-x-reverse"
      } ${iconPosition === "Left" && "flex-row space-x-2"} `}
    >
      {iconUrl && iconPosition && (
        <Image
          {...{
            alt,
            className: imageClassName,
            height: iconHeight,
            src: iconUrl,
            width: iconWidth,
          }}
        />
      )}
      <span className="flex justify-center items-center"> {children} </span>
    </div>
  </button>
);
export default Button;

Button.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  iconGroupClassName: PropTypes.string,
  iconHeight: PropTypes.number,
  iconPosition: PropTypes.oneOf(Object.values(iconPositions)),
  iconUrl: PropTypes.string,
  iconWidth: PropTypes.number,
  imageClassName: PropTypes.string,
  width: PropTypes.string,
};
