import Image from "next/image"
export default function Mission () {
    return (
        <div className="h-auto relative" id="Mission">
            <div className="w-full flex  flex-col place-items-center z-40">
            <h1 className="text-white pb-8 text-6xl">Mission</h1>
            <h1 className="text-white leading-loose w-1/2 text-4xl text-center font-bold z-40">Food deserts can be a silent killer in the community. When people do not have  access to fresh produce, poultry or even healthier alternatives for snacks, it can be the precursor to a litany of health ailments in the future.
            This tool has been created to start the conversation and visualize how you can make an impact for your community.</h1>
            </div>
            <div className="absolute bottom-2 right-72 z-0">
            <Image
                src="earth.svg"
                height={400}
                width={400}
                priority
                alt="globe"
            />
            </div>
        </div>
    )
}