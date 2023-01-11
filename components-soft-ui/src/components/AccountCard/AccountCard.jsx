import Icon from "../Icon/Icon.jsx";

const AccountCard = (props) => {
    const assets = props.assets;
    return (<div className="flex flex-row justify-between border border-white bg-white rounded-md p-2 font-light">
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-2">
            <div className="flex"><Icon key={props.icon} name={props.icon} /></div> <div className="flex text-blue-1200">{props.userID}</div>
            </div>
            <div className="flex text-gray-800 text-sm">{assets ? assets.map((asset, index) => {
                return (index ? ', ' : '') + asset;
            }) : "No Assets"}</div>
        </div>
        <div className="flex items-center"><Icon color="fill-gray-800" key="rightarrow" name="rightarrow"  /></div>
    </div>)
}

export default AccountCard;