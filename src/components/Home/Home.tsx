"use client"
import { containerVariants } from "@/utils";
import { motion } from "framer-motion"
import Image from "next/image";

const Home: React.FC = () => {
    return <motion.div
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }} id="aboutBhutan"
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" order-2 md:order-1 px-0 md:px-28 py-10">
            <p className="text-justify md:text-left">
                <strong>Bhutan,</strong> famously known for its philosophy of <strong>Gross National Happiness,</strong> is truly a &quot;once-in-a-lifetime destination&quot;.
                This enchanting Himalayan kingdom is more than just a feast for the eyes, it offers a profound opportunity to immerse yourself in a way of life deeply rooted in harmony, mindfulness, and genuine happiness.
                From the awe-inspiring Tiger’s Nest Monastery, perched dramatically on a sheer cliff, to the pristine, untouched beauty of its valleys, rivers, and forests, Bhutan is a place where nature and spirituality blend seamlessly.
                Each moment in Bhutan leaves an indelible mark, offering not just stunning vistas, but a transformative journey of the heart and soul.
                Embark on an unforgettable journey with Himalayan Horizons Adventures!Book your tour now and create memories that last a lifetime.“
            </p>
        </div>
        <div className="order-1 md:order-2 relative md:pr-28 pt-10">
            <div className=" inline-block text-transparent bg-clip-text bg-cover bg-center" style={{ backgroundImage: "url('/pictures/Bhutan National Day.jpg')" }}>
                <h1 className="text-3xl font-bold">About</h1>
                <h2 className="text-8xl font-extrabold">Bhutan</h2>
            </div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/pictures/tashitso Dzong 2.jpg"
                    alt="Tashicho Dzong"
                    fill
                    className="object-cove rounded-lg"
                    priority
                />
            </div>
        </div>
    </motion.div>
}

export default Home