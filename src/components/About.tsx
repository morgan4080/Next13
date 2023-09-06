import {Container} from "@/components/Container"
import {Seymour_One, Sulphur_Point} from "@next/font/google"
import classNames from "@/Utils/ClassNames"
import BackgroundTexture2 from "@/components/BackgroundTexture2"
import Image from "next/image";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const About = () => {
    return(
        <div id="about" className="relative pt-10 lg:pt-5 sm:pb-0">
            <BackgroundTexture2/>
            <Container className="relative">
                <div className="px-4 py-6 sm:pb-48 sm:px-6 lg:px-0">
                    <div>
                        <h2 id="skills" className={classNames(seymour_one_400.className, "font-cursive text-4xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-5xl lg:text-6xl")}>About</h2>
                        <p className={classNames(sulphur_point_400.className, "mt-4 font-display text-xl tracking-tight dark:text-slate-300 py-6")}>
                            Back in 2016, I decided to try my hand at creating custom wordpress themes/plugins and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up and fintech company.

                            My main focus these days is building products and leading projects for our clients at Presta Capital LTD. In my free time I&apos;ve also enjoy creating solutions for individuals in various industries and other personal projects.

                            When I’m not at the computer, I’m usually rock climbing, taking walks and hanging out with family and friends.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
