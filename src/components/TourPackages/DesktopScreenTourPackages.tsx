import { tourPackagesTypes } from "@/data/tourPackages";
import { motion } from "framer-motion";
import CardGrid from "../CardGrid/CardGrid";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const DesktopScreenTourPackages: React.FC = () => {
    const [selectedTourPackage, setSelectedTourPackage] = useState(tourPackagesTypes[0])


    const onTourPackageChange = (value: string) => {
        if (value) {
            const item = tourPackagesTypes.find(item => item.title === value);
            if (item) setSelectedTourPackage(item)
        }
    }

    return <div className="hidden md:flex w-full max-w-6xl bg-white p-6 rounded-xl shadow-lg flex:col md:flex-row gap-6 md:gap-8">
        <div className="flex-shrink-0 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tour Packages</h2>
            <ToggleGroup
                type="single"
                variant="outline"
                className="md:flex-col space-y-2" // space-y-2 for vertical spacing
                defaultValue={tourPackagesTypes[0].title}
                onValueChange={onTourPackageChange}
            >
                {tourPackagesTypes.map((item, i) => (
                    <ToggleGroupItem
                        key={i}
                        value={item.title}
                        className="flex justify-start w-full px-4 py-2 rounded-md transition-colors duration-200 data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:shadow-md hover:bg-blue-100 hover:text-blue-700"
                    >
                        {item.title}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>

        {/* Main Content Area for CardGrid */}
        <motion.div
            key={selectedTourPackage.title} // ensures re-render when package changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
        >
            <CardGrid
                tourPackages={selectedTourPackage.tourPackages}
                title={selectedTourPackage.title}
                description={selectedTourPackage.description}
            />
        </motion.div>
    </div>;
}

export default DesktopScreenTourPackages
