```jsx
import Icon from '../Icon/Icon';

<div>
    <Button variant="green" size='' fluid={true}>Accept Highest Bid</Button>
    <div className="gap-y-4">---</div>
    <Button href="https://www.google.com/" variant="blue" size="regular" fluid={false}><div>Link to Google</div></Button>
    <div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-[#4285F4] hover:border-[#4285F4]" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon name="google"></Icon>  
        </div>
    </Button>
<div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-black hover:border-black" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon name="apple"></Icon>
        </div>
    </Button>
    <div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-[#5865F2] hover:border-[#5865F2]" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon name="discord"></Icon>
        </div>
    </Button>
    <div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon height="300px" width="400px" name="twitter"></Icon>
        </div>
    </Button>
    <div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-[#6c9d41] hover:border-[#6c9d41]" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon height="300px" width="400px" color="fill-black group-hover:fill-white" name="chess_com"></Icon>
        </div>
    </Button>
    <div className="gap-y-4">---</div>
    <Button classNameVariant="hover:bg-black hover:border-[#6c9d41]" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon height="300px" width="400px" color="fill-[#24292f] group-hover:fill-white" name="github"></Icon>
        </div>
    </Button>
</div>
```