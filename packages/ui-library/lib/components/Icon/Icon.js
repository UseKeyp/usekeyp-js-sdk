"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _iconMap = _interopRequireDefault(require("../../assets/icons/icon-map.js"));
var _excluded = ["name", "size", "color", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var EmptyIcon = function EmptyIcon() {
  return /*#__PURE__*/React.createElement("div", null);
};

/**
 * Generic icon
 * @param name - icon name as defined in icon-map.js
 * @param size - icon size (width and height)
 * @param color - icon color (hexadecimal or TailwindCSS color)
 * @param className - additional TailwindCSS classes
 * @param rest - additional props
 * @returns {JSX.Element} - icon component
 */
var Icon = function Icon(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Icon = _iconMap["default"][name] || EmptyIcon;
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
exports["default"] = _default;