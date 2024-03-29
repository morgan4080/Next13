import {
    DevicePhoneMobileIcon,
    DocumentChartBarIcon,
    GlobeAltIcon
} from "@heroicons/react/24/outline";
import IphoneMockup from "@/components/IphoneMockup";
import LaptopMockup from "@/components/LaptopMockup";
import DataVizMockup from "@/components/DataVizMockup";
import MobileExtra from "@/components/MobileExtra";
import WebExtra from "@/components/WebExtra";
import VizExtra from "@/components/VizExtra";
import TopLanguages from "@/components/TopLanguages";

const stack = [
    {
        name: 'Top Languages',
        description: 'JavaScript, Typescript, Kotlin, PHP.',
        href: '#',
        icon: DevicePhoneMobileIcon,
        svg: TopLanguages
    },
    {
        name: 'Mobile Development',
        description: 'React Native, KMP, Flutter, Swift, Kotlin.',
        href: '#',
        icon: DevicePhoneMobileIcon,
        svg: IphoneMockup
    },
    {
        name: 'Web Development',
        description: 'Vue, React, Typescript, Tailwind.',
        href: '#',
        icon: GlobeAltIcon,
        svg: LaptopMockup
    },
    {
        name: 'Data Visualization',
        description: 'D3.js, Chart.js, Victory-Native, React-Native-SVG.',
        href: '#',
        icon: DocumentChartBarIcon,
        svg: DataVizMockup
    }
]

export default stack
