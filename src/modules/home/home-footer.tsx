import Image from "next/image"
import Link from "next/link"

export const HomeFooter = () => {
    return (
        <div className="w-full border-t border-grays px-9 pt-9">
            <div className="flex justify-between">
                <div>
                    <Link href='/' className="font-medium text-lg hover:text-blue-500">Help</Link>
                </div>
                <div className="flex gap-4">
                    <Image src='/images/space.svg' alt="Space X" width={36} height={36} className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110"/>
                    <Image src='/images/telegram.svg' alt="Space X" width={36} height={36} className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110"/>
                    <Image src='/images/discord.svg' alt="Space X" width={36} height={36} className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110"/>

                </div>
            </div>
        </div>
    )

}