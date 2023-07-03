import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

/**
 * Text will be rendered as text within the tooltip; if not provided, it will be blank or render 'TooltipChild'
 * @param {Object} tooltipChild accepts components that are rendered within the tooltip; it will take precedence over text
 * @param {string} position Options: Top (Default), Right, Bottom, Left
 * @param {string} tooltipType Options: Dark (Default), Success, Warning, Error, Info, Light
 * @param {string} effect Options: Solid (Default), Float
 * @param {number} id: A unique identifier for the tooltip that MUST be used if multiple tooltips are rendered in a page
 * @param {number} delayHideTime: The time in milliseconds that the tooltip will remain visible after the mouse leaves the tooltip
 **/

export const Tooltip = ({
  children,
  position,
  effect,
  tooltipType,
  tooltipChild,
  id,
  delayHideTime,
}) => {
  return (
    <div data-tooltip-id={id}>
      {children}
      <ReactTooltip
        id={id}
        place={position}
        float={effect === "float" ? true : false}
        type={tooltipType}
        clickable={true}
        delayHide={delayHideTime}
        className="!bg-gray-100 !border !border-gray-400 !text-sm !text=[#3A3C41] !z-50 !py-1.5 !px-2.5 !max-w-[161px]"
        classNameArrow="border-b border-r border-[#C5C8CC]"
      >
        {tooltipChild}
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
