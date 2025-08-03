'use client';

import { useEffect, useState } from 'react'
import Image from 'next/image';
import { carouselItems } from '@/data/carouselItems';


export default function Carousel() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % carouselItems.length)
        }, 7000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-screen overflow-hidden shadow-lg mx-auto">
            {carouselItems.map((item, i) => (
                <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div className='bg-gradient-to-br ${item.color}'>
                        <Image
                            src={item.image}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center text-justify px-11" >
                            <div className="text-center text-white">
                                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg max-w-2xl">
                                    {item.description}
                                </h3>
                                <p className="text-xl opacity-90 drop-shadow-md max-w-2xl ">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-10 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
