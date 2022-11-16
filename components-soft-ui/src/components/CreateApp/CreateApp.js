import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Tooltip from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import {useState} from 'react';

const CreateApp = () => {
    const [isImageActive, setIsImageActive] = useState(false);
    const [isEmojiActive, setIsEmojiActive] = useState(false);

    return (
        <div className="flex flex-col gap-y-2 border border-gray-300 p-2 w-80 rounded-md">
            <div className="flex flex-row gap-x-2">
                <div className="text-gray-800 text-xs">
                    IMAGE
                    <Button onClick={() => setIsImageActive(!isImageActive)} classNameVariant={isImageActive ? 'bg-white hover:bg-white' : 'bg-green-1200'} borderColor={isImageActive && 'border-gray-300'} size="square" variant="green" fluid={false}>
                        <Icon color={isImageActive ? 'fill-black' : 'fill-white'} name="landscape" />
                    </Button>
                </div>
                <div className="text-gray-800 text-xs">
                    EMOJI
                    <Button onClick={() => setIsEmojiActive(!isEmojiActive)} classNameVariant={isEmojiActive ? 'bg-white hover:bg-white' : 'bg-green-1200'} borderColor={isEmojiActive && 'border-gray-300'} variant="green" size="square" fluid={false}>
                        <Icon color={isEmojiActive ? 'fill-black' : 'fill-white'} name="smilingFace" />
                    </Button>
                </div>
                <div className="text-gray-800 text-xs  w-full">
                    <div className="flex flex-row gap-x-1">
                        <div>NAME</div>
                        <Tooltip delayHideTime={250} effect="float" borderColor="#C6CED2" bgColor="#eef0f2"
                                 position="top"
                                 tooltipChild={<div className="text-black">Tooltip explainer. Make it short and sweet
                                     but still clear. Can
                                     have
                                     <a className="text-[#0b54da] ml-1" href="https://www.google.com" rel="noreferrer"
                                        target="_blank">links</a>
                                 </div>}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 12C2.69023 12 0 9.30977 0 6C0 2.69023 2.69023 0 6 0C9.30977 0 12 2.69023 12 6C12 9.30977 9.30977 12 6 12ZM6 0.837209C3.15349 0.837209 0.837209 3.15349 0.837209 6C0.837209 8.84651 3.15349 11.1628 6 11.1628C8.84651 11.1628 11.1628 8.84651 11.1628 6C11.1628 3.15349 8.84651 0.837209 6 0.837209Z"
                                    fill="#B0BBC1"/>
                                <path
                                    d="M5.44472 6.79895C5.44472 7.12491 5.71503 7.39522 6.04099 7.39522C6.36696 7.39522 6.63727 7.13286 6.63727 6.79895V6.63199C6.63727 6.40938 6.73267 6.27423 7.04273 6.06752C7.28919 5.90056 7.95702 5.44739 7.95702 4.54106C7.95702 3.48367 7.09838 2.625 6.04099 2.625C4.9836 2.625 4.125 3.48367 4.125 4.54106C4.125 4.86702 4.39531 5.13733 4.72124 5.13733C5.0472 5.13733 5.31751 4.86702 5.31751 4.54106C5.31751 4.14354 5.64348 3.81755 6.04099 3.81755C6.43851 3.81755 6.76447 4.14354 6.76447 4.54106C6.76447 4.74777 6.66907 4.88291 6.37491 5.08167C6.37189 5.08375 6.36881 5.08586 6.36568 5.08801C6.10456 5.26739 5.44472 5.72069 5.44472 6.63199V6.79895Z"
                                    fill="#B0BBC1"/>
                                <path
                                    d="M5.44482 8.77873C5.44482 9.10469 5.70718 9.375 6.0411 9.375C6.37501 9.375 6.63737 9.10469 6.63737 8.77873C6.63737 8.45277 6.36706 8.18246 6.0411 8.18246C5.71513 8.18246 5.44482 8.45277 5.44482 8.77873Z"
                                    fill="#B0BBC1"/>
                            </svg>
                        </Tooltip>
                    </div>
                    <TextInput placeholder="Name Your App"/>
                </div>
            </div>
            <div className="flex flex-row gap-x-2">
                <Button size="regular" borderColor="border-gray-300" variant="transparent"
                        textColor="text-gray-800">Cancel</Button>
                <Button fluid={true} size="" variant="green">Create App</Button>
            </div>
        </div>)
}

export default CreateApp