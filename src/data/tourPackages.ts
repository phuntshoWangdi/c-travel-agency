import { ITourPackage, ITourPackageType as ITourPackageType } from "@/types";
import BestOfBhutan from "@/markdowns/cultural tour/BestofBhutan.mdx"
import CentralBhutanAdventure from "@/markdowns/cultural tour/CentralBhutanAdventure.mdx"
import EastToWestBhutan from "@/markdowns/cultural tour/EastToWestBhutan.mdx"
import GlimpseOfBhutan from "@/markdowns/cultural tour/GlimpseOfBhutan.mdx"
import ShortEscapeToBhutan from "@/markdowns/cultural tour/ShortEscapeToBhutan.mdx"
import HeritageRide from "@/markdowns/biking/HeritageRide.mdx"
import MotoQuest from "@/markdowns/biking/MotoQuest.mdx"
import MotoWonderer from "@/markdowns/biking/MotoWonderer.mdx"
import NomadicRider from "@/markdowns/biking/NomadicRider.mdx"
import BlackNeckedCraneFestival from "@/markdowns/festival/BlackNeckedCraneFestival.mdx"
import DrukWangyelFestivalTour from "@/markdowns/festival/DrukWangyelFestivalTour.mdx"
import JambayLhakhangFestivalTour from "@/markdowns/festival/JambayLhakhangFestivalTour.mdx"
import ParoFestivalTour from "@/markdowns/festival/ParoFestivalTour.mdx"
import PunakhaFestivalTour from "@/markdowns/festival/PunakhaFestivalTour.mdx"
import ThimphuFestivalTour from "@/markdowns/festival/ThimphuFestivalTour.mdx"
import BumdraTrek from "@/markdowns/trekking/BumdraTrek.mdx"
import DagalaTrek from "@/markdowns/trekking/DagalaTrek.mdx"
import DrukPathTrek from "@/markdowns/trekking/DrukPathTrek.mdx"
import JomolhariTrek from "@/markdowns/trekking/JomolhariTrek.mdx"
import LayaGasaTrek from "@/markdowns/trekking/LayaGasaTrek.mdx"


export const culturalTours: ITourPackage[] = [
    {
        imageSrc: "/pictures/Buli1.jpg",
        title: "Short Escape to Bhutan",
        eventDuration: "5 Days/4 Nights",
        description: "This tour package is perfect for those with limited time, offering a mix of Bhutan’s stunning landscapes, rich culture, and tranquility. It includes visits to iconic sites like Paro Taktsang, Thimphu's landmarks, short hikes, authentic cuisine, and the serene beauty of the Himalayas for an unforgettable experience.",
        itinearyTextFile: "ShortEscapeToBhutan"
    },
    {
        imageSrc: "/pictures/Ura1.jpg",
        title: "Glimpse of Bhutan",
        eventDuration: "7 Days/6 Nights",
        description: "This tour package offers a perfect glimpse into Bhutan, a short yet immersive journey designed for travelers seeking a quick but fulfilling escape. It showcases Bhutan’s stunning landscapes, rich heritage, and peaceful environment, making it an ideal getaway for those with limited time.",
        itinearyTextFile: "GlimpseOfBhutan"
    },
    {
        imageSrc: "/pictures/Thinley Gang view.jpg",
        title: "Best Of Bhutan",
        eventDuration: "9 Days/8 Nights",
        description: "The Best of Bhutan Tour offers a comprehensive journey through the country’s iconic landmarks, rich culture, and stunning landscapes. Ideal for travelers seeking Bhutan’s finest experiences, from mystical monasteries to breathtaking natural beauty and warm hospitality.",
        itinearyTextFile: "BestOfBhutan"
    },
    {
        imageSrc: "/pictures/Texticle Museum.jpg",
        title: "Central Bhutan Adventure",
        eventDuration: "11 Days/ 10 Nights",
        description: "Embarking on a Central Bhutan tour promises a deep dive into the kingdom's rich traditions, stunning architecture, and serene landscapes, making it an unforgettable journey. These tour covers key destinations such as Paro, Thimphu, Punakha, Wangdue (Phobjikha), Trongsa, and Bumthang.",
        itinearyTextFile: "CentrailBhutanAdventure"
    },
    {
        imageSrc: "/pictures/Takin3(2).jpg",
        title: "East To West Bhutan ",
        eventDuration: "15 Days/ 14 Nights",
        description: "An East-to-West Bhutan tour offers an extensive exploration of the kingdom's diverse landscapes, rich cultural heritage, and spiritual landmarks. This itinerary offers a comprehensive journey through Bhutan's varied regions, each with its unique charm and significance.",
        itinearyTextFile: "EastToWestBhutan"
    }
];

