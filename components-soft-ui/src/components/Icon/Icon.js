import iconMap from '../../assets/icons/icon-map'

const EmptyIcon = () => <div />

/**
 * Generic icon
 * @param name - icon name as defined in icon-map.js
 * @param size - icon size (width and height)
 * @param color - icon color (hexadecimal or TailwindCSS color)
 * @param className - additional TailwindCSS classes
 * @param rest - additional props
 * @returns {JSX.Element} - icon component
 */
const Icon = ({ name, size, color, className, ...rest }) => {
    const Icon = iconMap[name] || EmptyIcon
    return <Icon color={color} className={className} style={{ width: size, height: size }} {...rest} />
}

Icon.defaultProps = {
    size: '32px',
    color: 'black',
}

export default Icon
