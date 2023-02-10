import b9a76a2 from "@/images/portfoliolight.avif"
import a9f8cbf from "@/images/portfoliodark.avif"
import Image from 'next/image'
const BackgroundTexture = () => {
    return (
        <div className="absolute top-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[108rem] flex-none flex justify-end">
                <Image
                    className="w-[71.75rem] flex-none max-w-none dark:hidden"
                    src={b9a76a2}
                    alt="Background texture light"
                />
                <Image
                    className="w-[90rem] flex-none max-w-none hidden dark:block"
                    src={a9f8cbf}
                    alt="Background texture dark"
                />
            </div>
        </div>
    )
}

export default BackgroundTexture
