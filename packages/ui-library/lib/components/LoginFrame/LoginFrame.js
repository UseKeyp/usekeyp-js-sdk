"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LoginFrame = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "border rounded-[6px] border-gray-200 max-w-[357px] p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex font-normal text-base text-gray-1600 mb-4"
  }, "Log in with"), /*#__PURE__*/React.createElement("div", null, children), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-normal text-[9px] text-gray-800 mr-0.5"
  }, "Powered by", " "), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-px"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    key: "keypnameandlogo",
    name: "keypnameandlogo",
    width: "35px",
    color: "fill-red"
  }))));
};
var _default = LoginFrame;
exports.default = _default;