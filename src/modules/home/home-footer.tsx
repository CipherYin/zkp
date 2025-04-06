import Image from "next/image"
import Link from "next/link"

export const HomeFooter = () => {
    return (
        <div className="w-full border-t border-grays px-2 pt-4 2xl:px-9 2xl:pt-9">
            <div className="flex justify-between">
                <div className="hover-float">
                    <Link href='/' className="font-medium text-sm sm:text-base 2xl:text-xl hover:text-blue-500">Help</Link>
                </div>
                <div className="flex gap-4">
                    <Link href='https://x.com/zerobasezk'>
                        <Image src='/images/space.svg' alt="Space X" width={0} height={0} className="w-[6vw] sm:w-[4vw] lg:w-[2.5vw] 2xl:w-[2vw] hover-float"/>
                    </Link>
                    <Link href='https://t.me/zerobasezk'>
                        <Image src='/images/telegram.svg' alt="telegram" width={0} height={0} className="w-[6vw] sm:w-[4vw] lg:w-[2.5vw] 2xl:w-[2vw] hover-float"/>
                    </Link>
                    <Link href='https://discord.com/invite/zerobasezk'>
                        <Image src='/images/discord.svg' alt="discord" width={0} height={0} className="w-[6vw] sm:w-[4vw] lg:w-[2.5vw] 2xl:w-[2vw] hover-float"/>
                    </Link>
                    

                </div>
            </div>
        </div>
    )

}