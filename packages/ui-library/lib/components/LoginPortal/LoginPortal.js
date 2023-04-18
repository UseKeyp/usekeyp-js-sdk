"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _LoginButton = _interopRequireDefault(require("../LoginButton/LoginButton"));
var _LoginFrame = _interopRequireDefault(require("../LoginFrame/LoginFrame"));
var _MoreAccordion = require("../MoreAccordion/MoreAccordion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LoginPortal = ({
  providers,
  additionalProviders,
  onClick
}) => {
  const [loading, setLoading] = (0, _react.useState)({});
  const [disabled, setDisabled] = (0, _react.useState)(false);
  const handleClick = provider => {
    setLoading({
      [provider]: true
    });
    setDisabled(true);
    onClick(provider);
  };
  return /*#__PURE__*/React.createElement(_LoginFrame.default, null, providers.map(provider => /*#__PURE__*/React.createElement(_LoginButton.default, {
    provider: provider,
    key: provider,
    onLogin: () => handleClick(provider),
    loading: loading[provider],
    disabled: disabled
  })), additionalProviders && /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement(_MoreAccordion.MoreAccordion, {
    title: "More"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-2 pl-3"
  }, additionalProviders.map(provider => {
    return /*#__PURE__*/React.createElement(_LoginButton.default, {
      provider: provider,
      key: provider,
      size: "square",
      onLogin: () => handleClick(provider),
      loading: loading[provider],
      disabled: disabled
    });
  })))));
};
var _default = LoginPortal;
exports.default = _default;