import { Container } from '@/components/Container'
import { Astronaut } from "@/components/Astronaut"
import { Sulphur_Point, Seymour_One } from '@next/font/google'
import classNames from "@/Utils/ClassNames"
import {useLayoutEffect, useRef} from "react"
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
    const containerRef = useRef(null)
    const animateContainerRef = useRef(null)
    const animateContainerRef1 = useRef(null)
    const animateContainerRef2 = useRef(null)
    const animateContainerRef3 = useRef(null)
    const animateContainerRef4 = useRef(null)
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            if (animateContainerRef.current) {
                const animateParent: HTMLElement = animateContainerRef.current
                tl.from(animateParent.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    duration: 1
                })
            }
            if (animateContainerRef1.current) {
                const animateParent1: HTMLElement = animateContainerRef1.current
                tl.from(animateParent1.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    duration: 1
                })
            }
            if (animateContainerRef2.current) {
                const animateParent2: HTMLElement = animateContainerRef2.current
                tl.from(animateParent2.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    duration: 1
                })
            }
            if (animateContainerRef3.current) {
                const animateParent3: HTMLElement = animateContainerRef3.current
                tl.from(animateParent3.children, {
                    yPercent: 130,
                    stagger: 0.05,
                    duration: 1
                })
            }
            if (animateContainerRef4.current) {
                const animateParent4: HTMLElement = animateContainerRef4.current
                tl.from(animateParent4, {
                    yPercent: 130,
                    stagger: 0.05,
                    duration: 1
                })
            }
        })
        return () => {
            ctx.revert()
        }
    }, [])
    return (
        <div className="relative min-h-screen pt-10 lg:pt-0 xl:pt-32 pb-20">
            <Container ref={containerRef} className="relative">
                <div className="sm:rounded-2xl sm:flex sm:flex-row-reverse">
                    <div className="z-10 sm:flex-1 pt-0 lg:pt-20 lg:pl-10">
                        <Astronaut/>
                    </div>
                    <div className="sm:flex-1">
                        <div className="relative px-4 py-6 sm:pt-20 sm:px-6 lg:px-0 lg:mb-32">
                            <div className={classNames(seymour_one_400.className,"text-left lg:min-w-max text-4xl font-bold tracking-tight sm:text-5xl lg:text-8xl overflow-hidden")}>
                                <div ref={animateContainerRef} className="flex ">
                                    <div>FRONT</div>
                                    <div>-</div>
                                    <div>END</div>
                                </div>
                            </div>
                            <div className={classNames(seymour_one_400.className,"text-left lg:min-w-max text-4xl font-bold tracking-tight sm:text-5xl lg:text-8xl overflow-hidden")}>
                                <div ref={animateContainerRef1} className="flex text-sky-500 ">
                                    <div>DEVELOPER</div>
                                </div>
                            </div>
                            <div ref={animateContainerRef2} className={classNames(sulphur_point_400.className,"mt-6 max-w-lg text-left text-xl text-gray-700 dark:text-gray-300 sm:max-w-3xl overflow-hidden")}>
                                <div>Based In Nairobi, Kenya</div>
                            </div>
                            <div ref={animateContainerRef3} className={classNames(sulphur_point_400.className,"mt-6 max-w-md text-left font-display text-xl tracking-tight text-gray-700 dark:text-gray-400 sm:pr-8 sm:max-w-2xl overflow-hidden")}>
                                <div>
                                    I love creating beautiful and intuitive user experiences.
                                    Most importantly, Im a people person. That means, Im able to inspire and get inspired.
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <button ref={animateContainerRef4} type="button" className={classNames(sulphur_point_400.className,"mt-12 group inline-flex items-center justify-center py-4 px-6 text-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-400 text-white hover:text-slate-100 hover:bg-pink-400 active:bg-sky-800 active:text-sky-100 focus-visible:outline-sky-600")}>
                                    <span>GET IN TOUCH<span className="hidden lg:inline pl-4">→</span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Hero