export const bhutanFestivalTours: ITourPackage[]=[
    {
        imageSrc: "/pictures/black necked crane 2.jpg",
        title: "Blacked Necked Crane",
        eventDuration: "9 Days/ 8 Nights",
        description: "The Black-necked Crane Festival is a vibrant celebration of culture and conservation, held annually on 11th of November at Gangtey Monastery in the picturesque Phobjikha Valley. This special event honors the arrival of the endangered Black-necked Cranes and coincides with the birthday of His Majesty the Fourth King of Bhutan. Organized by the Royal Society for Protection of Nature (RSPN) in collaboration with local communities.",
        itinearyTextFile: "BlackNeckedCraneFestival"
    },
    {
        imageSrc: "/pictures/Dochula festival 4.jpg",
        title: "Druk Wangyel Festival",
        eventDuration: "8 Days/ 7 Nights",
        description: "The Druk Wangyel Festival is a powerful blend of history, spirituality, and national pride, celebrated every year in the majestic setting of Dochula Pass on 13th of December. Unlike other traditional tsechus, this festival is a modern creation with a deep patriotic essence, commemorating Bhutan's military victory and honoring the peace and stability brought by the country’s leadership.",
        itinearyTextFile: "DrukWangyelFestivalTour"
    },
    {
        imageSrc: "/pictures/Jambay Lhakhang Drub.jpg",
        title: "Jambay Lhakhang Festival",
        eventDuration: "9 Days/ 8 Nights",
        description: "The Jambay Lhakhang Festival (or Jambay Lhakhang Drup) is one of Bhutan’s most spiritually profound and visually stunning festivals. Held annually in October or November (according to the lunar calendar), Mewang (Fire Ceremony), this sacred fire ritual involves people running under a flaming archway and Tercham (The Naked Dance) Performed by masked male dancers wearing only masks, in the secrecy of night.",
        itinearyTextFile: "JambayLhakhangFestivalTour"
    },
    {
        imageSrc: "/pictures/Paro Festival 3.jpg",
        title: "Paro Festival Tour",
        eventDuration: "7 Days/ 6 Nights",
        description: "Paro Tshechu offers a unique opportunity to witness sacred rituals, and festive atmosphere alongside locals. The festival typically falls during spring months, that’s March or April, following the 10th day of the second month of the Bhutanese calendar. On the final morning (usually before sunrise on the last day), a giant 30x45-meter Thongdrel, a sacred embroidered scroll of Guru Rinpoche is unfurled.",
        itinearyTextFile: "ParoFestivalTour"
    },
    {
        imageSrc: "/pictures/Punakha Dzong.jpg",
        title: "Punakha Festival Tour",
        eventDuration: "9 Days/ 8 Nights",
        description: "Punakha, the former capital of Bhutan, hosts two significant annual festivals: Punakha Drubchen and Punakha Tshechu. Both the Drubchen and Tshechu festivals are celebrated at the majestic Punakha Dzong, also known as the Palace of Great Happiness. The festivals offers visitors a profound insight into Bhutanese culture, history, and spirituality.",
        itinearyTextFile: "PunakhaFestivalTour"
    },
    {
        imageSrc: "/pictures/Thimphu Tshechu3 (1).jpg",
        title: "Thimphu Festival Tour",
        eventDuration: "9 Days/ 8 Nights",
        description: "Thimphu, the capital of Bhutan, hosts two of the country’s most vibrant annual festivals, Thimphu Drubchen and Thimphu Tshechu. Held in the majestic courtyard of Tashichho Dzong, these festivals offer a captivating glimpse into Bhutan's rich cultural heritage through sacred mask dances, traditional folk performances, and powerful religious rituals, attracting thousands of locals and international visitors alike.",
        itinearyTextFile: "ThimphuFestivalTour"
    }
]

