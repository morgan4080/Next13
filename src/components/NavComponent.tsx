import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    DocumentChartBarIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline'
import Link from "next/link"
import Morgan from "@/components/Morgan"
import {Sulphur_Point} from "@next/font/google"
import classNames from "@/Utils/ClassNames";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const stack = [
    {
        name: 'Mobile Development',
        description: 'Get a better understanding of where your leads are coming from.',
        href: '#',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Web Development',
        description: 'Get a better understanding of where your leads are coming from.',
        href: '#',
        icon: GlobeAltIcon,
    },
    {
        name: 'Desktop Development',
        description: 'Get a better understanding of where your leads are coming from.',
        href: '#',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Data Visualization',
        description: 'Get a better understanding of where your leads are coming from.',
        href: '#',
        icon: DocumentChartBarIcon,
    }
]
const NavComponent = () => {
    return (
        <header>
            <Popover className={classNames(sulphur_point_400.className,"relative")}>
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <Link href="/" className="mr-auto flex items-end" >
                            <span className="sr-only">Morgan Mutugi</span>
                            <div className="flex items-center justify-center text-3xl font-black font-serif text-gray-700 dark:text-white">
                                /<span className="text-sky-500">/</span>
                            </div>
                            <Morgan className="h-6 w-auto pt-1 pl-4" />
                        </Link>
                    </div>


                    <div className="flex items-center">
                        <label className="sr-only">Theme</label>
                        <button type="button" aria-haspopup="true" aria-expanded="false" aria-labelledby="button-theme">
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
                                className="fill-sky-400/20"></path>
                          <path
                              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                              className="fill-sky-500"></path>
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                className="fill-sky-500"></path>
                      </svg>
                    </span>
                        </button>
                        <a href="https://github.com/morgan4080"
                           className="ml-6 block text-slate-400 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-300">
                            <span className="sr-only">Morgan Mutugi on GitHub</span>
                            <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute bg-white dark:bg-slate-300 z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <Link href="/" className="mr-auto flex items-end" >
                                        <span className="sr-only">Morgan Mutugi</span>
                                        <div className="flex items-center justify-center text-3xl font-black font-serif text-gray-700 dark:text-white">
                                            /<span className="text-sky-500">/</span>
                                        </div>
                                        <Morgan className="h-6 w-auto pt-1 pl-4" />
                                    </Link>
                                    <div className="-mr-2">
                                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid grid-cols-1 gap-7">
                                        {stack.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                            >
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-sky-400 to-cyan-500 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default NavComponent
