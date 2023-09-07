import React, {useEffect, useRef, useState} from "react"
import Head from 'next/head'
import Hero from "@/components/Hero"
import NavComponent from "@/components/NavComponent"
import BackgroundTexture from "@/components/BackgroundTexture";
import {Seymour_One} from "@next/font/google"
import classNames from "@/Utils/ClassNames"
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
import {gsap} from "gsap"
import Footer from "@/components/Footer"
import About from "@/components/About"
import Experience from "@/components/Experience";
import Work from "@/components/Work";
export default function Home() {
    const [loading, setLoading] = useState(true)
    const loadingRef = useRef(null)

    useEffect(() => {
        if (document.documentElement) {
            // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            const mainNode: HTMLElement = document.documentElement
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                mainNode.classList.add('dark')
            } else {
                mainNode.classList.remove('dark')
            }
        }
        const ctx = gsap.context(() => {
            if (loadingRef.current) {
                const loadingElem: HTMLElement = loadingRef.current
                const tl = gsap.timeline()
                tl.to(loadingElem.children, 1, {
                    yPercent: 130,
                    ease: "back.out",
                    stagger: 0.05
                }, 1)

                tl.call(() => setLoading(false))
            }
        })
        return () => {
            ctx.revert()
        }
    }, [])

    const toggleMode = (mode: string) => {
        if (mode === 'dark') {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
        }

        if (mode === "light") {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
        }

        if (mode === "OS") {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        }

        if (document.documentElement) {
            // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            const mainNode: HTMLElement = document.documentElement
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                mainNode.classList.add('dark')
            } else {
                mainNode.classList.remove('dark')
            }
        }
    }

    const cursorDot = useRef(null);
    const cursor = useRef(null);

    const getCursorPosition = (event: any) => {
        let body = document.querySelector("body")

        if (cursorDot.current) {
            let doc: HTMLElement = cursorDot.current;
            gsap.to(doc, { left: event.pageX, top: event.pageY, opacity: 1, ease: "bounce.out", yoyoEase: "power2.out", duration: 0.3, stagger: 0.1 })
        }

        if (cursor.current) {
            let doc: HTMLElement = cursor.current;
            gsap.to(doc, { left: event.pageX, top: event.pageY, opacity: 1, borderWidth: "2px", ease: "bounce.out", yoyoEase: "power2.out", duration: 0.3, stagger: 0.2  });
        }
    }

    const mouseLeft = () => {
        if (cursor.current) {
            let doc: HTMLElement = cursor.current;
            gsap.to(doc, { opacity: 0 });
        }
        if (cursorDot.current) {
            let doc: HTMLElement = cursorDot.current;
            gsap.to(doc, { opacity: 0 });
        }
    }

    return (
        <div onMouseMove={getCursorPosition} onMouseLeave={mouseLeft}>
            <Head>
                <title>Home | Morgan Mutugi</title>
                <meta name="description" content="Morgan Mutugi Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="relative">
                { loading ?
                    <div className="min-h-screen flex justify-center items-center">
                        <div className="overflow-hidden">
                            <h1 ref={loadingRef} className={classNames(seymour_one_400.className, "flex text-sky-500 dark:text-cyan-300 text-4xl")}>
                                <div>LOADING</div>
                            </h1>
                        </div>
                    </div>
                    :
                    <>
                        <BackgroundTexture />
                        <NavComponent toggleMode={toggleMode}/>
                        <Hero cursorDotRef={cursorDot} cursorRef={cursor} />
                        <About cursorDotRef={cursorDot} cursorRef={cursor} />
                        <Experience cursorDotRef={cursorDot} cursorRef={cursor} />
                        <Work cursorDotRef={cursorDot} cursorRef={cursor} />
                        <Footer cursorDotRef={cursorDot} cursorRef={cursor} />
                    </>
                }
            </main>
            <div ref={cursorDot} className="z-50 pointer-events-none w-1 h-1 fixed transition bg-slate-800 dark:bg-white lg:absolute cursor-dot"></div>
            <div ref={cursor} className="z-50 pointer-events-none w-8 h-8 fixed transition border-slate-800 dark:border-white lg:absolute cursor"></div>
        </div>
    )
}