export const trekkingTours: ITourPackage[]=[
    {
        imageSrc: "/pictures/Hiking tail 1.jpg",
        title: "Bumdra Trek",
        eventDuration: "10 Days/ 9 Nights",
        description: "The Bumdra Trek, is a short yet breathtaking adventure in Bhutan that combines natural beauty, spiritual depth, and a touch of wilderness. It's one of the few treks that offers a unique overnight camping experience above the iconic Tiger’s Nest Monastery (Paro Taktsang), making it a favorite for both locals and travelers.",
        itinearyTextFile: "BumdraTrek"
    },
    {
        imageSrc: "/pictures/Hiking trail 2.jpg",
        title: "Dagala (Thousand Lake) Trek",
        eventDuration: "9 Days/ 8 Nights",
        description: "The Dagala (Thousand Lakes) Trek is a moderate to challenging high-altitude trek in Bhutan that takes you through a spectacular landscape of alpine meadows, pristine glacial lakes, and panoramic Himalayan views. The Dagala region remains untouched by mass tourism, offering an authentic trekking experience in the highlands.",
        itinearyTextFile: "DagalaTrek"
    },
    {
        imageSrc: "/pictures/hiking Trail.jpg",
        title: "Druk Path Trek",
        eventDuration: "9 Days/ 8 Nights",
        description: "The Trek is a renowned five-days journey through Bhutan's pristine landscapes, connecting the valleys of Paro and Thimphu. The trek typically starts from Paro and ends in Thimphu. Along the way, the trail winds through dense forests, alpine meadows, and high mountain passes, providing an immersive experience in Bhutan's untouched wilderness.",
        itinearyTextFile: "DrukPathTrek"
    },
    {
        imageSrc: "/pictures/jomolhari2.jpg",
        title: "Jomolhari Trek",
        eventDuration: "14 Days/ 13 Nights",
        description: "The Jomolhari Trek is one of Bhutan’s most iconic and scenic routes, offering a journey through remote villages, pristine forests, and stunning landscapes at the base of the sacred Mount Jomolhari. For trekkers seeking a transformative adventure, it’s a must-do. With its combination of breathtaking views, cultural immersion, and high-altitude thrills, it stands out as one of the top trekking experiences in the Himalayas.",
        itinearyTextFile: "JomolhariTrek"
    },
    {
        imageSrc: "/pictures/Laya2.jpg",
        title: "Laya Gasa Trek",
        eventDuration: "17 Days/ 16 Nights",
        description: "The Laya Gasa Trek offering trekkers an incredible journey through high-altitude landscapes, traditional Bhutanese villages, and some of the most stunning natural scenery in the Himalayas. It combines rugged trekking with a deep immersion into Bhutanese culture and offers the chance to experience the lifestyle of the Layaps, a semi-nomadic people known for their distinct customs, attire, and hospitality.",
        itinearyTextFile: "LayaGasaTrek"
    }
]

