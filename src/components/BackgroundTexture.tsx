import pdark from "@/images/portfolio-dark.png"
import plight from "@/images/portfolio-light.png"
import Image from 'next/image'
const BackgroundTexture = () => {
    return (
        <div className="absolute top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[108rem] flex-none flex justify-end">
                <picture>
                    <source srcSet="/portfoliolight.avif" type="image/avif" />
                    <Image
                        className="w-[71.75rem] flex-none max-w-none dark:hidden"
                        src={plight}
                        alt="Background texture light"
                    />
                </picture>
                <picture>
                    <source srcSet="/portfoliodark.avif" type="image/avif" />
                    <Image
                        className="w-[90rem] flex-none max-w-none hidden dark:block"
                        src={pdark}
                        alt="Background texture dark"
                    />
                </picture>
            </div>
        </div>
    )
}

export default BackgroundTexture
