import Post from "@/components/Post";
import React from "react";
import classNames from "@/Utils/ClassNames";
import {Seymour_One, Sulphur_Point} from "@next/font/google";
import BackgroundTexture2 from "@/components/BackgroundTexture2";
import {Container} from "@/components/Container";
import {Props} from "@/components/Hero";
import {gsap} from "gsap";
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
export default function Experience({cursorDotRef, cursorRef}: Props) {
    const featuredPosts = [
        {
            company: 'Presta Capital',
            title: 'Lead Engineer, Front-End and Mobile',
            excerpt: 'I have had the privilege of serving as a Lead Frontend and Mobile Engineer, responsible \n' +
                'for leading the front end and mobile development teams. I use my skills spanning React \n' +
                'Native, Kotlin, Swift and a fervor for cross-platform mobile development using React \n' +
                'Native and Kotlin Multiplatform to guide the teams on mobile development \n' +
                'architectures. My journey has led me to harbor a strong enthusiasm for mobile \n' +
                'development, Api design and error handling. Proficiency in various facets, such as project \n' +
                'conceptualization, maintenance, migration, meticulous documentation, testing \n' +
                'coverage, API development, and deployment methodologies, further defines my \n' +
                'professional persona.',
            date: 'July 2021  – August 2023',
            points: [
                "Steering the helm of frontend and mobile development initiatives, I lead a \n" +
                "proficient team in harnessing the power of technologies like React Native, Kotlin, \n" +
                "Swift and Jetpack Compose. My role encompasses overseeing the end-to-end \n" +
                "creation, implementation, and maintenance of solutions tailored for micro-\n" +
                "finance companies and cooperative societies.",
                "Operating as a compass for technical architecture, I laid the foundation for \n" +
                "resilient and scalable software structures. I prioritize factors such as \n" +
                "performance, security and maintainability to ensure our creations stand the test \n" +
                "of time.",
                "Collaborate with cross-functional teams to optimize mobile development \n" +
                "experiences using caching and local databases like room persistence library or \n" +
                "SQL delight as the single source of truth. This helps with offline experiences and \n" +
                "pagination.",
                "Training junior developers and maintaining a consistent flow of talent for the mobile and \n" +
                "front-end teams while ensuring a standardization for all client-side products \n" +
                "for the company. I play a pivotal role in fostering an environment of effective teamwork. Through \n" +
                "open communication, thorough code reviews, and knowledge exchange, I \n" +
                "contribute to the holistic development process."
            ],
        },
        {
            company: 'Kijani Collective',
            title: 'Web Developer',
            excerpt: 'We developed responsive and visually appealing websites for a wide \n' +
                'range of clients. I worked closely with the design team to develop, integrate and \n' +
                'customize content management systems like WordPress and payment gateways to \n' +
                'ensure that the websites were efficient and functional.',
            date: 'September 2019  – May 2021 ',
            points: [
                "E-commerce with woocommerce.",
                "Payments Integrations with pesapal, iPay, kopokopo, Ting(cellulant)",
                "S.E.O, keyword research, PPC, email marketing and analytics",
                "Integrate Ad social media tracking pixels."
            ],
        },
        {
            company: 'Bean Interactive',
            title: 'IT Intern',
            excerpt: 'We did brand activations for various brands. This role required a\n' +
                'strong understanding of each brands values and messaging, as well as a\n' +
                'creative approach to capturing the attention of the target audience\n' +
                'through various digital channels, such as social media, email marketing,\n' +
                'and website content.',
            date: 'March 2014',
            points: [
                "Customer.",
                "Context",
                "Content",
                "Community",
                "Conversion",
            ],
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
        <div id="experience" className="relative pt-10 lg:pt-5">
            <BackgroundTexture2/>
            <Container className="relative">
                <div className="px-4 py-6 sm:pb-16 sm:px-6 lg:px-0">
                    <div>
                        <h2 onMouseEnter={hovered} onMouseLeave={hoveredOut} className={classNames(seymour_one_400.className, "font-cursive text-xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-2xl lg:text-5xl")}>Experience</h2>
                        <p onMouseEnter={hovered} onMouseLeave={hoveredOut} className={classNames(sulphur_point_400.className, "font-display text-xl tracking-tight dark:text-slate-300 pt-2 lg:pt-4")}>
                            Places i&apos;ve applied my craft.
                        </p>
                    </div>

                    <div className="my-4 lg:my-0">
                        {featuredPosts.map(({ company, title, excerpt, date, points }) => {
                            return (
                                <Post
                                    key={date.toString()}
                                    company={company}
                                    title={title}
                                    excerpt={excerpt}
                                    date={date.toString()}
                                    points={points}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}