const NFTCard = (props) => {
    return (<div className="flex flex-col p-2 w-fit rounded-md border border-gray-300 bg-white">
        <img className="h-30 w-30 rounded-md" alt="" src={props.src}/>
        <div className="font-bold text-md pt-1">{props.name}</div>
    </div>);
}

export default NFTCard;