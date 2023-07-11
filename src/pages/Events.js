import { HashLink } from 'react-router-hash-link';

const Events = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-500 bg-opacity-30 p-4">

            <div className='my-8'>
                <h1 className='flex justify-center'><span className="text-4xl sm:text-6xl mt-8 bg-gray-600 bg-opacity-20 shadow-2xl border-4 border-[#0D27D6] p-4 rounded-2xl">No Current Events</span></h1>
            </div>
            <div className='flex justify-center items-center'>
                <img src='./img/levelup-logo-colorful.png' alt='level-up-colorful-logo' />
            </div>
            {/* <HashLink
                smooth
                id="to-top"
                to="/signup-and-prices#"
                className="flex justify-center mt-6 text-gray-400 underline"
            >
                Back To Top
            </HashLink> */}

        </div>
    )
}

export default Events