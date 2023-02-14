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

const stack = [
    {
        name: 'Mobile Development',
        description: 'React Native, Typescript, Kotlin.',
        href: '#',
        extra: MobileExtra,
        icon: DevicePhoneMobileIcon,
        svg: IphoneMockup
    },
    {
        name: 'Web Development',
        description: 'Vue, React, Typescript, Tailwind.',
        href: '#',
        extra: WebExtra,
        icon: GlobeAltIcon,
        svg: LaptopMockup
    },
    {
        name: 'Data Visualization',
        description: 'D3.js, Chart.js, Victory-Native, React-Native-SVG.',
        href: '#',
        extra: VizExtra,
        icon: DocumentChartBarIcon,
        svg: DataVizMockup
    }
]

export default stack
