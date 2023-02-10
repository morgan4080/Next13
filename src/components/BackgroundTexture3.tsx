import Image from "next/image";
import lightBg from "@/images/light_grid.svg"
const BackgroundTexture3 = () => {
    return (
       <Image
           className="w-full h-full block dark:hidden absolute bottom-0"
           src={lightBg}
           alt="light-background"
       />
    )
}

export default BackgroundTexture3