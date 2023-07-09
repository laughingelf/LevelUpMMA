import React from 'react'

const StaffMembers = () => {
    return (
        <div className="p-4 mx-8 flex flex-col justify-center sm:flex-row">

            <div className="flex flex-col items-center m-2 border border-2 border-black p-4 rounded-lg shadow-xl staff-div">
                <div className='mb-2'>
                    <img className='staff-member rounded-lg' id='mrc-pic' src="./img/mr-c.webp" alt="mr.c" />
                </div>
                <div>
                    <h1 className='text-2xl title'>Andrew Carrasco</h1>
                    <h1 className='text-lg underline title'>CEO & Chief Instructor</h1>
                </div>
                <div>
                    <p>I am Mr. Carrasco, aka “Mr. C”! I am the Owner/Chief Instructor of Level Up Martial Arts. I have been studying Martial Arts for 33 years &  a 5th degree Black Belt. I have taught for over 20 years in Commercial Karate Schools & 9 years in Texas Public Schools with the Chuck Norris' KICKSTART KIDS Program. I'm also a Primrose Parent Alumni and know first hand the love, attention, and commitment your child receives from the staff at your Primrose School. My Martial Arts journey has blessed me with many achievements, state & world titles, friendships, and a vast knowledge for all aspects the Art. I look forward to sharing those experiences with your Little Warrior to create opportunities, fun memories, and a desire to become a champion in life.</p>
                    <br />
                    <p>Dream Big. Work Hard. Keep Trying. Respect and Much Love,<br /><span className="font-bold underline">Mr. C</span></p>
                </div>
            </div>
            <div className="flex flex-col items-center m-2 border border-2 border-black p-4 rounded-lg shadow-xl staff-div">
                <div className='mb-2'>
                    <img className='staff-member rounded-lg' id='mrc-pic' src="./img/jesse.webp" alt="jesse" />
                </div>
                <div>
                    <h1 className='text-2xl title'>Jesse Salazar</h1>
                    <h1 className='text-lg underline title'>Instructor</h1>
                </div>
                <div>
                    <p>I'm Jesse Salazar aka "The Gentle Giant". I began karate at age 11 years with the KICKSTART KIDS Program. I have won several City & State Titles throughout my young career & recently received my 1st degree black belt under Mr. Carrasco. I am currently training for my first Amatuer Cage match! I enjoy making music in my spare time, working out & being a part time Phycial Trainer, & spending time with my family.</p>
                </div>
            </div>
            <div className="flex flex-col items-center m-2 border border-2 border-black p-4 rounded-lg shadow-xl staff-div">
                <div className='mb-2'>
                    <img className='staff-member rounded-lg' id='mrc-pic' src="./img/edward.webp" alt="edward" />
                </div>
                <div>
                    <h1 className='text-2xl title'>Edward Stevenson</h1>
                    <h1 className='text-lg underline title'>Instructor</h1>
                </div>
                <div>
                    <p>I'm Edward Stevenson. I began my journey as a martial artist at 5 years old studying Kajukenbo through a local rec center class. Since then, I've trained with over a dozen instructors across many styles. I finally earned my black belt under Andrew Carrasco in the Kickstart program. Now I'm a certified secondary math teacher in the state of Texas as well as an instructor for Level Up.</p>
                </div>
            </div>
            <div className="flex flex-col items-center m-2 border border-2 border-black p-4 rounded-lg shadow-xl staff-div">
                <div className='mb-2'>
                    <img className='staff-member rounded-lg' id='mrc-pic' src="./img/francine.webp" alt="francine" />
                </div>
                <div>
                    <h1 className='text-2xl title'>Francine Lisangi - Carrasco</h1>
                    <h1 className='text-lg underline title'>Values Curriculum Director</h1>
                </div>
                <div>
                    <p>M.E.D. Teaching, Leadership, Collaboration, & Curriculum B.S. Early Childhood Instructional Facilitator ELA 6th Grade NJHS Coordinator / Sponsor Hello, I'm Francine and I help coordinate the Values Curriculum for the Level Up Little Warriors Program. I believe Education and the core values of Martial Arts serves as a great combination to steer our community and the lives of our students in a positive direction. I'm a wife, mother, Educator, Entrepreneur, and lover of fashion!</p>
                </div>
            </div>


        </div>
    )
}

export default StaffMembers