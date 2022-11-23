/**
 * A card with an active app's details
 * @param src - the app's icon
 * @param name - the app's name
 * @param lastChange - the app's last change
 * @param MAU - the app's monthly active users
 * @param accessListItems - a user's permissions for their assets in the app
 * @returns {JSX.Element}
 * @constructor
 */
const AppCard = (props) => {
    const accessListItems = props.accessList.map((access) =>
        <li key={access}>{access}</li>
    );
    return (<div className="flex tracking-wide border border-gray-800 rounded-md w-fit p-2">
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-2">
                <div>{props.src}</div>
                <div className="text-gray-2400 font-bold">{props.name}</div>
            </div>
            <ul className="font-light">
                {accessListItems}
            </ul>
            <div className="flex flex-row pt-8 gap-x-16">
                <div className="flex flex-col text-left">
                    <div className="text-gray-800 text-xs">LAST CHANGE</div>
                    <div className="font-light">{props.lastChange}</div>
                </div>
                <div className="flex flex-col text-left">
                    <div className="text-gray-800 text-xs text-right">MAU</div>
                    <div className="font-light">{props.MAU}</div>
                </div>
            </div>
        </div>
    </div>)

}

export default AppCard