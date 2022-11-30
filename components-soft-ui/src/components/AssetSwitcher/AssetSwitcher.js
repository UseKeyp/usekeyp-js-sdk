const AssetSwitcher = (props) => {
    return (<div><label htmlFor="assets"></label>
    <select className="flex font-light p-2 bg-gray-50" name="assets" id="assets">
        {props.assets.map((asset, index) => {
            return (<option key={index} value={asset}>{asset}</option>)
        })}
    </select></div>)

}

export default AssetSwitcher;