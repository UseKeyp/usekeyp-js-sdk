/**
 * Handles text input
 * @param {string} placeholder: A string that will be rendered as placeholder text
 * @param {string} variant: TailwindCSS classes that will be applied to the componnet
 * @param {string} size: Options: small, regular (Default)
 **/
const TextInput = (props) => {
    return (<input type="text"
                   className={`${props.variant} w-full ${props.size === 'small' ? 'h-[32px]' : 'h-[48px]'} pl-4 text-sm focus:shadow-soft-sm ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding pr-3 text-gray-700 transition-all placeholder:text-gray-300 focus:border-green-400 focus:outline-none focus:transition-shadow`}
                   placeholder={props.placeholder}/>);
}

export default TextInput;