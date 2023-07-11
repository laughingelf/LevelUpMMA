import { HashLink } from 'react-router-hash-link';

const Testimonies = () => {
    return (
        <div className='mb-2'>
            <div className="flex justify-center mb-8">
                <img className="h-36 sm:h-60" src="./img/testimonies.png" alt="testimonies-banner" />
            </div>
            <div>
                <div className="mx-4 mb-8 sm:mx-24">
                    <div className="border p-4 rounded-lg bg-gray-400 bg-opacity-20 shadow-xl">
                        <h3>This is our family’s second experience with a local karate school, and we are so excited to have found Mr. Carrasco. Besides the affordability of his classes, our son thoroughly enjoys the class and the ‘family-like’ school environment. He loves attending his karate class. While Mr. Carrasco is very encouraging and   supportive of the kids, he is also stern when he needs to be. He shows exemplary patience in every class.  <span className="font-bold underline">- The Smith Family</span></h3>
                    </div>
                </div>
                <div className="mx-4 mb-8 sm:mx-24">
                    <div className="border p-4 rounded-lg bg-gray-400 bg-opacity-20 shadow-xl">
                        <h3>My son ALWAYS looks forward to the weekly Little Warriors class at CMA. Mr. Carrasco is great with the younger kids! He knows when to keep it simple and when to  challenge his students. Mr. C keeps things fun while commanding attention and setting boundaries. He is very good at what he does and the kids have a great time as they learn discipline and respect. We drive to Farmers Branch from Denton every week just to come to Mr. C school. I am so glad he has the Little Warriors Program.  <span className="font-bold underline">- Elizabeth F.</span></h3>
                    </div>
                </div>
                <div className="mx-4 mb-8 sm:mx-24">
                    <div className="border p-4 rounded-lg bg-gray-400 bg-opacity-20 shadow-xl">
                        <h3>My experience with the Little Warrior program at Level Up has been extremely positive. My son has learned exciting new skills that he will be able to use as he grows and throughout his life. The length of the class is perfect to keep the attention of the little ones and is just enough time to balance learning new techniques and having fun. I am extremely pleased with this program and  everything it has offered my son thus far. We will continue to be a part of it and I will continue to tell everyone I meet about it.  <span className="font-bold underline">- Shannon W.</span></h3>
                    </div>
                </div>

            </div>
            <div className="mb-8 flex flex-wrap justify-center items-center overflow-x-auto">
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Little Warrior Spring Belt Ceremony 2022</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="428" height="214" src="https://www.youtube.com/embed/_byTbnEkv4U" title="Level Up Little Warrior Spring Belt Ceremony 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Level Up Little Warrior Program 2021</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="428" height="214" src="https://www.youtube.com/embed/OP33sM_s5T0" title="Level Up Little Warriors Martial Arts Program" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Little Warrior Spring Belt Ceremony 2021</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="381" height="214" src="https://www.youtube.com/embed/zZ7Rhsa3mSo" title="Level Up Little Warriors Spring Belt Ceremony 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Mr. C paretnering with Patti on her black belt test.</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="480" height="270" src="https://www.youtube.com/embed/odcUoReAYRY" title="Patricia Ortiz Black Belt Testing One Steps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Mr. C cage fight 2014 in Galveston, TX</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="480" height="270" src="https://www.youtube.com/embed/P6vW-XKkiic" title="TXMMA SCC IX - Andrew Carrasco vs. Marcellus Brown" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="flex flex-col justify-center items-center sm:m-4 m-2">
                    <h3 className="text-lg">Mr. C choreographed demo. Skip to 15 minutes!</h3>
                    <iframe className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md" width="480" height="270" src="https://www.youtube.com/embed/_2F2aEi0pPA" title="2014 KSK State Chapmionships All Star Demo Competition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <HashLink
                smooth
                id="to-top"
                to="/parent-testimonies#"
                className="flex justify-center mt-6 text-gray-400 underline"
            >
                Back To Top
            </HashLink>
        </div>
    )
}

export default Testimonies