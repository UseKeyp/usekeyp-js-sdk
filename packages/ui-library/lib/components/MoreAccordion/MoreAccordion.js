"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MoreAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MoreAccordion = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col min-h-[48px] rounded-lg border border-gray-300 w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center pt-3 px-3 justify-between cursor-pointer",
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-base text-gray-1200 font-normal"
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    className: "flex items-center justify-center rounded-full"
  }, isOpen ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    key: "arrow_up",
    name: "arrow_up",
    height: "8",
    width: "14"
  }) : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    key: "arrow_down",
    name: "arrow_down",
    height: "8",
    width: "14"
  }))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex pt-4"
  }, children));
};
exports.MoreAccordion = MoreAccordion;
var _default = MoreAccordion;
exports.default = _default;