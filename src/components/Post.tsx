import classNames from "@/Utils/ClassNames";
import {Sulphur_Point} from "@next/font/google";

interface Props {
    company: string;
    title: string;
    excerpt: string;
    date: string;
    points: string[];
}

const sulphur_point_400 = Sulphur_Point({subsets: ['latin'], weight: "400"})

export default function Post({ company, title, excerpt, date, points }: Props) {
    return (
        <article className={classNames(sulphur_point_400.className,"w-fit rounded-md py-6 transition-colors lg:grid lg:grid-cols-[200px_1fr]")}>
            <div className="mb-4 border border-transparent border-l-gray-300 pl-2 dark:border-l-gray-800  lg:mb-0 lg:mt-6 lg:pl-4">
                <time className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">
                    {date}
                </time>
            </div>

            <div>
                <div className="rounded-xl transition-colors duration-300 lg:p-6 lg:hover:bg-black-200/70 lg:dark:hover:bg-black-800/40">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wider">
                        <span className="text-sky-500 dark:text-cyan-300">{company}</span> — {title}
                    </h2>
                    <p className="my-2 text-gray-600 dark:text-gray-400 pt-6">{excerpt}</p>

                    <ul className="my-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                        {points.map((point, i) => <li className="p-2" key={i}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </article>
    );
}