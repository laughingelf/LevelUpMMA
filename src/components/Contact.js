import { HashLink } from 'react-router-hash-link';

const Contact = () => {
    return (

        <div id='contact'>
            <div className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-64 sm:h-96 rounded-lg p-4 sm:mx-16" style={{
                backgroundImage: "url('./img/contact-us-bg.webp')"
            }}>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                <a className="flex items-center justify-center mr-1">
                    <img className="w-6 h-6" src="./img/phone-black.svg" alt="phone-icon" />
                    214-680-9155
                </a>
                <a href="mailto:info@levelupmma.com" className="flex items-center justify-center mr-2">
                    <img className="w-6 h-6" src="./img/email-black.svg" alt="email-icon" />
                    info@levelupmma.com
                </a>
            </div>
            <div className="">
                <form className="flex flex-col items-center p-4">
                    <label className="mb-2">
                        <input type="text" placeholder="Your Name" id="name" name="name" required className="border border-gray-300 p-2 rounded-lg contact-us" />
                    </label>
                    <label className="mb-2">
                        <input type="email" placeholder="Your Email" id="email" name="email" required className="border border-gray-300 p-2 rounded-lg contact-us" />
                    </label>
                    <label className="mb-2">
                        <input type="text" placeholder="Your Phone No." id="phone" name="phone" required className="border border-gray-300 p-2 rounded-lg contact-us" />
                    </label>
                    <label className="mb-2">
                        <textarea placeholder="Ask Us Anything?" id="question" name="question" required className="border border-gray-300 p-2 rounded-lg contact-us-text" />
                    </label>
                    <button type="submit" className="w-60 bg-[#0D27D6] text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 contact-us">
                        Get In Touch
                    </button>
                </form>
                <HashLink
                    smooth
                    id="to-top"
                    to="/#"
                    className="flex justify-center mt-6 text-gray-400 underline"
                >
                    Back To Top
                </HashLink>
            </div>
        </div>


    )
}

export default Contact