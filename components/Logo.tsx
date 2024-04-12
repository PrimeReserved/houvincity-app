import Image from "next/image";
import LogoImage from "@/public/logo.svg"

const Logo = (props: any) => {
    const {renderDefault, title} = props;
    <Image
      src={LogoImage}
      width={50}
      height={50}
      alt="Logo"
    />
    
    return (
        <>{renderDefault(props)}</>
    )
};

export default Logo;