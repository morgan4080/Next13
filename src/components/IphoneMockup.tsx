import {useEffect, useRef} from "react"
import Image from "next/image"
import {gsap} from "gsap"
import { CustomEase } from "gsap/dist/CustomEase"
import WelcomeScreen from "@/images/1.1.1. - Welcome Screen.jpg"
import Onboarding1 from "@/images/1.1.2a - Onboarding 1-3.png"
import Onboarding2 from "@/images/1.1.2b - Onboarding 2-3.png"
import Onboarding3 from "@/images/1.1.2c - Onboarding3.png"
import Signup1 from "@/images/1.3.2 - Type of an account.png"
import Signup2 from "@/images/1.3.3 - Select Country.png"
import Signup3 from "@/images/1.3.4a - Select Country 1-2.png"
import Signup4 from "@/images/1.3.4b - Select Country 2-2.png"
import Signup5 from "@/images/1.3.5a - Phone Number 1-2.png"
import Signup6 from "@/images/1.3.5b - Phone Number 2-2.png"
import Signup7 from "@/images/1.3.6a - OTP 1-3.png"
import Signup8 from "@/images/1.3.6b - OTP 2-3.png"
import Signup9 from "@/images/1.3.6c - OTP 3-3.png"
import Signup10 from "@/images/1.3.7 - Phone verified.png"
import Signup11 from "@/images/1.3.8a - Passcode 1-3.png"
import Signup12 from "@/images/1.3.8b - Passcode 2-3.png"
import Signup13 from "@/images/1.3.8c - Passcode 3-3.png"
import Signup14 from "@/images/1.3.9 - Pasccode set up.png"

gsap.registerPlugin(CustomEase)
const IphoneMockup = () => {
    const welcomeScreenRef = useRef(null)
    const onboarding1Ref = useRef(null)
    const onboarding2Ref = useRef(null)
    const onboarding3Ref = useRef(null)
    const signup1Ref = useRef(null)
    const signup2Ref = useRef(null)
    const signup3Ref = useRef(null)
    const signup4Ref = useRef(null)
    const signup5Ref = useRef(null)
    const signup6Ref = useRef(null)
    const signup7Ref = useRef(null)
    const signup8Ref = useRef(null)
    const signup9Ref = useRef(null)
    const signup10Ref = useRef(null)
    const signup11Ref = useRef(null)
    const signup12Ref = useRef(null)
    const signup13Ref = useRef(null)
    const signup14Ref = useRef(null)

    CustomEase.create('customEase', '0.25,0.1,0.25,1')

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (
                welcomeScreenRef.current &&
                onboarding1Ref.current &&
                onboarding2Ref.current &&
                onboarding3Ref.current &&
                signup1Ref.current &&
                signup2Ref.current &&
                signup3Ref.current &&
                signup4Ref.current &&
                signup5Ref.current &&
                signup6Ref.current &&
                signup7Ref.current &&
                signup8Ref.current &&
                signup9Ref.current &&
                signup10Ref.current &&
                signup11Ref.current &&
                signup12Ref.current &&
                signup13Ref.current &&
                signup14Ref.current
            ) {
                const welcomeScreen: HTMLElement = welcomeScreenRef.current
                const onboarding1: HTMLElement = onboarding1Ref.current
                const onboarding2: HTMLElement = onboarding2Ref.current
                const onboarding3: HTMLElement = onboarding3Ref.current
                const signup1: HTMLElement = signup1Ref.current
                const signup2: HTMLElement = signup2Ref.current
                const signup3: HTMLElement = signup3Ref.current
                const signup4: HTMLElement = signup4Ref.current
                const signup5: HTMLElement = signup5Ref.current
                const signup6: HTMLElement = signup6Ref.current
                const signup7: HTMLElement = signup7Ref.current
                const signup8: HTMLElement = signup8Ref.current
                const signup9: HTMLElement = signup9Ref.current
                const signup10: HTMLElement = signup10Ref.current
                const signup11: HTMLElement = signup11Ref.current
                const signup12: HTMLElement = signup12Ref.current
                const signup13: HTMLElement = signup13Ref.current
                const signup14: HTMLElement = signup14Ref.current

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
                }).from(signup1,{
                    xPercent: 130,
                    delay: 5
                }).from(signup2,{
                    xPercent: 130,
                    delay: 5
                }).from(signup3,{
                    xPercent: 130,
                    delay: 5
                }).from(signup4,{
                    xPercent: 130,
                    delay: 5
                }).from(signup5,{
                    xPercent: 130,
                    delay: 5
                }).from(signup6,{
                    xPercent: 130,
                    delay: 5
                }).from(signup7,{
                    xPercent: 130,
                    delay: 5
                }).from(signup8,{
                    xPercent: 130,
                    delay: 5
                }).from(signup9,{
                    xPercent: 130,
                    delay: 5
                }).from(signup10,{
                    xPercent: 130,
                    delay: 5
                }).from(signup11,{
                    xPercent: 130,
                    delay: 5
                }).from(signup12,{
                    xPercent: 130,
                    delay: 5
                }).from(signup13,{
                    xPercent: 130,
                    delay: 5
                }).from(signup14,{
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
        <svg viewBox="0 0 366 729" role="img" className="w-[22.875rem] max-w-full drop-shadow-2xl">
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
            <foreignObject
                className="absolute"
                ref={signup1Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup1} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup2Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup2} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup3Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup3} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup4Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup4} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup5Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup5} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup6Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup6} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup7Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup7} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup8Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup8} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup9Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup9} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup10Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup10} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup11Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup11} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup12Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup12} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup13Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
            {/*    Add Images here*/}
                <Image src={Signup13} alt="Onboarding Screen Three"/>
            </foreignObject>
            <foreignObject
                className="absolute"
                ref={signup14Ref}
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
                {/*    Add Images here*/}
                <Image src={Signup14} alt="Onboarding Screen Three"/>
            </foreignObject>
        </svg>
    )
}

export default IphoneMockup
