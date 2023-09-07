import React from 'react';
import Image from "next/image";
import {Props} from "@/components/Hero";
import BackgroundTexture2 from "@/components/BackgroundTexture2";
import {Container} from "@/components/Container";
import classNames from "@/Utils/ClassNames";
import {gsap} from "gsap";
import {Seymour_One, Sulphur_Point} from "@next/font/google";

const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const Work = ({cursorDotRef, cursorRef}: Props) => {
    const works = [
        {
            name: "Mobi-flex APP (2023)",
            description: "A multi-tenant mobile application for android and iOS created with Kotlin multiplatform. \n" +
                "The application is a client application for the Presta loan management system, that \n" +
                "offers bookkeeping, savings and dividend management, workflow and rules \n" +
                "management, customer management and onboarding, loan appraisal and management. \n" +
                "This application has allowed Presta to grow its customer base and provide more value to \n" +
                "existing lenders on the company's portfolio.",
            url: ""
        },
        {
            name: "CODO APP (2023)",
            description: "A mobile app for android and iOS created with Kotlin multiplatform for MKM consulting \n" +
                "limited an accredited digital credit provider. This application is also integrated with \n" +
                "payment gateways like m-pesa and local bank paybill numbers to move loans and savings \n" +
                "from bank to m-pesa wallets, pay for commodities and make recurrent payments for \n" +
                "essential services.",
            url: ""
        },
        {
            name: "PCEA RUIRU SACCO (2023)",
            description: "A mobile app for android and iOS created with Kotlin multiplatform for Ruiru sacco society \n" +
                "limited an accredited digital credit provider. This application is also integrated with \n" +
                "payment gateways like m-pesa and local bank paybill numbers to move loans and savings \n" +
                "from bank to m-pesa wallets, pay for commodities and make recurrent payments for \n" +
                "essential services.",
            url: ""
        },
        {
            name: "Presta Sign APP (2022)",
            description: "A mobile application for android and iOS created in react native which allows users to \n" +
                "sign digital guarantor-ship and loan application forms. A client application for the Presta \n" +
                "guarantor-ship system, which allows microfinance organizations to process loan forms \n" +
                "quicker and comply with the Sacco society regulatory authority. Through this app Presta \n" +
                "was able to partner with other software providers in the lending space to integrate the \n" +
                "system and SDK.",
            url: ""
        },
        {
            name: "One-Pay Credit KYC PWA (2022)",
            description: "A progressive web application made for one pay credit limited that allows sales agents \n" +
                "to onboard customers as leads on the company's CRM. The PWA uses a NodeJS API. ",
            url: ""
        }
    ]

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
        <div id="work" className="relative pt-10 lg:pt-5 sm:pb-0">
            <BackgroundTexture2/>
            <Container className="relative">
                <div className="px-4 py-6 sm:pb-16 sm:px-6 lg:px-0">
                    <h2 onMouseEnter={hovered} onMouseLeave={hoveredOut} id="skills" className={classNames(seymour_one_400.className, "font-cursive text-xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-2xl lg:text-5xl")}>Work</h2>
                    <p onMouseEnter={hovered} onMouseLeave={hoveredOut} className={classNames(sulphur_point_400.className, "font-display text-xl tracking-tight dark:text-slate-300 pt-2 lg:pt-4")}>
                        Selected work I&apos;ve taken on in the past.
                    </p>
                    <ul className="flex flex-col lg:grid lg:grid-cols-3 gap-10 pt-12 lg:pt-20">
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        MobiFlex
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://drive.google.com/file/d/1YK2ADAWXrCMs83cpFuQPMs2-CVMfvBXe/view">play.google.com</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/mobiflex-logo.png" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/mobiflex-logo.png" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        Codo
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://drive.google.com/file/d/1E5mxho16JbQEvt70rnMAjfVzgj19YStI/view?usp=sharing">play.google.com</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/codo-logo.png" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/codo-logo-dark.png" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        PCEA SACCO
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://play.google.com/store/apps/details?id=com.presta.customer.pcea">play.google.com</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/pcearuiru-logo.png" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/pcearuiru-logo.png" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        Presta Sign
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://play.google.com/store/apps/details?id=com.presta.prestasign&hl=en_US">play.google.com</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/presta-sign-logo.png" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/presta-sign-logo.png" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        Presta Website
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://www.presta.co.ke">www.presta.co.ke</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/presta-logo.svg" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/presta-logo.svg" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        Presta Eguarantorship
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://eguarantorship.presta.co.ke">eguarantorship.presta.co.ke</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/eguarantorship-logo.svg" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/eguarantorship-logo.svg" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                        <li className="text-sm bg-slate-50 rounded leading-6 dark:bg-slate-800 dark:highlight-white/5 transition-all duration-500 shadow-2xl drop-shadow-none hover:drop-shadow-xl hover:-translate-y-2">
                            <figure className="relative flex flex-col-reverse bg-slate-50 dark:bg-slate-800 dark:highlight-white/5 rounded px-6">
                                <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                                        Presta LMS
                                    </h2>
                                    <p className="my-2 text-gray-600 dark:text-gray-400 pb-6">
                                        <a href="https://lending.presta.co.ke/lms/">lending.presta.co.ke</a>
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4 justify-center bg-gray-100 dark:bg-slate-700/20 py-6 -mx-6 h-52 rounded">
                                    <Image className="block dark:hidden w-auto h-full" src="/lms-logo.svg" alt="CODO logo" width={366} height={244} />
                                    <Image className="hidden dark:block w-auto h-full" src="/lms-logo.svg" alt="CODO logo" width={366} height={244} />
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </Container>

            <div className="w-full flex items-end justify-end md:-mt-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="523" height="214" viewBox="0 0 523 214" data-shape="true" aria-hidden="true" id="cs-pattern-right">
                    <path fill="#b5d877" d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"></path>
                    <path fill="none" stroke="#b5d877" strokeMiterlimit="50" strokeWidth="2" d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Work;