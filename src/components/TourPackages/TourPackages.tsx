"use client"
import DesktopScreenTourPackages from "./DesktopScreenTourPackages"
import MobileScreenTourPackages from "./MobileScreenTourPackages"

const TourPackages: React.FC = () => {
    return (
        <><div id="tourPackages" className="hidden md:flex min-h-screen rounded-xl bg-gray-100 p-3 md:p-8 flex-col items-center font-sans">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
                Discover Your Next Adventure
            </h1>
            <DesktopScreenTourPackages />
        </div><MobileScreenTourPackages /></>
    )
}

export default TourPackages