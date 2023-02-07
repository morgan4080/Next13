import { Container } from '@/components/Container'
import {Astronaut} from "@/components/Astronaut"

const Hero = () => {
    return (
        <div className="relative min-h-screen pt-10 lg:pt-32 pb-20">
            <Container className="relative">
                <div className="relative sm:rounded-2xl sm:overflow-hidden sm:flex sm:flex-row-reverse">
                    <div className="sm:flex-1 pt-0 lg:pt-20 lg:pl-10">
                        <Astronaut/>
                    </div>
                    <div className="sm:flex-1">
                        <div className="relative px-4 py-6 sm:py-28 sm:px-6 lg:px-0 lg:mb-32">
                            <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-8xl">
                                <div className="block font-cursive">Hello,</div>
                                <div className="block text-sky-500 font-cursive">I’m Morgan.</div>
                            </h1>
                            <p className="mt-6 max-w-lg text-left text-xl text-gray-700 sm:max-w-3xl">
                                User Interface developer.
                            </p>
                            <p className="mt-6 max-w-md text-left font-display text-xl tracking-tight text-gray-700 sm:pr-8 sm:max-w-2xl">
                                Im a front-end developer based in Nairobi who loves creating beautiful and intuitive user experiences.
                                Most importantly, Im a people person. That means, Im able to inspire and get inspired.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Hero