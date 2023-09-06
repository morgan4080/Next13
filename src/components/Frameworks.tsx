import React from 'react';
import Image from "next/image";

const Frameworks = () => {
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-x-auto py-4 sm:gap-8">
                <div className="relative aspect-[9/10] flex-none w-44 overflow-hidden rounded-xl bg-cyan-800 sm:w-72 sm:rounded-2xl rotate-2">
                    <Image
                        alt="ReactJs"
                        className="absolute inset-0 h-full w-full"
                        sizes="(min-width: 640px) 18rem, 11rem"
                        src="/_nuxt/reactjs-logo.df104621.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Frameworks;