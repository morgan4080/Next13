import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import { Container } from '@/components/Container'
import { Astronaut } from "@/components/Astronaut"
import {Sulphur_Point, Seymour_One, Stalinist_One} from '@next/font/google'
import classNames from "@/Utils/ClassNames"
import {useEffect, useRef} from "react"
import BackgroundTexture2 from "@/components/BackgroundTexture2";
import BackgroundTexture3 from "@/components/BackgroundTexture3";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const stalinist_900 = Stalinist_One({subsets: ['latin'], weight: "400"})

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const animateContainerRef = useRef(null)
    const animateContainerRef1 = useRef(null)
    const animateContainerRef2 = useRef(null)
    const animateContainerRef3 = useRef(null)
    const animateContainerRef4 = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            if (animateContainerRef.current) {
                const animateParent: HTMLElement = animateContainerRef.current
                tl.from(animateParent.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1
                })
            }
            if (animateContainerRef1.current) {
                const animateParent1: HTMLElement = animateContainerRef1.current
                tl.from(animateParent1.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1
                })
            }
            if (animateContainerRef2.current) {
                const animateParent2: HTMLElement = animateContainerRef2.current
                tl.from(animateParent2.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1
                })
            }
            if (animateContainerRef3.current) {
                const animateParent3: HTMLElement = animateContainerRef3.current
                tl.from(animateParent3.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1
                })
            }
            if (animateContainerRef4.current) {
                const animateParent4: HTMLElement = animateContainerRef4.current
                tl.from(animateParent4, {
                    yPercent: 130,
                    stagger: 0.05,
                    opacity: 0,
                    duration: 1
                })
            }
        })
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <div className="relative overflow-hidden lg:min-h-screen pt-10 lg:pt-0 xl:pt-32">
            <Container className="relative">
                <BackgroundTexture2/>
                <BackgroundTexture3/>
                <div className="sm:rounded-2xl sm:flex sm:flex-row-reverse">
                    <div className="z-10 sm:flex-1 pt-0 lg:pt-20 lg:pl-10">
                        <Astronaut/>
                    </div>
                    <div className="sm:flex-1">
                        <div className="relative px-4 py-6 sm:pt-20 sm:px-6 lg:px-0 lg:mb-32">
                            <div className={classNames(seymour_one_400.className,"text-left lg:min-w-max text-3xl font-bold tracking-tight sm:text-5xl lg:text-8xl overflow-hidden")}>
                                <div ref={animateContainerRef} className="flex text-slate-900 dark:text-slate-200">
                                    <div>FRONT</div>
                                    <div>-</div>
                                    <div>END</div>
                                </div>
                            </div>
                            <div className={classNames(seymour_one_400.className,"text-left lg:min-w-max text-3xl font-bold tracking-tight sm:text-5xl lg:text-8xl overflow-hidden")}>
                                <div ref={animateContainerRef1} className="flex text-sky-500 dark:text-cyan-300">
                                    <div>DEVELOPER</div>
                                </div>
                            </div>
                            <div ref={animateContainerRef2} className={classNames(sulphur_point_400.className,"mt-6 max-w-lg text-left text-xl sm:max-w-3xl overflow-hidden text-slate-700 dark:text-slate-300")}>
                                <div>Based In Nairobi, Kenya</div>
                            </div>
                            <div ref={animateContainerRef3} className={classNames(sulphur_point_400.className,"mt-6 max-w-md text-left font-display text-xl tracking-tight sm:pr-8 sm:max-w-2xl overflow-hidden text-slate-700 dark:text-slate-300")}>
                                <div>
                                    I love creating beautiful and intuitive user experiences.
                                    Most importantly, Im a people person. That means, Im able to inspire and get inspired.
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <a href="mailto:morganmurungi@live.com" ref={animateContainerRef4} className={classNames(sulphur_point_400.className,"cursor-pointer mt-12 group inline-flex items-center justify-center py-4 px-6 text-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-500 dark:bg-cyan-300 text-white dark:text-slate-900 hover:text-slate-100 hover:bg-pink-400 active:bg-sky-800 active:text-sky-100 focus-visible:outline-sky-600")}>
                                    <span>GET IN TOUCH<span className="hidden lg:inline pl-4">→</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Hero
