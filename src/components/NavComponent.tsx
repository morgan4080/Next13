import {Fragment, useEffect, useState} from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import Link from "next/link"
import Morgan from "@/components/Morgan"
import {Sulphur_Point} from "@next/font/google"
import classNames from "@/Utils/ClassNames"
import {useRouter} from "next/router";
import cn from "classnames";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})

const navLinks = [
    { id: 1, name: "Home", url: "#" },
    { id: 2, name: "About", url: "#about" },
    { id: 3, name: "Github", url: "https://github.com/morgan4080" },
];
const NavComponent = ({toggleMode}: {toggleMode: (mode: string) => void}) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <header className="fixed w-full z-50">
            <Popover className={cn(sulphur_point_400.className, "sticky top-0 bg-opacity-25 backdrop-blur backdrop-filter transition-transform firefox:bg-opacity-90", {
                "translate-y-0": showNav,
                "-translate-y-40": !showNav,
            })}>
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <Link href="/" className={cn(
                            "sticky top-0 mr-auto flex items-end transition-transform",
                            {
                                "translate-y-0": showNav,
                                "-translate-y-20": !showNav,
                            }
                        )} >
                            <span className="sr-only">Developer Portfolio | Morgan Mutugi</span>
                            <div className="flex items-center justify-center text-3xl font-black font-serif text-gray-700 dark:text-white">
                                <span className="text-sky-500 dark:text-cyan-300 text-4xl font-light">#</span>
                            </div>
                            <Morgan className="h-6 w-auto pl-2" />
                        </Link>
                    </div>


                    <div className="flex items-center justify-between w-1/3">
                        <nav
                            className={cn(
                                "sticky top-0 ml-auto flex max-w-3xl items-center justify-between p-4 transition-transform dark:bg-black-900 lg:max-w-4xl lg:p-0 lg:py-4",
                                {
                                    "translate-y-0": showNav,
                                    "-translate-y-20": !showNav,
                                }
                            )}
                        >
                            <ul className="hidden rounded-full bg-white/90 px-2 py-2 text-sm font-medium text-black-800 shadow-lg shadow-black-800/5 ring-1 ring-black-900/5 backdrop-blur dark:bg-cyan-800/90 dark:text-cyan-200 dark:ring-white/10 sm:flex">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={cn(
                                            " capitalize  hover:text-teal-500  dark:hover:text-teal-400",
                                            {
                                                "text-teal-500 dark:text-teal-400": router.asPath === link.url,
                                                "text-gray-700 dark:text-gray-100": router.asPath !== link.url,
                                            }
                                        )}
                                    >
                                        <Link href={link.url} className="px-4">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={cn(
                            "sticky top-0 border-l border-slate-200 ml-6 pl-6 dark:border-slate-800 transition-transform",
                            {
                                "translate-y-0": showNav,
                                "-translate-y-20": !showNav,
                            }
                        )}>
                            <Menu as="div" className="relative flex items-center">
                                {({ open }) => (
                                    <>
                                        <Menu.Button>
                                            <span className="sr-only">Display Mode</span>

                                            <span className="dark:hidden">
                                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="w-6 h-6">
                                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path>
                                                <path
                                                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                                    className="stroke-sky-500"></path>
                                            </svg>
                                        </span>
                                            <span className="hidden dark:inline">
                                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                              <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                                    className="fill-cyan-400/20"></path>
                                              <path
                                                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                                  className="fill-cyan-500"></path>
                                              <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                                    className="fill-cyan-500"></path>
                                          </svg>
                                        </span>
                                        </Menu.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Menu.Items className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4">
                                                {[
                                                    {
                                                        name: "Light",
                                                        value: "light",
                                                        icon: ({className, active}: {className: string, active: boolean}) => (
                                                            <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="2"
                                                                 strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                      className={classNames(
                                                                          active ? "fill-cyan-400/20 stroke-cyan-500 dark:stroke-slate-500" : "stroke-slate-400 dark:stroke-slate-500")}></path>
                                                                <path
                                                                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                                                    className={classNames(
                                                                        active ? "stroke-cyan-500 dark:stroke-slate-500" : "stroke-slate-400 dark:stroke-slate-500")}></path>
                                                            </svg>
                                                        )
                                                    },
                                                    {
                                                        name: "Dark",
                                                        value: "dark",
                                                        icon: ({className, active}: {className: string, active: boolean}) => (
                                                            <svg viewBox="0 0 24 24" fill="none" className={className}>
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                                                      className={classNames(
                                                                          active ? "fill-cyan-400/20": "fill-transparent")}></path>
                                                                <path
                                                                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                                                    className={classNames(
                                                                        active ? "fill-cyan-500 dark:fill-slate-500" : "fill-slate-400 dark:fill-slate-500")}></path>
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                                                      className={classNames(
                                                                          active ? "fill-cyan-500 dark:fill-slate-500" : "fill-slate-400 dark:fill-slate-500")}></path>
                                                            </svg>
                                                        )
                                                    },
                                                    {
                                                        name: "System",
                                                        value: "OS",
                                                        icon: ({className, active}: {className: string,  active: boolean}) => (
                                                            <svg viewBox="0 0 24 24" fill="none" className={className}>
                                                                <path
                                                                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                                                                    strokeWidth="2" strokeLinejoin="round"
                                                                    className={classNames(
                                                                        active ? "stroke-cyan-500 fill-sky-400/20 dark:stroke-slate-500" : "stroke-slate-400 dark:stroke-slate-500")}></path>
                                                                <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2"
                                                                      strokeLinecap="round" strokeLinejoin="round"
                                                                      className={classNames(
                                                                          active ? "stroke-cyan-500 dark:stroke-slate-500" : "stroke-slate-400 dark:stroke-slate-500")}></path>
                                                            </svg>
                                                        )
                                                    }
                                                ].map((item) => (
                                                    <Menu.Item
                                                        key={item.name}
                                                    >
                                                        {({ active }) => (
                                                            <button onClick={() => toggleMode(item.value)} type="button" className="py-1 px-2 flex items-center cursor-pointer">
                                                                <item.icon active={active} className="w-6 h-6 mr-2" aria-hidden="true" />
                                                                <span className={classNames(active ? "text-cyan-500" : "")}>{item.name}</span>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>

                <nav
                    className={cn(
                        "absolute top-30 ml-auto flex max-w-3xl items-center justify-between p-4 transition-transform dark:bg-black-900 lg:max-w-4xl lg:p-0 lg:py-4",
                        {
                            "translate-y-0": showNav,
                            "-translate-y-20": !showNav,
                        }
                    )}
                >
                    <ul className="sm:hidden rounded-full bg-white/90 px-2 py-2 text-sm font-medium text-black-800 shadow-lg shadow-black-800/5 ring-1 ring-black-900/5 backdrop-blur dark:bg-cyan-800/90 dark:text-cyan-200 dark:ring-white/10 flex">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={cn(
                                    " capitalize  hover:text-teal-500  dark:hover:text-teal-400",
                                    {
                                        "text-teal-500 dark:text-teal-400": router.asPath === link.url,
                                        "text-gray-700 dark:text-gray-100": router.asPath !== link.url,
                                    }
                                )}
                            >
                                <Link href={link.url} className="px-4">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Popover>
        </header>
    )
}

export default NavComponent
