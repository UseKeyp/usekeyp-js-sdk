const AssetSwitcher = (props) => {
    return (<><label htmlFor="assets"></label>
    <select className="flex font-light p-2 bg-gray-50 rounded-md" name="assets" id="assets">
        {props.assets.map((asset, index) => {
            return (<option key={index} value={asset}>{asset}</option>)
        })}
    </select></>)

}

export default AssetSwitcher;