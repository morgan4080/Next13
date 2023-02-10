import {
    DevicePhoneMobileIcon,
    DocumentChartBarIcon,
    GlobeAltIcon
} from "@heroicons/react/24/outline";
import IphoneMockup from "@/components/IphoneMockup";
import LaptopMockup from "@/components/LaptopMockup";

const stack = [
    {
        name: 'Mobile Development',
        description: 'React Native, Typescript, Redux, Kotlin, Jetpack Compose, Room.',
        href: '#',
        icon: DevicePhoneMobileIcon,
        svg: IphoneMockup
    },
    {
        name: 'Web Development',
        description: 'React, Next, Vue, Nuxt, Typescript, Redux, Pinia, Tailwind.',
        href: '#',
        icon: GlobeAltIcon,
        svg: LaptopMockup
    },
    {
        name: 'Data Visualization',
        description: 'D3.js, Chart.js, Victory-Native, React-Native-SVG.',
        href: '#',
        icon: DocumentChartBarIcon,
        svg: IphoneMockup
    }
]

export default stack