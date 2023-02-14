import clsx from 'clsx'
import BackgroundTexture2 from "@/components/BackgroundTexture2"
import BackgroundTexture3 from "@/components/BackgroundTexture3"

export function Container({ className, ...props }:  { className: string; } & any ) {
    return (
        <div
                className={clsx('mx-auto z-20 max-w-7xl px-4 sm:px-6 lg:px-8', className)}
                {...props}
        />
    )
}
