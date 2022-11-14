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
                    isSelected,
                    fluid,
                    to,
                    href,
                    alt,
                    ...rest
                }) => {
    const Element = href ? 'a' : 'button'
    if (to) {
        return (
            <Link className={`block text-center text-lg leading-button font-bold tracking-wide rounded-[6px] transition-all transitionDuration-250 hover:scale-102 hover:brightness-75
            ${textColor ? textColor : 'text-white'} 
            ${size === 'regular' ? 'py-3 px-6' : size}
            ${borderColor ? borderColor : ''}
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-400' : ''}
            ${variant === 'green' ? 'bg-green-400' : ''}
            ${variant === 'blue' ? 'bg-blue-400' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            ${fluid === true ? 'w-full' : 'w-content'}
            `}
                  onClick={() => onClick()}
                  data-variant={variant}
                  data-size={size}
                  data-textcolor={textColor}
                  data-selected={isSelected}
                  data-fluid={String(fluid)}
                  to={to}
                  {...rest}
            >
                {label || children}
            </Link>
        )
    }


    return (
        <Element className={`block text-center text-lg leading-button font-bold tracking-wide rounded-[6px] transition-all transitionDuration-250 hover:scale-102 hover:brightness-75
            ${textColor ? textColor : 'text-white'} 
            ${size === 'regular' ? 'py-3 px-6' : size}
            ${borderColor ? 'border ' + borderColor : ''}
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-1200' : ''}
            ${variant === 'green' ? 'bg-green-1200' : ''}
            ${variant === 'blue' ? 'bg-blue-1200' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            ${fluid === true ? 'w-full' : 'w-content'}
            `}
                 onClick={() => onClick()}
                 data-variant={variant}
                 data-size={size}
                 data-textcolor={textColor}
                 data-selected={String(isSelected)}
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
    isSelected: false,
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
    isSelected: PropTypes.bool,
    fluid: PropTypes.bool,
    to: PropTypes.any,
    href: PropTypes.string,
    alt: PropTypes.string,
}

export default Button
