import {Link} from '@redwoodjs/router'
import PropTypes from 'prop-types'

const Button = ({
                    children,
                    label,
                    variant,
                    onClick,
                    size,
                    textColor,
                    borderColor,
                    fluid,
                    to,
                    href,
                    alt,
                    classNameVariant,
                    ...rest
                }) => {
    const Element = href ? 'a' : 'button'
    if (to) {
        return (
            <Link className={`${classNameVariant ? classNameVariant : ''} block group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]
            ${textColor ? textColor : 'text-white'} 
            ${size === 'regular' && !fluid ? 'h-[48px] w-[200px]' : ''}
            ${size === 'small' && !fluid ? 'h-[32px] w-[200px]' : ''}
            ${size === 'square' && !fluid ? 'h-[48px] w-[48px]' : ''}
            ${fluid && !size ? 'h-[48px] w-full' : 'h-[48px] w-content'}
            ${borderColor ? borderColor : ''}
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-1200' : ''}
            ${variant === 'green' ? 'bg-green-1200' : ''}
            ${variant === 'blue' ? 'bg-blue-1200' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            `}
                  onClick={() => onClick()}
                  data-variant={variant}
                  data-size={size}
                  data-textcolor={textColor}
                  data-fluid={String(fluid)}
                  to={to}
                  {...rest}
            >
                {label || children}
            </Link>
        )
    }


    return (
        <Element className={`${classNameVariant ? classNameVariant : ''} block group text-center text-lg leading-button font-bold tracking-wide rounded-[6px]
            ${textColor ? textColor : 'text-white'} 
            ${size === 'regular' && !fluid ? 'h-[48px] w-[200px]' : ''}
            ${size === 'small' && !fluid ? 'h-[32px] w-[200px]' : ''}
            ${size === 'square' && !fluid ? 'h-[48px] w-[48px]' : ''}
            ${fluid && !size ? 'h-[48px] w-full' : 'h-[48px] w-content'}
            ${borderColor ? 'border ' + borderColor : ''}
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-1200' : ''}
            ${variant === 'green' ? 'bg-green-1200' : ''}
            ${variant === 'blue' ? 'bg-blue-1200' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            `}
                 onClick={() => onClick()}
                 data-variant={variant}
                 data-size={size}
                 data-textcolor={textColor}
                 data-fluid={String(fluid)}
                 href={href || ''}
                 alt={alt || ''}
                 {...rest}
        >
            {label || children}
        </Element>
    )
}

Button.defaultProps = {
    variant: 'transparent',
    size: 'regular',
    textColor: 'text-white',
    fluid: false,
    onClick: () => {
    },
}

Button.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.any,
    textColor: PropTypes.string,
    fluid: PropTypes.bool,
    to: PropTypes.any,
    href: PropTypes.string,
    alt: PropTypes.string,
}

export default Button
