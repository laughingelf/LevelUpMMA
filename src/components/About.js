import ImageSlider from "./ImageSlider"


const About = () => {

    const images = [
        './img/mr-c.webp',
        './img/jesse.webp',
        './img/edward.webp',
        './img/francine.webp',
        './img/jesse.webp',
        './img/edward.webp',
        './img/francine.webp'
    ]



    return (
        <div>
            <div className="my-4 flex flex-col justify-center items-center sm:flex-row">
                <div id="stranger-danger" className="p-4 w-80 mx-8">
                    <img width="300px" src="./img/stranger-danger.png" alt="stranger-danger" />
                    <div className="border border-4 border-[#0D27D6] rounded-lg p-4 mt-2 bg-gray-600 bg-opacity-20 shadow-xl">
                        <p>One of our most important skills we teach all of our Little Warriors is our Stranger Danger Safety Course. God forbid anything happens to any of our children, but we also want to be pro-active and educate our children how to protect themselves in the situation they are confronted by a Stranger. We keep it simple, safe, and fun for our kids to learn basic self-defense and critical thinking skills for these situations.</p>
                        <div className="border border-1 border-blue-500 mt-2">
                            <p>Stranger Danger Video</p>
                        </div>
                    </div>

                </div>
                <div id="about-little-warriors" className="p-4 w-80 mx-8 bg-[#0D27D6] text-white border border-4 border-black rounded-lg flex flex-col justify-center shadow-xl">
                    <h1 className="mb-6 p-2 text-2xl">About our Little Warrior's Program</h1>
                    <p>Engaging students with intent. Instruction with passion & purpose. Level Up specializes in Private School/Daycare Instruction. Our curriculum enables students to critically think, develop fundamental movement, build positive relationships, & have fun!</p>
                    <br />
                    <p>A misconception about Martial Arts is that it teaches students how to fight. Though the Little Warrior program does provide your child the skill set to defend themselves & their family; your little warrior will experience a fun & exciting class from their experienced Black Belt Instructor using Martial Arts.</p>

                </div>
                <div id="character-dev" className="p-4 w-80 mx-8">
                    <img width="300px" src="./img/character-dev.png" alt="character-development" />
                    <div className="border border-4 border-[#0D27D6] rounded-lg p-4 mt-2 bg-gray-600 bg-opacity-20 shadow-xl">
                        <p>We teach all of our Little Warriors not just the physical side of karate, but the following value traits below throughout the year. Setting up our Little Warriors for a successful life and positive citizenship. </p>
                        <div className="flex flex-wrap justify-center">
                            <h2 className="m-1 font-bold">Focus</h2>
                            <h2 className="m-1 font-bold">Respect</h2>
                            <h2 className="m-1 font-bold">Confidence</h2>
                            <h2 className="m-1 font-bold">Discipline</h2>
                            <h2 className="m-1 font-bold">Dedication</h2>
                            <h2 className="m-1 font-bold">Courage</h2>
                            <h2 className="m-1 font-bold">Gratitude</h2>
                            <h2 className="m-1 font-bold">Compassion</h2>
                            <h2 className="m-1 font-bold">Leadership</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 flex flex-col justify-center sm:flex-row">
                <div id="scrolling-pics" className="p-4 w-80 mx-8">
                    <img width="300px" src="./img/scrolling-pics.png" alt="pictures-banner" />
                    <div className="border border-4 border-[#0D27D6] rounded-lg p-4 mt-2 bg-gray-600 bg-opacity-20 shadow-xl">
                        <ImageSlider images={images} />
                    </div>

                </div>
                <div id="karate-kid" className="p-4 w-80 mx-8">
                    <img className="h-50" src="./img/karate-kid.webp" alt="karate-kid" />

                </div>
                <div id="benefits" className="p-4 w-80 mx-8 ">
                    <img width="300px" src="./img/benefits.png" alt="benefits-banner" />
                    <div className="border border-4 border-[#0D27D6] rounded-lg p-4 mt-2 bg-gray-600 bg-opacity-20 shadow-xl">
                        <h3 className="m-1 text-sm font-bold">EARN 2 BELTS PER YEAR</h3>
                        <h3 className="m-1 text-sm font-bold">LEARN SELF DEFENSE</h3>
                        <h3 className="m-1 text-sm font-bold">STRANGER DANGER SAFETY COURSE</h3>
                        <h3 className="m-1 text-sm font-bold">COMPETE IN TOURNAMENT</h3>
                        <h3 className="m-1 text-sm font-bold">BREAK A BOARD</h3>
                        <h3 className="m-1 text-sm font-bold">CONSISTENT PARENT COMMUNICATION</h3>
                        <h3 className="m-1 text-sm font-bold">PRACTICE DISCIPLINE</h3>
                        <h3 className="m-1 text-sm font-bold">LEARN RESPECT</h3>
                        <h3 className="m-1 text-sm font-bold">GAIN SELF CONFIDENCE</h3>
                        <h3 className="m-1 text-sm font-bold">LOTS OF PARENT INVOLVEMENT</h3>
                        <h3 className="m-1 text-sm font-bold">QUALITY LESSONS EACH CLASS</h3>
                        <h3 className="m-1 text-sm font-bold">FAMILY OWNED AND OPERATED</h3>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default About