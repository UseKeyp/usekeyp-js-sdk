import Icon from "../Icon/Icon";

const UserCard = (props) => {
    return (<div className="flex flex-row justify-between border border-white bg-white rounded-md p-2">
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-2">
                <div className="flex"><img className="h-[48px] w-[48px] rounded-md" alt="" src={props.src}/></div>
                <div className="flex flex-col">
                <div className="flex text-blue-1200 items-center">{props.name}</div>
                <div className="flex text-gray-800 text-sm">{props.phone}</div>
                </div>
            </div>
        </div>
        <div className="flex items-center"><Icon color="fill-gray-800" key="rightarrow" name="rightarrow"/></div>
    </div>)
}

export default UserCard;