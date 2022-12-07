import React, {useState} from "react";
import AssetSwitcher from "../AssetSwitcher/AssetSwitcher";

const Keyboard = (props) => {
    const [input, setInput] = useState("");
    const [userBalance] = useState(props?.userBalance);
    const formattedBalance = formatBalance(userBalance)
    const assets = ["USD", "COP", "ETH"];
    const MAX_VALUE = 10000;

    function formatBalance(balance) {
        return balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
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
                    <div className="flex"><AssetSwitcher assets={assets}/></div>
                    <div className="flex flex-col text-right">
                        <div className="font-light text-sm">{formattedBalance}</div>
                    <input
                        readOnly={true}
                        className="flex text-black focus:outline-none text-right"
                        type="text"
                        placeholder="0"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    </div>
                </div>
                <div className="grid grid-cols-3 bg-white rounded-md">
                    <button
                        className="flex justify-center items-center hover:bg-gray-400 text-center text-black font-bold p-4 rounded"
                        onClick={handleKeyPress}
                    >
                        1
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded items-center"
                        onClick={handleKeyPress}
                    >
                        2
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        3
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        4
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        5
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        6
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        7
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        8
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        9
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        .
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        0
                    </button>
                    <button
                        className="flex justify-center hover:bg-gray-400 text-black font-bold p-4 rounded inline-flex items-center"
                        onClick={handleKeyPress}
                    >
                        ⌫
                    </button>
                </div>
            </div>
        </div>)
}

export default Keyboard;