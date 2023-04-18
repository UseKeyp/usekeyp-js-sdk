"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Icon = _interopRequireDefault(require("../Icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const colorVariants = {
  DISCORD: {
    hover: "hover:bg-brand-discord",
    active: "bg-brand-discord",
    borderColor: "border-brand-discord",
    hoverBorder: "hover:border-brand-discord"
  },
  TWITTER: {
    hover: "hover:bg-brand-twitter",
    active: "bg-brand-twitter",
    borderColor: "border-brand-twitter",
    hoverBorder: "hover:border-brand-twitter"
  },
  GOOGLE: {
    hover: "hover:bg-brand-google",
    active: "bg-brand-google",
    borderColor: "border-brand-google",
    hoverBorder: "hover:border-brand-google"
  },
  APPLE: {
    hover: "hover:bg-black",
    active: "bg-black",
    borderColor: "border-black",
    hoverBorder: "hover:border-black"
  },
  black: {
    hover: "hover:bg-black",
    active: "bg-black",
    borderColor: "border-black",
    hoverBorder: "hover:border-black"
  }
};
const getBrandColor = provider => {
  return colorVariants[provider] || colorVariants.black;
};
const LoginButton = ({
  provider,
  size,
  onLogin,
  loading = false,
  disabled
}) => {
  const {
    hover: hoverBg,
    active: activeBg,
    borderColor: borderColor,
    hoverBorder
  } = getBrandColor(provider);
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, size === "square" ? /*#__PURE__*/React.createElement(_Button.default, {
    size: size,
    onClick: onLogin,
    classNameVariant: `justify-center ${loading ? activeBg : ""} ${!disabled && hoverBg}`,
    borderColor: `${loading ? borderColor : "border-gray-200"} ${!loading && !disabled && hoverBorder}`,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center"
  }, loading ? /*#__PURE__*/React.createElement(_Icon.default, {
    name: "loading_animated",
    width: "30",
    height: "30"
  }) : /*#__PURE__*/React.createElement(_Icon.default, {
    name: provider,
    loading: loading,
    disabled: disabled
  }))) : /*#__PURE__*/React.createElement(_Button.default, {
    size: size,
    fluid: true,
    onClick: onLogin,
    classNameVariant: `justify-center ${loading ? activeBg : ""} ${!disabled && hoverBg}`,
    borderColor: `${loading ? borderColor : "border-gray-200"} ${!loading && !disabled && hoverBorder}`,
    textColor: `
          ${loading && "text-white"} 
          ${!loading && disabled && "text-gray-800"}
          ${!loading && !disabled && "text-gray-1200"}
          ${!disabled && "hover:text-white"}`,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mr-4 ml-2 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-4"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    name: provider,
    className: "mr-2",
    loading: loading,
    disabled: disabled
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-base font-normal capitalize"
  }, provider.toLowerCase()), loading && /*#__PURE__*/React.createElement("div", {
    className: "ml-auto"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    name: "loading_animated",
    width: "30",
    height: "30"
  })))));
};
var _default = LoginButton;
exports.default = _default;