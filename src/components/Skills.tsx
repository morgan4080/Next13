import {Container} from "@/components/Container";

const Skills = () => {
    return(
        <div className="min-h-screen relative pt-10 lg:pt-5 pb-20">
            <Container>
                <div className="relative px-4 py-6 sm:pb-28 sm:px-6 lg:px-0">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 id="skills" className="font-cursive text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Skills</h2>
                        <p className="mt-4 font-display text-xl tracking-tight text-gray-700">
                            I specialize in HTML/CSS, JavaScript, Typescript, React and Vue JS.
                            With a keen eye for detail, Im driven by the desire to build great products that help people engage with technology in meaningful ways.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills