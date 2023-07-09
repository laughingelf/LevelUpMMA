

const PrivateClasses = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center mt-8">
                <img className="h-36 sm:h-60" src="./img/private-lessons.png" alt="private-lessons" />
            </div>
            <div className='mb-8'>
                <h2 className="text-6xl title">Private Classes</h2>
            </div>
            <div className="px-6 mt-8 sm:px-48">
                <h3 className="text-lg mb-4">Located at Mr. C's home gym (Garage) in Carrollton.
                    Fully matted, A/C, fans, water, & all training equipment necassry for Traditional Karate & MMA training.
                    Live Stream classes available for all parents as they drop off students.</h3>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg my-4">Class Time & Days:</h3>
                <h4 className="font-bold text-lg underline mb-2">Wednesday</h4>
                <h4 className="font-bold text-xl">Ages 3-5 | 6:00 - 6:30 PM </h4>
                <h4 className="font-bold text-xl">Ages 6-12 | 6:30-7:30 pm</h4>
                <h4 className="font-bold text-xl">Ages 13 & Up | Adult MMA Class | 7:30-9 PM</h4>
                <h4 className="text-lg mt-8">Please <span className="underline font-bold">call</span> or <span className="underline font-bold">email</span> Mr. C for more information about these classes if needed.</h4>
            </div>
        </div>
    )
}

export default PrivateClasses