import iconMap from '../../assets/icons/icon-map'

const EmptyIcon = () => <div />

const Icon = ({ name, size, color, className, ...rest }) => {
    const Icon = iconMap[name] || EmptyIcon
    return <Icon color={color} className={className} style={{ width: size, height: size }} {...rest} />
}

Icon.defaultProps = {
    size: '32px',
    color: 'black',
}

export default Icon
