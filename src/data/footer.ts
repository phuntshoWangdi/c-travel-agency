import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Inspiring journeys through unforgettable travel experiences.",
    quickLinks: [
        {
            text: "Tour Packages",
            url: "#tourPackages"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'chhogyal123@gmail.com',
    telephone: '+975 77707737',
    socials: {
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        instagram: 'https://www.instagram.com',
    }
}