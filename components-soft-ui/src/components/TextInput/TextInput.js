const TextInput = (props) => {
    return (<input type="text"
                   className={`${props.variant} w-full pl-4 text-sm focus:shadow-soft-sm ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-300 focus:border-green-400 focus:outline-none focus:transition-shadow`}
                   placeholder={props.placeholder}/>);
}

export default TextInput;