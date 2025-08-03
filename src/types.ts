export interface IMenuItem {
    text: string;
    url: string;
}

export interface ICarouselItem{
    id: number;
    title: string;
    description: string;
    image: string,
    color: string,
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface ITourPackageType{
    title:string;
    description: string;
    tourPackages: ITourPackage[];
}

export interface ITourPackage{
    imageSrc: string;
    title: string;
    eventDuration: string;
    description: string;
    itinearyTextFile: string;
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}