export const bikingTours: ITourPackage[] = [
    {
        imageSrc: "/pictures/Bike and barshong 2.jpg",
        title: "Moto Wonderer",
        eventDuration: "8 Days/ 7 Nights ",
        description: "Embark on an unforgettable journey with the Moto Wonderer Biking Tour Package, designed for riders who seek adventure, scenic landscapes, and the thrill of the open road. Whether you're navigating mountain passes or exploring hidden valleys, this tour offers an immersive experience for biking enthusiasts.",
        itinearyTextFile: "MotoWonderer"
    },
    {
        imageSrc: "/pictures/Biking 1.jpg",
        title: "Moto Quest",
        eventDuration: "10 Days/ 9 Nights",
        description: "Discover the spirit of adventure with our Moto Quest Tour package. Ride through breathtaking Himalayan landscapes, ancient monasteries, lush valleys, and winding mountain passes. This tour is crafted for passionate riders seeking a perfect blend of thrill, culture, and natural beauty.Join us on two wheels and experience Bhutan like never before.",
        itinearyTextFile: "MotoQuest"
    },
    {
        imageSrc: "/pictures/Bike Ride.jpg",
        title: "Nomadic Rider",
        eventDuration: "14 Days/ 13 Nights",
        description: "Step into the heart of the Himalayas with our Nomadic Rider Tour Package, a unique biking adventure designed for free spirits and thrill-seekers. Ride across rugged terrains, remote villages, high mountain passes, and culturally rich valleys as you explore the untouched beauty of Bhutan. This tour is perfect for those who crave the open road, authentic encounters, and unforgettable moments.",
        itinearyTextFile: "NomadicRider"
    },
    {
        imageSrc: "/pictures/Bike and barshong.jpg",
        title: "Heritage Ride",
        eventDuration: "13 Days/ 12 Nights ",
        description: "Embark on a journey through Heritage Ride Package. This curated tour takes you across Bhutan’s ancient majestic dzongs (fortresses), centuries-old monasteries, and traditional villages, all from the seat of your motorcycle. Ride through scenic valleys and winding mountain roads as you explore the deep cultural roots and spiritual heritage of the Land of the Thunder Dragon. Perfect for riders who want both adventure and authentic cultural immersion.",
        itinearyTextFile: "HeritageRide"
    }
]

export const specialTours: ITourPackage[] = [
    {
        imageSrc: "/pictures/Woodpicker.jpg",
        title: "Bird Watching",
        eventDuration: "",
        description: "Bhutan is a hidden gem for bird enthusiasts, home to over 700 species of birds, including rare and endangered ones like the Black-necked Crane, Rufous-necked Hornbill, and Ward’s Trogon. From lush subtropical forests to high alpine meadows, Bhutan’s pristine environment offers an unmatched birding experience.",
        itinearyTextFile: ""
    },
    {
        imageSrc: "",
        title: "Cycling",
        eventDuration: "",
        description: "Our Cycling Tour in Bhutan offers a unique way to explore the country’s landscapes, culture, and peaceful way of life. Ride through charming valleys, remote villages, and over scenic mountain passes, all while soaking in breathtaking views of the Himalayas. This tour combines physical challenge with cultural immersion for a truly unforgettable journey.",
        itinearyTextFile: ""
    },
    {
        imageSrc: "/pictures/fishing-1.jpeg",
        title: "Fishing",
        eventDuration: "-",
        description: "Enjoy peaceful fishing in Bhutan’s pristine rivers and lakes, home to species like trout and mahseer. With clean waters and stunning Himalayan scenery, it’s a unique and eco-friendly angling experience.",
        itinearyTextFile: ""
    },
    {
        imageSrc: "",
        title: "Events Touring",
        eventDuration: "-",
        description: "Plan your special events in the beautiful setting of Bhutan. Our Event Tour Packages are tailored for meetings, family gatherings, reunions, weddings, and other private celebrations. From venue arrangements to logistics, travel, and cultural experiences, we handle every detail, so you can focus on creating memories.",
        itinearyTextFile: ""
    },
    {
        imageSrc: "",
        title: "Photography Touring",
        eventDuration: "-",
        description: "Discover Bhutan through the lens with our curated Photography Tour, guided by Pema Dorji, a renowned Bhutanese photographer with over a decade of experience. Highly sought after by international travelers, Pema is known for his deep understanding of Bhutan’s landscapes, culture, and light, ensuring you capture truly breathtaking shots.",
        itinearyTextFile: ""
    },
    {
        imageSrc: "/pictures/helicopter-ride.jpeg",
        title: "Helicopter Tour",
        eventDuration: "-",
        description: "One of the exclusive experiences we offer our clients is a helicopter tour over Bhutan's stunning landscapes. This aerial journey provides a unique perspective of the country, offering views that are simply not visible from the ground. From snow-capped Himalayan peaks and pristine valleys to cliff side monasteries and remote villages, the sights from above are truly unforgettable. The cost of the helicopter ride depends on the duration of the flight and the locations covered, and can be customized based on your itinerary. Helicopter services in Bhutan are provided by two operators, Drukair (a state-owned service) and Heli Bhutan (a privately owned operator). We'll assist you in arranging the best route and provider to suit your travel plans and preferences.",
        itinearyTextFile: ""
    }
]

