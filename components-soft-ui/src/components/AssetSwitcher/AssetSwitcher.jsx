import {useState} from "react";

const AssetSwitcher = (props) => {
    const [selectedAsset, setSelectedAsset] = useState(props.assets[0]);

    const handleChange = (event) => {
        setSelectedAsset(event.target.value);
    };

    return (
        <>
            <select
                className="flex font-light p-2 bg-gray-50 rounded-md"
                name="assets"
                id="assets"
                value={selectedAsset}
                onChange={handleChange}
            >
                {props.assets.map((asset, index) => (
                    <option key={index} value={asset}>{asset}</option>
                ))}
            </select>
        </>
    );
};


export default AssetSwitcher;