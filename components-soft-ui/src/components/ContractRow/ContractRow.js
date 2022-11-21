/**
 * Displays a contract's details
 * @param src - The source image for the contract
 * @param title - The title of the contract
 * @param role - The role of the user in the contract
 * @param tokenType - The token standard the contract is using
 * @param creationDate - The date the contract was created
 * @param supply - The total token supply of the contract
 * @returns {JSX.Element}
 */
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