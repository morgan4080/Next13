import {Container} from "@/components/Container";
import {Sulphur_Point, Stalinist_One} from "@next/font/google";
import classNames from "@/Utils/ClassNames";
import {Props} from "@/components/Hero";
import {gsap} from "gsap";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const stalinist_900 = Stalinist_One({subsets: ['latin'], weight: "400"})
const Footer = ({cursorDotRef, cursorRef}: Props) => {
    const backToTop = () => {
        if (document) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    const hovered = () => {
        if (cursorDotRef.current) {
            let doc: HTMLElement = cursorDotRef.current;
            gsap.to(doc, { display: "none" })
        }
        if (cursorRef.current) {
            let doc: HTMLElement = cursorRef.current;
            gsap.to(doc, { scale: 2, border: "none", backgroundColor: "#f3f2f9" })
        }
    }
    const hoveredOut = () => {
        if (cursorDotRef.current) {
            let doc: HTMLElement = cursorDotRef.current;
            gsap.to(doc, { display: "block" })
        }
        if (cursorRef.current) {
            let doc: HTMLElement = cursorRef.current;
            gsap.to(doc, { scale: 1, border: "2px solid", backgroundColor: "rgba(243,242,249,0)" })
        }
    }
    return (
        <Container>
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 xl:col-span-3 lg:mt-20">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <ul role="list" className={classNames(sulphur_point_400.className, "mt-6 space-y-4")}>

                            <li>
                                <a href="https://twitter.com/mutugimorgan_" target="_blank" rel="noreferrer noopener" className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">TWITTER</a>
                            </li>

                            <li>
                                <a href="https://github.com/morgan4080" target="_blank" rel="noreferrer noopener" className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">GITHUB</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/morgan-mutugi-murungi/" target="_blank" rel="noreferrer noopener" className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">LINKEDIN</a>
                            </li>

                            <li>
                                <div className={classNames(sulphur_point_400.className, "sm:pt-12")}>
                                    <a href="mailto:morganmurungi@live.com" className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">MORGANMURUNGI@LIVE.COM</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <ul role="list" className={classNames(sulphur_point_400.className, "mt-6 space-y-4")}>

                            <li>
                                <a href="tel:+254720753971" className="text-xl opacity-0 leading-6 dark:text-gray-300 hover:text-sky-500">MORGAN MUTUGI</a>
                            </li>

                            <li>
                                <a href="tel:+254720753971" className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">REACH OUT</a>
                            </li>

                            <li>
                                <a href="tel:+254720753971" className="text-xl underline leading-6 dark:text-gray-300 hover:text-sky-500">+254720753971</a>
                            </li>

                            <li>
                                <div className={classNames(sulphur_point_400.className, "sm:pt-12")}>
                                    <span className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">NAIROBI, KENYA</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <ul role="list" className={classNames(sulphur_point_400.className, "mt-6 space-y-4")}>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li>
                                <div className={classNames(sulphur_point_400.className, "sm:pt-12")}>
                                    <span className="text-xl leading-6 dark:text-gray-300 hover:text-sky-500">
                                        DESIGN BY <a className="underline" href="https://www.linkedin.com/in/morgan-mutugi-murungi/" target="_blank" rel="noreferrer noopener">MORGAN MUTUGI</a></span>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <ul role="list" className={classNames(sulphur_point_400.className, "mt-6 space-y-4")}>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li>
                                <div className="opacity-0 hidden md:block">x</div>
                            </li>

                            <li className="sm:text-right">
                                <button onClick={backToTop} type="button" className={classNames(sulphur_point_400.className, "sm:pt-12 sm:ml-auto")}>
                                    <div className="cursor-pointer text-xl relative leading-6 dark:text-gray-300 hover:text-sky-500">
                                        <div className="origin-center rotate-270 absolute -right-6">→</div>
                                        BACK TO TOP
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-12 pb-8 md:flex md:items-center md:justify-center text-sky-500 dark:text-cyan-300">
                <div className={classNames(stalinist_900.className, "text-center font-black sm:text-8xl")}>GET IN TOUCH</div>
            </div>
        </Container>
    )
}

export default Footer
