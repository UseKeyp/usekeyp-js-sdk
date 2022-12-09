import React, {useState} from "react";
import AssetSwitcher from "../AssetSwitcher/AssetSwitcher";
import {getETHExchangeRate} from "../../api/getETHExchangeRate";

const Keyboard = (props) => {
    const [input, setInput] = useState("");
    const [selectedCurrency] = useState("USD");
    const [userBalance] = useState(props?.userBalance);
    const formattedBalance = formatBalance(userBalance)
    const assets = ["USD", "ETH"];
    const MAX_VALUE = 10000;
    const numbersAndSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"];

    function formatBalance(balance) {
        if (selectedCurrency === "USD") {
            return balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        } else if (selectedCurrency === "ETH") {
            return (balance * getETHExchangeRate()).toLocaleString('en-US', {style: 'currency', currency: 'ETH'});
        }
    }

    const isNumeric = function (val) {
        const objRegExp = /^\s*-?\d+(\.\d{1,2})?\s*$/;
        if (objRegExp.test(val) && val <= MAX_VALUE && input !== "0") {
            return true;
        }
        return false;
    };

    function countString(str, letter) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === letter) {
                count += 1;
            }
        }
        return count;
    }

    const handleKeyPress = (e) => {
        const key = e.target.innerText;
        if (key === ".") {
            countString(input, ".") < 1 && setInput(input + key);
        } else if (key === "⌫") {
            setInput(input.slice(0, -1));
        } else if (key === "0" && input === "0") {
            return;
        } else {
            isNumeric(input + key) && setInput(input + key);
        }
    };
    return (<div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col gap-y-2 mb-4">
            <div className="flex flex-row gap-x-2 justify-between bg-white rounded-md p-2">
                <div className="flex flex-col">
                    <div>&nbsp;</div>
                    <AssetSwitcher assets={assets}/></div>
                <div className="flex flex-col text-right">
                    <div className="font-light text-sm">{formattedBalance}</div>
                    <input
                        readOnly={true}
                        className={`flex ${input > userBalance ? 'text-red-600' : 'text-black'} font-bold focus:outline-none text-right`}
                        type="text"
                        placeholder="0"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 bg-white rounded-md">
                {numbersAndSymbols.map((numberOrSymbol) => (<button
                        key={numberOrSymbol}
                        className="flex justify-center items-center hover:bg-gray-400 text-center text-black font-bold p-4 rounded"
                        onClick={handleKeyPress}
                    >
                        {numberOrSymbol}
                    </button>))}
            </div>
        </div>
    </div>)
}

export default Keyboard;