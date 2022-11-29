const UserDetailsCard = (props) => {
    return (<div className="flex bg-white rounded-md flex-col p-2 gap-y-2">
        <div className="flex"><img className="rounded-md h-[112px] w-[112px] " alt="" src={props.src} /></div>
        <div className="flex font-light text-lg text-blue-1200">{props.name}</div>
        <ul>
            {props.contactMethods.map(person => {
                return (
                    <li className="flex flex-col mb-2" key={person.id}>
                        <span className="flex text-gray-800 text-xs">{person.method}</span>
                        <span className="flex font-light">{person.value}</span>
                    </li>
                )
            })}
        </ul>


    </div>)
}

export default UserDetailsCard;