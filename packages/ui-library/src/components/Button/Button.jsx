import { Link } from "@redwoodjs/router";
import PropTypes from "prop-types";

/**
 * Generic button component
 * @param children - children components to render inside the button
 * @param label - text to render inside the button
 * @param variant - variant colors and styles in SoftUI style
 * @param onClick - function to call when the button is clicked
 * @param size - size of the button (regular (default), small, large)
 * @param textColor - text color of the button (white (default), TailwindCSS colors)
 * @param borderColor - an optional border color
 * @param fluid - if true, the button will take the full width of its container
 * @param to - if provided, the button will be a Link to the given path
 * @param href - if provided, the button will be an anchor to the given path
 * @param alt - if provided, the button will have an alt attribute
 * @param classNameVariant - if provided, the button will have a TailwindCSS variant class
 * @param rest - any other props will be passed to the button
 * @returns {JSX.Element} - a button component
 * @constructor
 */
const Button = ({
  children,
  label,
  variant,
  onClick,
  size,
  textColor,
  borderColor,
  fluid,
  to,
  href,
  alt,
  classNameVariant,
  ...rest
}) => {
  const Element = href ? "a" : "button";
  if (to) {
    return (
      <Link
        className={`flex justify-center items-center group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]  
            ${textColor ? textColor : "text-white"} 
            ${size === "regular" && !fluid ? "h-[48px] w-[200px]" : ""}
            ${size === "small" && !fluid ? "h-[32px] w-[200px]" : ""}
            ${size === "square" && !fluid ? "h-[48px] w-[48px]" : ""}
            ${fluid && "h-[48px] w-full"}
            ${borderColor ? borderColor : ""}
            ${classNameVariant ? classNameVariant : ""}
            `}
        onClick={() => onClick()}
        data-variant={variant}
        data-size={size}
        data-textcolor={textColor}
        data-fluid={String(fluid)}
        to={to}
        {...rest}
      >
        {label || children}
      </Link>
    );
  }

  return (
    <Element
      className={`flex items-center group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]
            ${textColor ? textColor : "text-white"} 
            ${size === "regular" && !fluid ? "h-[48px] w-[200px]" : ""}
            ${size === "small" && !fluid ? "h-[32px] w-[200px]" : ""}
            ${size === "square" && !fluid ? "h-[48px] w-[48px]" : ""}
            ${fluid && "h-[48px] w-full"}
            ${borderColor ? "border " + borderColor : ""}
            ${classNameVariant ? classNameVariant : ""} 
            `}
      onClick={() => onClick()}
      data-variant={variant}
      data-size={size}
      data-textcolor={textColor}
      data-fluid={String(fluid)}
      href={href || ""}
      alt={alt || ""}
      {...rest}
    >
      {label || children}
    </Element>
  );
};

Button.defaultProps = {
  size: "regular",
  textColor: "text-white",
  fluid: false,
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.any,
  textColor: PropTypes.string,
  fluid: PropTypes.bool,
  to: PropTypes.any,
  href: PropTypes.string,
  alt: PropTypes.string,
};

export default Button;
