import BlogPost from "@/components/Post";
import React from "react";
import classNames from "@/Utils/ClassNames";
import {Seymour_One, Sulphur_Point} from "@next/font/google";
import BackgroundTexture2 from "@/components/BackgroundTexture2";
import {Container} from "@/components/Container";
import {Props} from "@/components/Hero";
const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})
const seymour_one_400 = Seymour_One({subsets: ['latin'], weight: "400"})
export default function Experience({cursorDotRef, cursorRef}: Props) {
    const featuredPosts = [
        {
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
            projects: [
                {
                    name: "Mobi-flex APP (2023)",
                    description: "A multi-tenant mobile application for android and iOS created with Kotlin multiplatform. \n" +
                        "The application is a client application for the Presta loan management system, that \n" +
                        "offers bookkeeping, savings and dividend management, workflow and rules \n" +
                        "management, customer management and onboarding, loan appraisal and management. \n" +
                        "This application has allowed Presta to grow its customer base and provide more value to \n" +
                        "existing lenders on the company's portfolio."
                },
                {
                    name: "CODO APP (2023)",
                    description: "A mobile app for android and iOS created with Kotlin multiplatform for MKM consulting \n" +
                        "limited an accredited digital credit provider. This application is also integrated with \n" +
                        "payment gateways like m-pesa and local bank paybill numbers to move loans and savings \n" +
                        "from bank to m-pesa wallets, pay for commodities and make recurrent payments for \n" +
                        "essential services."
                },
                {
                    name: "PCEA RUIRU SACCO (2023)",
                    description: "A mobile app for android and iOS created with Kotlin multiplatform for Ruiru sacco society \n" +
                        "limited an accredited digital credit provider. This application is also integrated with \n" +
                        "payment gateways like m-pesa and local bank paybill numbers to move loans and savings \n" +
                        "from bank to m-pesa wallets, pay for commodities and make recurrent payments for \n" +
                        "essential services."
                },
                {
                    name: "Presta Sign APP (2022)",
                    description: "A mobile application for android and iOS created in react native which allows users to \n" +
                        "sign digital guarantor-ship and loan application forms. A client application for the Presta \n" +
                        "guarantor-ship system, which allows microfinance organizations to process loan forms \n" +
                        "quicker and comply with the Sacco society regulatory authority. Through this app Presta \n" +
                        "was able to partner with other software providers in the lending space to integrate the \n" +
                        "system and SDK."
                },
                {
                    name: "One-Pay Credit KYC PWA (2022)",
                    description: "A progressive web application made for one pay credit limited that allows sales agents \n" +
                        "to onboard customers as leads on the company's CRM. The PWA uses a NodeJS API. "
                }
            ]
        }
    ]
    return (
        <div id="experience" className="relative pt-10 lg:pt-5 sm:pb-20">
            <BackgroundTexture2/>
            <Container className="relative">
                <div className="flex items-center justify-between">
                    <h2 id="skills" className={classNames(seymour_one_400.className, "font-cursive text-4xl text-sky-500 dark:text-cyan-300 font-bold tracking-tight sm:text-2xl lg:text-5xl")}>
                        Experience
                    </h2>
                </div>

                <div className="my-4 lg:my-0">
                    {featuredPosts.map(({ title, excerpt, date, points, projects }) => {
                        return (
                            <BlogPost
                                key={date.toString()}
                                title={title}
                                excerpt={excerpt}
                                date={date.toString()}
                                points={points}
                                projects={projects}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}