export const tourPackagesTypes: ITourPackageType[] = [
    {
        title: "Cultural Tours",
        description: "Embark on a journey to the heart of Bhutan with Himalayan Horizons Adventures, a land where timeless traditions blend seamlessly with awe-inspiring landscapes. These cultural tours provide a truly immersive experience, inviting you to uncover Bhutan's rich heritage, vibrant customs, and tranquil way of life:",
        tourPackages: culturalTours,
    },
    {
        title: "Bhutan Festival Tours",
        description: "Discover Bhutan's Vibrant Festivals:Bhutan’s colorful Tshechus are more than celebrations—they are spiritual gatherings deeply rooted in Buddhist traditions. These festivals captivate visitors with mesmerizing mask dances, enchanting music, and sacred rituals. A true reflection of Bhutan’s rich culture, these events bring communities together, offering an unforgettable experience of the country's unique heritage and vibrant spirit. Here are some of the most famous festivals in Bhutan:",
        tourPackages: bhutanFestivalTours
    },
    {
        title: "Trekking Tours",
        description: "If you're looking to escape the hustle of city life and immerse yourself in nature, trekking in Bhutan is the perfect choice. It offers a deeply satisfying and unforgettable experience, providing both relaxation and cherished memories. With its breathtaking landscapes, pristine wilderness, and rich cultural heritage, Bhutan’s treks range from easy scenic walks to challenging high-altitude expeditions.Here are some of the best trekking options in Bhutan for you to explore:",
        tourPackages: trekkingTours
    },
    {
        title: "Biking Tours",
        description: "Bhutan’s roads are a dream come true for two-wheeler enthusiasts. With every twist of the throttle, riders are treated to a dynamic mix of changing altitudes, diverse terrain, and ever-shifting road conditions that combine adventure with awe-inspiring beauty. As you cruise through the heart of the Himalayas, you’ll pass through mist-laden mountain passes, tranquil riverside trails, lush valleys, and ancient forests. The landscape transforms with every ascent and descent—temperature dips, vegetation shifts, and the scenery keeps evolving. From smooth tarmac to gravel stretches, semi-steep inclines, descents, and endless hairpin bends, every kilometer delivers a fresh thrill, making the ride truly unforgettable.",
        tourPackages: bikingTours
    },
    {
        title: "Special Tours",
        description: "We also offer a wide range of customizable tour packages tailored to your interests, including Biking Tours, Cycling Tours, Fishing Tours, Photography Tours, and Event Tours (such as weddings, meetings, reunions, parties, and more). Each package is designed to provide a unique and memorable experience based on your preferences.",
        tourPackages: specialTours
    }
]

export const tourItinenariesMdx: Record<string, React.ComponentType> = {
  "BestOfBhutan": BestOfBhutan,
  "CentrailBhutanAdventure": CentralBhutanAdventure,
  "EastToWestBhutan": EastToWestBhutan,
  "GlimpseOfBhutan": GlimpseOfBhutan,
  "ShortEscapeToBhutan": ShortEscapeToBhutan,
  "HeritageRide": HeritageRide,
  "MotoQuest": MotoQuest,
  "MotoWonderer": MotoWonderer,
  "NomadicRider": NomadicRider,
  "BlackNeckedCraneFestival": BlackNeckedCraneFestival,
  "DrukWangyelFestivalTour": DrukWangyelFestivalTour,
  "JambayLhakhangFestivalTour": JambayLhakhangFestivalTour,
  "ParoFestivalTour": ParoFestivalTour,
  "PunakhaFestivalTour": PunakhaFestivalTour,
  "ThimphuFestivalTour": ThimphuFestivalTour,
  "BumdraTrek":BumdraTrek,
  "DagalaTrek": DagalaTrek,
  "DrukPathTrek": DrukPathTrek,
  "JomolhariTrek": JomolhariTrek,
  "LayaGasaTrek":  LayaGasaTrek
};