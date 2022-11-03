import {Link} from '@redwoodjs/router'
import PropTypes from 'prop-types'

const Button = ({
                    children,
                    label,
                    variant,
                    onClick,
                    size,
                    textColor,
                    isSelected,
                    className,
                    fluid,
                    to,
                    href,
                    alt,
                    ...rest
                }) => {
    const Element = href ? 'a' : 'button'

    if (to) {
        return (
            <Link className={`block text-center text-lg leading-button font-bold py-3 px-3 rounded-lg transition-all transitionDuration-250 hover:scale-102 hover:brightness-90
            ${className} ${textColor ? textColor : 'text-white'} 
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-400' : ''}
            ${variant === 'green' ? 'bg-green-400' : ''}
            ${variant === 'blue' ? 'bg-blue-400' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            ${fluid === true ? 'w-full' : 'w-fit'}
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
        <Element className={`block text-center text-lg leading-button font-bold py-3 px-3 rounded-lg transition-all transitionDuration-250 hover:scale-102 hover:brightness-90
            ${className} ${textColor ? textColor : 'text-white'} 
            ${variant === 'transparent' ? 'bg-transparent' : ''} 
            ${variant === 'grey' ? 'bg-gray-400' : ''}
            ${variant === 'green' ? 'bg-green-400' : ''}
            ${variant === 'blue' ? 'bg-blue-400' : ''}
            ${variant === 'white' ? 'bg-white' : ''}
            ${variant === 'black' ? 'bg-black' : ''}
            ${fluid === true ? 'w-full' : 'w-fit'}
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
    className: '',
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
    className: PropTypes.string,
    to: PropTypes.any,
    href: PropTypes.string,
    alt: PropTypes.string,
}

export default Button
