import Tooltip from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const APIKeyGenerator = (props) => {
    const [apiKey, setApiKey] = useState(props.clientSecret);
    const [copySuccess, setCopySuccess] = useState('Click to copy key');
    const [regenerateConfirmation, setRegenerateConfirmation] = useState(false);
    let clientSecretSection;

    async function generateAPIKey() {
        const apiKey = uuidv4();
        setApiKey('CS-' + apiKey);
        setRegenerateConfirmation(false);
    }

    function handleCopy() {
        navigator.clipboard.writeText(apiKey);
        setCopySuccess('Copied!');
        setTimeout(() => {
            setCopySuccess('Click to copy key');
        }, 2000);
    }

    let regenerateConfirmationSection = <div className="flex flex-col">
        <div className="font-light">Regenerate your API Key? The current one wil become invalid.</div>
        <div className="flex flex-row gap-x-2 justify-end">
            <Button variant="green" onClick={() => generateAPIKey()}>Confirm</Button>
            <Button onClick={() => setRegenerateConfirmation(false)} size="regular" borderColor="border-gray-300" variant="transparent"
                    textColor="text-gray-800">Cancel</Button>
        </div>
    </div>

    if (apiKey) {
        clientSecretSection = (<div className="flex w-fit h-fit bg-red-100 rounded-md p-2">
            <div className="flex flex-col">
                <div className="flex text-red-1200 gap-x-1">Secret
                    <div className="flex mt-1"><Tooltip id="secret-text" delayHideTime={250} effect="float"
                                                        borderColor="#C6CED2"
                                                        bgColor="#eef0f2" position="top"
                                                        tooltipChild={<div
                                                            className="text-black">Placeholder
                                                            text
                                                        </div>}>
                        <Icon color="fill-red-1200" name="tooltip"/>
                    </Tooltip></div>
                </div>
                <div className="flex flex-row gap-x-2">
                    <div className="flex font-light">{apiKey}</div>
                    <div className="flex" onClick={() => {
                        handleCopy()
                    }}
                    ><Tooltip id="client-secret" delayHideTime={250}
                              effect="float"
                              borderColor="#C6CED2"
                              bgColor="#eef0f2"
                              position="top"
                              tooltipChild={<div
                                  className="text-black">{copySuccess}

                              </div>}>
                        <Icon color="fill-red-1200" name="copy"/>
                    </Tooltip>
                    </div>
                </div>
            </div>
        </div>)
    }
    return (<div className="flex flex-col w-full border border-gray-800 rounded-md p-2 gap-y-4 overflow-auto">
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
                <div className="flex text-gray-800 text-xs gap-x-1">CLIENT ID<Tooltip id="client-id" delayHideTime={250}
                                                                                      effect="float"
                                                                                      borderColor="#C6CED2"
                                                                                      bgColor="#eef0f2" position="top"
                                                                                      tooltipChild={<div
                                                                                          className="text-black">Placeholder
                                                                                          text
                                                                                      </div>}>
                    <Icon color="fill-gray-800" name="tooltip"/>
                </Tooltip></div>
                <div className="flex font-light">{props.clientID}</div>
            </div>
            <div className="flex gap-x-3">
                <div className="flex flex-col">
                    <div className="flex text-gray-800 text-xs">CREATED BY</div>
                    <div className="flex font-light">{props.createdBy}</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex text-gray-800 text-xs gap-x-1">CREATED<Tooltip id="created" delayHideTime={250}
                                                                                        effect="float"
                                                                                        borderColor="#C6CED2"
                                                                                        bgColor="#eef0f2" position="top"
                                                                                        tooltipChild={<div
                                                                                            className="text-black">Placeholder
                                                                                            text
                                                                                        </div>}>
                        <Icon color="fill-gray-800" name="tooltip"/>
                    </Tooltip></div>
                    <div className="flex font-light">{props.created}</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex text-gray-800 text-xs gap-x-1">LAST USED<Tooltip id="last-used"
                                                                                          elayHideTime={250}
                                                                                          effect="float"
                                                                                          borderColor="#C6CED2"
                                                                                          bgColor="#eef0f2"
                                                                                          position="top"
                                                                                          tooltipChild={<div
                                                                                              className="text-black">Placeholder
                                                                                              text
                                                                                          </div>}>
                        <Icon color="fill-gray-800" name="tooltip"/>
                    </Tooltip></div>
                    <div className="flex font-light">{props.lastUsed}</div>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-between gap-x-2 w-full">
            {clientSecretSection}
           <div className="flex items-end">{regenerateConfirmation ? regenerateConfirmationSection : <Button variant="green" onClick={() => setRegenerateConfirmation(true)}>Regenerate</Button>}</div>
        </div>
    </div>)
}

export default APIKeyGenerator;