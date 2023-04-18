"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _router = require("@redwoodjs/router");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["children", "label", "variant", "onClick", "size", "textColor", "borderColor", "fluid", "to", "href", "alt", "classNameVariant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var Button = function Button(_ref) {
  var children = _ref.children,
    label = _ref.label,
    variant = _ref.variant,
    _onClick = _ref.onClick,
    size = _ref.size,
    textColor = _ref.textColor,
    borderColor = _ref.borderColor,
    fluid = _ref.fluid,
    to = _ref.to,
    href = _ref.href,
    alt = _ref.alt,
    classNameVariant = _ref.classNameVariant,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Element = href ? "a" : "button";
  if (to) {
    return /*#__PURE__*/React.createElement(_router.Link, _extends({
      className: "removeFlickering flex justify-center items-center group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]  \n            ".concat(textColor ? textColor : "text-white", " \n            ").concat(size === "regular" && !fluid ? "h-[48px] w-[200px]" : "", "\n            ").concat(size === "small" && !fluid ? "h-[32px] w-[200px]" : "", "\n            ").concat(size === "square" && !fluid ? "h-[48px] w-[48px]" : "", "\n            ").concat(fluid && "h-[48px] w-full", "\n            ").concat(borderColor ? borderColor : "", "\n            ").concat(classNameVariant ? classNameVariant : "", "\n            "),
      onClick: function onClick() {
        return _onClick();
      },
      "data-variant": variant,
      "data-size": size,
      "data-textcolor": textColor,
      "data-fluid": String(fluid),
      to: to
    }, rest), label || children);
  }
  return /*#__PURE__*/React.createElement(Element, _extends({
    className: "removeFlickering flex items-center group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]\n            ".concat(textColor ? textColor : "text-white", " \n            ").concat(size === "regular" && !fluid ? "h-[48px] w-[200px]" : "", "\n            ").concat(size === "small" && !fluid ? "h-[32px] w-[200px]" : "", "\n            ").concat(size === "square" && !fluid ? "h-[48px] w-[48px]" : "", "\n            ").concat(fluid && "h-[48px] w-full", "\n            ").concat(borderColor ? "border " + borderColor : "", "\n            ").concat(classNameVariant ? classNameVariant : "", " \n            "),
    onClick: function onClick() {
      return _onClick();
    },
    "data-variant": variant,
    "data-size": size,
    "data-textcolor": textColor,
    "data-fluid": String(fluid),
    href: href || "",
    alt: alt || ""
  }, rest), label || children);
};
Button.defaultProps = {
  size: "regular",
  textColor: "text-white",
  fluid: false,
  onClick: function onClick() {}
};
Button.propTypes = {
  onClick: _propTypes["default"].func,
  variant: _propTypes["default"].string,
  size: _propTypes["default"].string,
  label: _propTypes["default"].any,
  textColor: _propTypes["default"].string,
  fluid: _propTypes["default"].bool,
  to: _propTypes["default"].any,
  href: _propTypes["default"].string,
  alt: _propTypes["default"].string
};
var _default = Button;
exports["default"] = _default;