"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MoreAccordion = void 0;
var _react = require("react");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MoreAccordion = function MoreAccordion(_ref) {
  var title = _ref.title,
    children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col min-h-[48px] rounded-lg border border-gray-300 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center pt-3 px-3 justify-between cursor-pointer",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base text-gray-1200 font-normal"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center justify-center rounded-full"
  }, isOpen ? /*#__PURE__*/React.createElement(_Icon["default"], {
    key: "arrow_up",
    name: "arrow_up",
    height: "8",
    width: "14"
  }) : /*#__PURE__*/React.createElement(_Icon["default"], {
    key: "arrow_down",
    name: "arrow_down",
    height: "8",
    width: "14"
  }))), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "flex pt-4"
  }, children));
};
exports.MoreAccordion = MoreAccordion;
var _default = MoreAccordion;
exports["default"] = _default;