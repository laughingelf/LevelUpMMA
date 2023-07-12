
import { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import SpecialsBanner from "../components/SpecialsBanner"
import Staff from "../components/Staff"
import HorizontalScrollList from "../components/HorizontalScrollList"


const Homepage = () => {

    const [runningSpecials, setRunningSpecials] = useState(false)

    const images = [
        './img/mr-c.webp',
        './img/jesse.webp',
        './img/edward.webp',
        './img/francine.webp',
        './img/jesse.webp',
        './img/edward.webp',
        './img/francine.webp'
    ].map((image) => ({
        id: crypto.randomUUID(),
        image
    }))


    return (
        <div className="mx-4 mb-2">
            <>
                {runningSpecials ? (
                    <SpecialsBanner />
                ) : null}
            </>
            <HorizontalScrollList images={images} speed={16000} />
            <div className="flex flex-col justify-center items-center">
                <iframe
                    id="yt-video"
                    className="m-2"
                    src="https://www.youtube.com/embed/TU8Qf47x9ro"
                    title="Little Warrior Belt Ceremony 2023"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
                <img
                    id="lw-img"
                    className=""
                    src="./img/little-warriors.webp"
                    alt="little-warrior-ceremony"
                />
            </div>

            <About />

            <Staff />
            <Contact />


        </div>
    )
}

export default Homepage