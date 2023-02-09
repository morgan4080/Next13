import {Container} from "@/components/Container";
import {Seymour_One, Sulphur_Point} from "@next/font/google";
import classNames from "@/Utils/ClassNames";
import BackgroundTexture2 from "@/components/BackgroundTexture2";
import stack from "@/Utils/stack";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const Skills = () => {
    return(
        <div className="min-h-screen relative pt-10 lg:pt-5 pb-20">
            <Container>
                <div className="relative px-4 py-6 sm:pb-28 sm:px-6 lg:px-0">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 id="skills" className={classNames(seymour_one_400.className, "font-cursive text-4xl text-slate-900 dark:text-slate-200 font-bold tracking-tight sm:text-5xl lg:text-6xl")}>Stack</h2>
                        <p className={classNames(sulphur_point_400.className, "mt-4 font-display text-xl tracking-tight")}>
                            I specialize in HTML/CSS, JavaScript, Typescript, React, React-Native and Vue JS.
                            With a keen eye for detail, Im driven by the desire to build great products that help people engage with technology in meaningful ways.
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
                        <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block"></div>
                            <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left"
                                 role="tablist"
                                 aria-orientation="vertical"
                            >
                                {stack.map((item) => (
                                    <div key={item.name} className="relative lg:pl-8">
                                        <svg aria-hidden="true" viewBox="0 0 6 6"
                                             className="absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block fill-sky-600 dark:fill-cyan-600 stroke-sky-600 dark:stroke-cyan-300">
                                            <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                                        </svg>
                                        <div className="relative">
                                            <div className="font-mono text-sm text-sky-500 dark:text-slate-300">
                                                <button type="button">
                                                    <span className="absolute inset-0"></span>
                                                    {item.description}
                                                </button>
                                            </div>
                                            <time dateTime="2022-04-04" className="mt-1.5 block text-2xl font-semibold tracking-tight text-sky-500 dark:text-cyan-300">
                                                {item.name}
                                            </time>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="mt-16 sm:mt-24 lg:-mt-44 flex justify-end">
                                <svg viewBox="0 0 366 729" role="img" className="w-[22.875rem] max-w-full drop-shadow-xl">
                                    <title>App screenshot</title>
                                    <defs>
                                        <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                            <rect width={316} height={684} rx={36} />
                                        </clipPath>
                                    </defs>
                                    <path
                                        fill="#4B5563"
                                        d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                    />
                                    <path
                                        fill="#343E4E"
                                        d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                                    />
                                    <foreignObject
                                        width={316}
                                        height={684}
                                        transform="translate(24 24)"
                                        clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                    >

                                    </foreignObject>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills
