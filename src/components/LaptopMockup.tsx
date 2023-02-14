import Image from "next/image"
import screenshot from "@/images/project-app-screenshot.png"
import screenshot1 from "@/images/loan-request.png"
import screenshot2 from "@/images/member.png"
import {useEffect, useRef} from "react"
import {gsap} from "gsap"
import { CustomEase } from "gsap/dist/CustomEase"
gsap.registerPlugin(CustomEase)
const LaptopMockup = () => {
    const screenshotRef = useRef(null)
    const screenshotRef1 = useRef(null)
    const screenshotRef2 = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (screenshotRef.current && screenshotRef1.current && screenshotRef2.current) {
                const screenshot0: HTMLElement = screenshotRef.current
                const screenshot1: HTMLElement = screenshotRef1.current
                const screenshot2: HTMLElement = screenshotRef2.current

                const tl = gsap.timeline(
                    {
                        duration: 1,
                        repeat: -1,
                        ease: 'customEase',
                        yoyo: true
                    }
                )

                tl.fromTo(screenshot0, {
                    display: 'block'
                },{
                    display: 'none',
                    delay: 5
                }).fromTo(screenshot1, {
                    display: 'block'
                },{
                    display: 'none',
                    delay: 5
                }).fromTo(screenshot2, {
                    display: 'block'
                },{
                    display: 'none',
                    delay: 5
                })
            }
        })
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <div className="absolute lg:-mr-32 md:mt-12 z-20 max-w-3xl flex-none">
            <div className="-m-2 rounded-xl bg-gray-200 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="flex">
                    <Image
                        ref={screenshotRef}
                        src={screenshot}
                        alt="App screenshot"
                        width={2432}
                        height={1442}
                        className="w-[76rem] flex-1 rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                    <Image
                        ref={screenshotRef1}
                        src={screenshot1}
                        alt="App screenshot"
                        width={2432}
                        height={1442}
                        className="w-[76rem] flex-1 rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                    <Image
                        ref={screenshotRef2}
                        src={screenshot2}
                        alt="App screenshot"
                        width={2432}
                        height={1442}
                        className="w-[76rem] flex-1 rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                </div>
            </div>
        </div>
    )
}

export default LaptopMockup
