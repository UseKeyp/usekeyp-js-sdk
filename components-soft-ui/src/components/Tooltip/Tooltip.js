import ReactTooltip from 'react-tooltip'

/**
 * Text will be rendered as text within the tooltip; if not provided, it will be blank or render 'TooltipChild'
 * TooltipChild accepts components that are rendered within the tooltip; it will take precedence over text
 * Position Options: Top (Default), Right, Bottom, Left
 * TooltipType Options: Dark (Default), Success, Warning, Error, Info, Light
 * Effect Options: Float (Default), Solid
 * BackgroundColor: A string with general color names or hexadecimal values
 * BorderColor: A string with general color names or hexadecimal values
 * DelayHideTime: Milliseconds to delay the tooltip from disappearing so the user can interact w/tooltip content
 *
 * A unique ID for each tooltip must be provided to prevent duplicate rendering of tooltips
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
