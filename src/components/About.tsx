import {Container} from "@/components/Container"
import {Seymour_One, Sulphur_Point} from "@next/font/google"
import classNames from "@/Utils/ClassNames"
import BackgroundTexture2 from "@/components/BackgroundTexture2"
import {gsap} from "gsap";
import {Props} from "@/components/Hero";
import React from "react";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const About = ({cursorDotRef, cursorRef}: Props) => {
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

    return(
        <div id="about" className="relative pt-10 lg:pt-5 sm:pb-0">
            <BackgroundTexture2/>
            <Container className="relative">
                <div className="px-4 py-6 sm:pb-16 sm:px-6 lg:px-0">
                    <div>
                        <h2 onMouseEnter={hovered} onMouseLeave={hoveredOut} id="skills" className={classNames(seymour_one_400.className, "font-cursive text-xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-2xl lg:text-5xl")}>Over the years</h2>
                        <p onMouseEnter={hovered} onMouseLeave={hoveredOut} className={classNames(sulphur_point_400.className, "font-display text-xl tracking-tight dark:text-slate-300 pt-2 lg:pt-4")}>
                            How it all started.
                        </p>
                        <p onMouseEnter={hovered} onMouseLeave={hoveredOut} className={classNames(sulphur_point_400.className,"text-lg my-2 text-gray-600 dark:text-gray-400 leading-relaxed pt-6 lg:pt-12")}>
                            Back in 2016, I decided to try my hand at creating custom wordpress themes/plugins and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up and fintech company.

                            My main focus these days is building products and leading projects for our clients at Presta Capital LTD as the Lead Front End Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 5000 clients. In my free time I&apos;ve also enjoy creating solutions for individuals in various industries and other personal projects.

                            When I’m not at the computer, I’m usually working out, taking walks and hanging out with family and friends.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="absolute right-0 lg:right-12 lg:-bottom-44">
                <svg onMouseEnter={hovered} onMouseLeave={hoveredOut} className="lg:-mt-32" xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left"><path fill="none" stroke="#06b6d4" strokeMiterlimit="50" strokeWidth="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path></svg>
            </div>
        </div>
    )
}

export default About
