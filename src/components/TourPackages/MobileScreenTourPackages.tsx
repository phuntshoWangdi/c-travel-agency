import { tourPackagesTypes } from "@/data/tourPackages"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { useState } from "react"
import CardColumn from "../CardGrid/CardColumn"
import { useFullScreenDialog } from "../ItinerayDialog/dialog-context"

const MobileScreenTourPackages: React.FC = () => {
    const [selectedTourPackageType, setSelectedTourPackageType] = useState(tourPackagesTypes[0])
    const [selectedTour, setSelectedTour] = useState(selectedTourPackageType.tourPackages[0])
    const { openDialog } = useFullScreenDialog();

    const onTourPackageTypeChange = (value: string) => {
        if (value) {
            const item = tourPackagesTypes.find(item => item.title === value);
            if (item) {
                setSelectedTourPackageType(item)
                setSelectedTour(item.tourPackages[0])
            }
        }
    }

    const onTourChange = (value: string) => {
        if (value) {
            const tour = selectedTourPackageType.tourPackages.find(item => item.title == value);
            if (tour) {
                setSelectedTour(tour)
            }
        }
    }

    return (
        <div className="w-full md:hidden">
            <div className="overflow-x-auto no-scrollbar">
                <div className="inline-flex gap-2 px-2 py-1">
                    <ToggleGroup
                        variant="outline"
                        type="single"
                        className="flex gap-2"
                        defaultValue={tourPackagesTypes[0].title}
                        onValueChange={onTourPackageTypeChange}
                    >
                        {tourPackagesTypes.map((item, i) => (
                            <ToggleGroupItem
                                key={i}
                                value={item.title}
                                className="px-4 py-2 whitespace-nowrap rounded-md transition-colors duration-200 data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:shadow-md hover:bg-blue-100 hover:text-blue-700"
                            >
                                {item.title}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>
            </div>
            <div className="overflow-x-auto no-scrollbar">
                <div className="inline-flex gap-2 px-2 py-1">
                    <ToggleGroup
                        variant="outline"
                        type="single"
                        className="flex gap-2"
                        value={selectedTour.title}
                        onValueChange={onTourChange}
                    >
                        {selectedTourPackageType.tourPackages.map((item, i) => (
                            <ToggleGroupItem
                                key={i}
                                value={item.title}
                                className="px-4 py-2 whitespace-nowrap rounded-md transition-colors duration-200 data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:shadow-md hover:bg-blue-100 hover:text-blue-700"
                            >
                                {item.title}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>
            </div>

            <div className="mt-4" >
                <CardColumn tourPackage={selectedTour} />
                <button
                    className="text-blue-500 underline"
                    onClick={() => openDialog({ fileName: selectedTour.itinearyTextFile })}>
                    Read more
                </button>
            </div>
        </div>

    )
}

export default MobileScreenTourPackages