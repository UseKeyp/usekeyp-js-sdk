const ContractRow = (props) => {
    return (
        <div className="flex flex-row pt-4 pb-4 border-y border-gray-300 justify-between w-full">
            <div>{props.src}&nbsp;&nbsp;{props.title}</div>
            <div>{props.role}</div>
            <div>{props.tokenType}</div>
            <div>{props.creationDate}</div>
            <div>{props.supply}</div>
        </div>);
}

export default ContractRow;