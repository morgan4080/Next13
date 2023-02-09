import Head from 'next/head'
import Hero from "@/components/Hero"
import NavComponent from "@/components/NavComponent"
import Skills from "@/components/Skills"
import BackgroundTexture from "@/components/BackgroundTexture";
import {Seymour_One} from "@next/font/google";
import classNames from "@/Utils/ClassNames";
import {useLayoutEffect, useRef, useState} from "react";
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
import {gsap} from "gsap"
export default function Home() {
    const [loading, setLoading] = useState(true)
    const loadingRef = useRef(null)

    useLayoutEffect(() => {
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

    return (
        <>
            <Head>
                <title>Portfolio | HOME</title>
                <meta name="description" content="Morgan Mutugi Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {loading ?
                    <div className="min-h-screen bg-white flex justify-center items-center">
                        <div className="overflow-hidden">
                            <h1 ref={loadingRef} className={classNames(seymour_one_400.className, "flex text-sky-500 text-4xl")}>
                                <div>LOADING</div>
                            </h1>
                        </div>
                    </div>
                    :
                    <>
                        <BackgroundTexture/>
                        <NavComponent/>
                        <Hero />
                        <Skills />
                    </>
                }
            </main>
        </>
    )
}
