import StaffMembers from "./StaffMembers"


const Staff = () => {
    return (
        <div id="staff">
            <div className="bg-gray-800 bg-opacity-50 text-white rounded-lg mt-8 mx-16 flex flex-col justify-center items-center sm:flex-row border border-2 border-black shadow-xl">
                <img className="my-4 sm:pl-4 md:ml" src="./img/karate-kid-left.webp" alt="karate-kid-left" />
                <div className="mt-2">
                    <h1 className="text-2xl sm:text-6xl">MEET OUR STAFF</h1>
                    <div className="py-8 px-4 sm:px-44 md:px-10">
                        <p>Our Level Up Black Belt Instructors are fully Covid-19 Vaccinated,  Adult / Child /Toddler: CPR / AED / First Aid Certified, Texas Health & Human Service CBCU Background approved, and highly trained professional Martial Arts Instructors</p>
                    </div>
                </div>
                <img className="my-4 sm:pr-4" src="./img/karate-kid-right.webp" alt="karate-kid-right" />
            </div>

            <StaffMembers />

        </div>
    )
}

export default Staff