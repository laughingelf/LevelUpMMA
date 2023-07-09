

const Footer = () => {
    return (
        <div className="bg-black py-4">
            <div className="p-4 flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-[#30cf3b] text-4xl mb-4">Stay Updated</h1>
                    <form className="flex flex-col sm:flex-row">
                        <input
                            placeholder="Enter your email here"
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-800 text-white py-2 px-4 mb-2 sm:mr-2 rounded-lg focus:outline-none"
                        />
                        <button
                            className="bg-[#0D27D6] text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            type="submit"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
                <div className="flex mt-4">
                    <a className="flex items-center text-xs sm:text-lg text-[#30cf3b] mr-2">
                        <img className="w-6 h-6" src="./img/phone.svg" alt="phone-icon" />
                        214-680-9155
                    </a>
                    <a href="mailto:info@levelupmma.com" className="flex items-center text-xs sm:text-lg text-[#30cf3b] mr-2">
                        <img className="w-6 h-6" src="./img/email.svg" alt="email-icon" />
                        info@levelupmma.com
                    </a>
                    <a className="flex items-center text-white mr-2">
                        <img className="w-6 h-6" src="./img/instagram.svg" alt="instagram-icon" />
                    </a>
                    <a className="flex items-center text-white">
                        <img className="w-6 h-6" src="./img/facebook.svg" alt="facebook-icon" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer