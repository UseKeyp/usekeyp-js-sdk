const AppCard = (props) => {
    const accessListItems = props.accessList.map((access) =>
        <li>{access}</li>
    );
    return (<div className="flex font-body tracking-wide border border-gray-800 rounded-md w-fit p-2">
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-2">
                <div>{props.src}</div>
                <div className="font-bold">{props.name}</div>
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