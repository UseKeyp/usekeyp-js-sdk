"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iconMap = _interopRequireDefault(require("../../assets/icons/icon-map.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const EmptyIcon = () => /*#__PURE__*/React.createElement("div", null);

/**
 * Generic icon
 * @param name - icon name as defined in icon-map.js
 * @param size - icon size (width and height)
 * @param color - icon color (hexadecimal or TailwindCSS color)
 * @param className - additional TailwindCSS classes
 * @param rest - additional props
 * @returns {JSX.Element} - icon component
 */
const Icon = ({
  name,
  size,
  color,
  className,
  ...rest
}) => {
  const Icon = _iconMap.default[name] || EmptyIcon;
  return /*#__PURE__*/React.createElement(Icon, _extends({
    color: color,
    className: className,
    style: {
      width: size,
      height: size
    }
  }, rest));
};
Icon.defaultProps = {
  size: "32px",
  color: "black"
};
var _default = Icon;
exports.default = _default;