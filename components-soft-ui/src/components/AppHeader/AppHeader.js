import Button from "../Button/Button";

const AppHeader = () => {
    return (<div className="flex flex-row w-full justify-between border-t border-gray-300 pt-2">
        <div className="text-gray-800 pt-2 font-bold text-2xl">Apps</div>
        <Button variant="green">Create App</Button>
    </div>)
}

export default AppHeader;