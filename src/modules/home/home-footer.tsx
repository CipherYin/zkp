import Image from "next/image"
import Link from "next/link"

export const HomeFooter = () => {
    return (
        <div className="w-full border-t border-grays px-9 pt-9">
            <div className="flex justify-between">
                <div className="hover-float">
                    <Link href='/' className="font-medium text-lg hover:text-blue-500">Help</Link>
                </div>
                <div className="flex gap-4">
                    <Link href='https://x.com/zerobasezk'>
                        <Image src='/images/space.svg' alt="Space X" width={36} height={36} className="hover-float"/>
                    </Link>
                    <Link href='https://t.me/zerobasezk'>
                        <Image src='/images/telegram.svg' alt="telegram" width={36} height={36} className="hover-float"/>
                    </Link>
                    <Link href='https://discord.com/invite/zerobasezk'>
                        <Image src='/images/discord.svg' alt="discord" width={36} height={36} className="hover-float"/>
                    </Link>
                    

                </div>
            </div>
        </div>
    )

}