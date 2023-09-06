import {Container} from "@/components/Container"
import {Seymour_One, Sulphur_Point} from "@next/font/google"
import clsx from 'clsx'
import classNames from "@/Utils/ClassNames"
import stack from "@/Utils/stack"
import { Tab } from '@headlessui/react'
import {useEffect, useState} from "react"
import { DiamondIcon } from '@/components/DiamondIcon'
import BackgroundTexture2 from "@/components/BackgroundTexture2"
import BackgroundTexture3 from "@/components/BackgroundTexture3"
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const Skills = () => {
    let [tabOrientation, setTabOrientation] = useState('horizontal')
    let [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    const setIndex: any = (index: number) => {
        setCurrentIndex(index)
    }
    return(
        <div className="min-h-screen relative pt-10 lg:pt-5 pb-32 sm:pb-0">
            <BackgroundTexture2/>
            <BackgroundTexture3/>
            <Container className="relative">
                <div className="relative px-4 py-6 sm:px-6 lg:px-0">
                    <div className="max-w-2xl mx-0">
                        <h2 id="skills" className={classNames(seymour_one_400.className, "font-cursive text-4xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-5xl lg:text-6xl")}>Skills</h2>
                        <p className={classNames(sulphur_point_400.className, "mt-4 font-display text-xl tracking-tight dark:text-slate-300")}>
                            I specialize in HTML/CSS, JavaScript, Typescript, React, React-Native and Vue JS.
                            With a keen eye for detail, Im driven by the desire to build great products that help people engage with technology in meaningful ways.
                        </p>
                    </div>
                    <Tab.Group
                        onChange={setIndex}
                        as="div"
                        className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
                        vertical={tabOrientation === 'vertical'}
                    >
                        <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                            <div className="relative">
                                <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
                                <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                                    {({ selectedIndex }: any): any =>
                                        stack.map((item, index) => (
                                            <div key={item.name} className="relative lg:pl-8">
                                                <DiamondIcon
                                                    className={clsx(
                                                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                                                        index === selectedIndex
                                                            ? 'fill-sky-500 stroke-sky-500 dark:fill-cyan-600 dark:stroke-cyan-300'
                                                            : 'fill-transparent stroke-slate-400'
                                                    )}
                                                />
                                                <div className="relative">
                                                    <div
                                                        className={clsx(
                                                            'font-mono text-sm',
                                                            index === selectedIndex
                                                                ? 'text-sky-500 dark:text-sky-300'
                                                                : 'text-slate-500'
                                                        )}
                                                    >
                                                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                                                            <span className="absolute inset-0" />
                                                            {item.description}
                                                        </Tab>
                                                    </div>
                                                    <div
                                                        className={classNames(index === selectedIndex
                                                            ? "text-sky-500 dark:text-cyan-300" : "", "mt-1.5 block font-semibold tracking-tight")}
                                                    >
                                                        <span className={classNames(seymour_one_400.className)}>{item.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Tab.List>
                            </div>
                        </div>
                        <Tab.Panels className="lg:col-span-3">
                            { stack.map((item) => (
                                <Tab.Panel
                                    key={item.name}
                                    className="relative lg:min-h-screen lg:-mt-32 flex justify-end items-start [&:not(:focus-visible)]:focus:outline-none"
                                    unmount={true}
                                >
                                    <item.svg />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </Container>
        </div>
    )
}

export default Skills
