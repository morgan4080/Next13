import { Container } from '@/components/Container'
import {Astronaut} from "@/components/Astronaut"

const Hero = () => {
    return (
        <div className="relative pt-10 lg:pt-5 pb-20">
            <Container className="relative">
                <div className="relative sm:rounded-2xl sm:overflow-hidden sm:grid grid-cols-12">
                    <div className="sm:col-span-7">
                        <div className="relative px-4 py-16 sm:py-10 sm:px-6 lg:px-0">
                            <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block font-cursive">Hello,</span>
                                <span className="block text-sky-500 font-cursive">I’m Morgan.</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-left text-xl text-gray-700 sm:max-w-3xl">
                                User Interface developer.
                            </p>
                            <p className="mt-6 max-w-md text-left font-display text-xl tracking-tight text-gray-700 sm:max-w-2xl">
                                I currently work as a front-end engineer.
                                I have a zeal and passion for user interface development and programming in Typescript and Kotlin.
                                My skills and passion for creating web and mobile application interfaces help in creating awesome experiences.
                                I have experience in Typescript, React, React Native, VueJS and Jetpack Compose.
                                I also strive to keep up with the latest advancements in multi-platform technologies to save time to market by handling web, android and iOS from a single code base.
                                Most importantly, Im a people person. That means, Im able to inspire and get inspired.
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-5 pt-0 lg:pt-20 overflow-hidden">
                        <Astronaut className="w-full h-full" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Hero