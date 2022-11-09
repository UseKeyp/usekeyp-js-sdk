import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Tooltip from "../Tooltip/Tooltip";

const CreateApp = () => {
    return (
        <div className="flex flex-col gap-y-2 border border-gray-300 p-2 w-80 rounded-md">
            <div className="flex flex-row gap-x-2">
                <div className="text-gray-800 text-xs">
                    IMAGE
                    <Button size="px-2 py-2 mt-1" variant="green" fluid={false}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 3C0 1.34314 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34314 24 0 22.6569 0 21V3ZM3 2C2.44771 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44771 21.5523 2 21 2H3Z"
                                  fill="white"/>
                            <path d="M5 17L8 12L11 15L15 9L19 17H5Z" fill="white"/>
                            <path
                                d="M9.5 9C10.3284 9 11 8.32843 11 7.5C11 6.67157 10.3284 6 9.5 6C8.67157 6 8 6.67157 8 7.5C8 8.32843 8.67157 9 9.5 9Z"
                                fill="white"/>
                        </svg>
                    </Button>
                </div>
                <div className="text-gray-800 text-xs">
                    EMOJI
                    <Button size="px-2 py-2 mt-1" variant="green" fluid={false}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                                  fill="white"/>
                            <path
                                d="M7.5 11C8.32843 11 9 10.3284 9 9.5C9 8.67157 8.32843 8 7.5 8C6.67157 8 6 8.67157 6 9.5C6 10.3284 6.67157 11 7.5 11Z"
                                fill="white"/>
                            <path
                                d="M16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z"
                                fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.4453 15.1679C7.90483 14.8616 8.5257 14.9858 8.83205 15.4453C9.57928 16.5662 11.0406 17 12 17C12.7991 17 13.3869 16.8868 13.8597 16.6605C14.3215 16.4395 14.7484 16.0747 15.1679 15.4453C15.4743 14.9858 16.0952 14.8616 16.5547 15.1679C17.0142 15.4743 17.1384 16.0952 16.8321 16.5547C16.2516 17.4253 15.5671 18.0605 14.7232 18.4645C13.8902 18.8632 12.9779 19 12 19C10.6578 19 8.42072 18.4338 7.16795 16.5547C6.8616 16.0952 6.98577 15.4743 7.4453 15.1679Z"
                                  fill="white"/>
                        </svg>
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
                    <TextInput variant="mt-1" placeholder="Name Your App"/>
                </div>
            </div>
            <div className="flex flex-row gap-x-2">
                <Button size="px-6 py-3" borderColor="border-gray-300" variant="transparent"
                        textColor="text-gray-800">Cancel</Button>
                <Button size="px-10 py-3" variant="green">Create App</Button>
            </div>
        </div>)
}

export default CreateApp