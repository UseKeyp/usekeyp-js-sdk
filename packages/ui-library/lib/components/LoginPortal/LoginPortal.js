"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _LoginButton = _interopRequireDefault(require("../LoginButton/LoginButton"));
var _LoginFrame = _interopRequireDefault(require("../LoginFrame/LoginFrame"));
var _MoreAccordion = require("../MoreAccordion/MoreAccordion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  return /*#__PURE__*/_react.default.createElement(_LoginFrame.default, null, providers.map(provider => /*#__PURE__*/_react.default.createElement(_LoginButton.default, {
    provider: provider,
    key: provider,
    onLogin: () => handleClick(provider),
    loading: loading[provider],
    disabled: disabled
  })), additionalProviders && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react.default.createElement(_MoreAccordion.MoreAccordion, {
    title: "More"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap gap-x-2 pl-3"
  }, additionalProviders.map(provider => {
    return /*#__PURE__*/_react.default.createElement(_LoginButton.default, {
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