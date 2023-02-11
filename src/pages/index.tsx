import Head from 'next/head'
import Hero from "@/components/Hero"
import NavComponent from "@/components/NavComponent"
import Skills from "@/components/Skills"
import BackgroundTexture from "@/components/BackgroundTexture";
import {Seymour_One} from "@next/font/google";
import classNames from "@/Utils/ClassNames";
import {useEffect, useRef, useState} from "react";
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
import {gsap} from "gsap"
import BackgroundTexture2 from "@/components/BackgroundTexture2";
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

    return (
        <>
            <Head>
                <title>Mutugi Morgan</title>
                <meta name="description" content="Morgan Mutugi Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {loading ?
                    <div className="min-h-screen flex justify-center items-center">
                        <div className="overflow-hidden">
                            <h1 ref={loadingRef} className={classNames(seymour_one_400.className, "flex text-sky-500 dark:text-cyan-300 text-4xl")}>
                                <div>LOADING</div>
                            </h1>
                        </div>
                    </div>
                    :
                    <div>
                        <BackgroundTexture/>
                        <NavComponent toggleMode={toggleMode}/>
                        <Hero />
                        <Skills />
                    </div>
                }
            </main>
        </>
    )
}
