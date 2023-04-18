"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MoreAccordion = void 0;
var _react = require("react");
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MoreAccordion = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col min-h-[48px] rounded-lg border border-gray-300 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center pt-3 px-3 justify-between cursor-pointer",
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base text-gray-1200 font-normal"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center justify-center rounded-full"
  }, isOpen ? /*#__PURE__*/React.createElement(_Icon.default, {
    key: "arrow_up",
    name: "arrow_up",
    height: "8",
    width: "14"
  }) : /*#__PURE__*/React.createElement(_Icon.default, {
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
exports.default = _default;