import { ITourPackage } from "@/types"
import Image from "next/image";
import { Card } from "../ui/card";

interface ICardColumn {
    tourPackage: ITourPackage;
}

const CardColumn: React.FC<ICardColumn> = ({ tourPackage }: ICardColumn) => {
    const { imageSrc, title, eventDuration, description } = tourPackage
    return (
        <>
            <Card className="hidden md:flex p-3 h-full">
                <div className="min-w-[200px] md:min-w-[200px] max-w-[280px] md:max-w-[280px] flex-shrink-0">
                    <div className="relative w-full h-64">
                        <Image
                            src={imageSrc}
                            alt=""
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>

                    <h1 className="font-bold mt-4">{title}</h1>
                    <p className="text-slate-500">Duration: {eventDuration}</p>
                    <p className="text-justify">{description}</p>
                </div>
            </Card>
            <div className="md:hidden">
                <div className="relative w-full h-64 p-3">
                    <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                <h1 className="font-bold mt-4">{title}</h1>
                <p className="text-slate-500">Duration: {eventDuration}</p>
                <p className="text-justify">{description}</p>
            </div>

        </>
    );
}

export default CardColumn