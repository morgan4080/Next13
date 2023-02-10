import {useLayoutEffect, useRef} from "react"
import Image from "next/image";
import WelcomeScreen from "@/images/1.1.1. - Welcome Screen.jpg"
import Onboarding1 from "@/images/1.1.2a - Onboarding 1-3.png"
import Onboarding2 from "@/images/1.1.2b - Onboarding 2-3.png"
import Onboarding3 from "@/images/1.1.2c - Onboarding3.png"
import {gsap} from "gsap"
import { CustomEase } from "gsap/dist/CustomEase"
gsap.registerPlugin(CustomEase)
const IphoneMockup = () => {
    const welcomeScreenRef = useRef(null)
    const onboarding1Ref = useRef(null)
    const onboarding2Ref = useRef(null)
    const onboarding3Ref = useRef(null)
    CustomEase.create('customEase', '0.25,0.1,0.25,1')
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (welcomeScreenRef.current && onboarding1Ref.current && onboarding2Ref.current && onboarding3Ref.current) {
                const welcomeScreen: HTMLElement = welcomeScreenRef.current
                const onboarding1: HTMLElement = onboarding1Ref.current
                const onboarding2: HTMLElement = onboarding2Ref.current
                const onboarding3: HTMLElement = onboarding3Ref.current
                const tl = gsap.timeline(
                    {
                        duration: 1,
                        repeat: -1,
                        ease: 'customEase'
                    }
                );

                tl.from(onboarding1,{
                    xPercent: 130,
                    delay: 5
                }).from(onboarding2,{
                    xPercent: 130,
                    delay: 5
                }).from(onboarding3,{
                    xPercent: 130,
                    delay: 5
                }).from(welcomeScreen, {
                    xPercent: 0,
                    delay: 5
                })

                // tl.call(() => console.log("sequence complete"))
            }
        })
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <svg viewBox="0 0 366 729" role="img" className="lg:absolute w-[22.875rem] max-w-full drop-shadow-2xl">
            <title>App screenshot</title>
            <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                </clipPath>
            </defs>
            <path
                className="z-20"
                fill="#D6D6D6"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
            />
            <path
                className="z-20"
                fill="#f3f4f6"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
            />
            <foreignObject
                className="absolute"
                ref={welcomeScreenRef}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={WelcomeScreen} alt="Welcome Screen"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={onboarding1Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Onboarding1} alt="Onboarding Screen One"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={onboarding2Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Onboarding2} alt="Onboarding Screen Two"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={onboarding3Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Onboarding3} alt="Onboarding Screen Three"/>
            </foreignObject>
        </svg>
    )
}

export default IphoneMockup