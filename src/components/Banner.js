

const Banner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="mx-4">
                <img className="w-16 h-auto" src="./img/fb-logo.webp" alt="facebook-logo" />
                <img className="w-16 h-auto " src="./img/ig-logo.webp" alt="facebook-logo" />
            </div>
            <div className="mx-4">
                <img className="" src="./img/levelup-logo.webp" alt="level-up-mma-logo" />
            </div>
            <div className="flex flex-col mx-4">
                <button className="my-2 outline-none focus:outline-none bg-transparent border-2 border-blue-500 text-blue-500 text-xs sm:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-[#0D27D6] hover:text-white transition duration-300 bg-gray-600 bg-opacity-20">
                    Sign Up Form
                </button>
                <button className="my-2 outline-none focus:outline-none bg-transparent border-2 border-blue-500 text-blue-500 text-xs sm:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-[#0D27D6] hover:text-white transition duration-300 bg-gray-600 bg-opacity-20">
                    Member Login
                </button>
                <p>Sign up with student name!</p>
            </div>
        </div>

    )
}

export default Banner