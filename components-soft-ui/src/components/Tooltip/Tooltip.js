import ReactTooltip from 'react-tooltip'

/**
 * Text will be rendered as text within the tooltip; if not provided, it will be blank or render 'TooltipChild'
 * @param {Object} tooltipChild accepts components that are rendered within the tooltip; it will take precedence over text
 * @param {string} position Options: Top (Default), Right, Bottom, Left
 * @param {string} tooltipType Options: Dark (Default), Success, Warning, Error, Info, Light
 * @param {string} effect Options: Solid (Default), Float
 * @param {string} bgColor: A string with proper TailwindCSS color classes or hexadecimal values
 * @param {string} borderColor: A string with proper TailwindCSS color classes or hexadecimal values
 * @param {number} id: A unique identifier for the tooltip that MUST be used if multiple tooltips are rendered in a page
 * @param {number} delayHideTime: The time in milliseconds that the tooltip will remain visible after the mouse leaves the tooltip
 **/
const Tooltip = ({
                     children,
                     position,
                     text,
                     effect,
                     tooltipType,
                     tooltipChild,
                     bgColor,
                     id,
                     borderColor,
                     delayHideTime,
                 }) => {
    if (!text) {
        text = ''
    }
    return (
        <div data-tip={text} data-for={id}>
            {children}
            <ReactTooltip
                id={id}
                place={position}
                type={tooltipType}
                backgroundColor={bgColor}
                border={!!borderColor}
                borderColor={borderColor}
                effect={effect}
                clickable={true}
                delayHide={delayHideTime}
            >
                {tooltipChild}
            </ReactTooltip>
        </div>
    )
}

export default Tooltip
