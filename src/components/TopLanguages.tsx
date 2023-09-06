import React from 'react';
import Image from "next/image";

const TopLanguages = () => {
    return (
        <div className="flex items-center justify-center">
            <a href="https://github.com/morgan4080">
                <Image
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=morgan4080&langs_count=10&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&locale=en&custom_title=Top%20%Languages"
                    alt="Top Languages"
                    width={350}
                    height={250}
                />
            </a>
        </div>
    );
};

export default TopLanguages;