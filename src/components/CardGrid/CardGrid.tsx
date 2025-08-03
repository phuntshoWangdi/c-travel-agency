import { ITourPackage } from "@/types"
import CardColumn from "./CardColumn"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { useFullScreenDialog } from "../ItinerayDialog/dialog-context";

interface Props {
    title: string;
    description: string;
    tourPackages: ITourPackage[]
}
const CardGrid: React.FC<Props> = ({ title, description, tourPackages }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { openDialog } = useFullScreenDialog();


    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -320 : 320, // adjust for card width
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            id="home">
            <h2 className="text-center font-bold mb-4">{title}</h2>
            <p className="mb-5 text-center md:text-justify">{description}</p>
            <div className="flex items-center gap-2 md:gap-4 overflow-x-hidden">
                {/* Left arrow */}
                <button
                    className="bg-white/70 hover:bg-white rounded-full shadow"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft />
                </button>

                {/* Scrollable carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar flex-1"
                >
                    {tourPackages.map((item, i) => (
                        <div onClick={() => openDialog({ fileName: item.itinearyTextFile })} key={i} className="min-w-[300px] flex-shrink-0 cursor-pointer">
                            <CardColumn tourPackage={item} />
                        </div>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    className="bg-white/70 hover:bg-white rounded-full  shadow"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}

export default CardGrid