/**
 * Generic card for displaying an NFT
 * @param {string} src: A string with the URL of an image to be displayed
 * @param {Object} children: An alternative to using src--render directly within the card
 * @returns {JSX.Element} A card with an image defined by src or children
 */
const NFTCard = (props) => {
    return (<div className="flex flex-col p-2 w-fit rounded-md border border-gray-300 bg-white">
        {props.src && <img className="h-30 w-30 rounded-md" alt="" src={props.src}/> }
        <div>{props.children}</div>
        <div className="font-bold text-md pt-1">{props.name}</div>
    </div>);
}

export default NFTCard;