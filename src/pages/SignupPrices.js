import { HashLink } from 'react-router-hash-link';
import PrivateClasses from '../components/PrivateClasses';

const SignupPrices = () => {
    return (
        <div className="mb-2">
            <div className='my-8'>
                <h1 className='flex justify-center mx-2'><span className="text-4xl sm:text-6xl mt-8 bg-gray-600 bg-opacity-20 shadow-2xl border-4 border-[#0D27D6] p-4 rounded-2xl">Little Warrior Sign Up Form & Pricing</span></h1>
            </div>
            <div className="flex flex-col sm:flex-row my-8 p-4">
                <div>
                    <img className="shadow-xl rounded-lg border border-4 border-[#0D27D6] w-full sm:w-auto" src="./img/summer-prog.webp" alt="summer-program" />
                </div>
                <div className="flex flex-col justify-center items-center sm:ml-4">
                    <div className="my-4">
                        <h2 className="pb-2 px-2">Welcome to our Sign Up / Pricing page</h2>
                        <h2 className="px-2">We come to your child's school once a week on your school's designated day for 30 minutes. Our Little Warriors Martial Arts program is for ages 3 & Up!</h2>
                        <h2 className="py-2 px-2">Please see <a className="underline">FAQ's</a> to see how our Little Warriors Program operates at your child's school.</h2>
                        <h2 className="px-2 pb-4 text-3xl flex justify-center"><span className="bg-[#30cf3b] p-1 rounded-lg text-white border border-2 border-[#0D27D6] shadow-xl">Please use student name on Sign Up Form!!!!</span></h2>
                    </div>
                    <div className="flex mt-4">
                        <img className="w-10 h-15 sm:w-15 sm:h-20" src="./img/karate-kid-right.webp" alt="karate-kid-right" />
                        <button className="bg-[#0D27D6] text-white font-medium py-2 px-4 rounded-lg ml-2 mr-4 sm:ml-4 sm:mr-2 hover:bg-blue-600 transition duration-300">Click to Sign Up</button>
                        <button className="bg-[#0D27D6] text-white font-medium py-2 px-4 rounded-lg ml-2 mr-4 sm:ml-4 sm:mr-2 hover:bg-blue-600 transition duration-300">Ninja Headbands</button>
                        <img className="w-10 h-15 sm:w-15 sm:h-20" src="./img/karate-kid-left.webp" alt="karate-kid-left" />
                    </div>
                    <div className="flex justify-center items-center bg-[#50cea8] mt-4 sm:mt-8 mx-2 sm:mx-4 p-2 rounded-lg">
                        <img className="h-6 w-6 sm:h-16 sm:w-16" src="./img/star.svg" alt="star" />
                        <h2 className="text-white text-base sm:text-lg">Summer Special! $15 Sign Up Fee. Includes Ninja Headband! $60 per month for in-person classes in May and June at your child's school. Optional Virtual month for July!</h2>
                        <img className="h-6 w-6 sm:h-16 sm:w-16" src="./img/star.svg" alt="star" />
                    </div>
                    <div>
                        <h2 className="font-bold underline mt-4 sm:mt-8">Please see the following pricing packages & information below for the Little Warrior Classes:</h2>
                    </div>
                </div>
                <div>
                    <img className="shadow-xl rounded-lg border border-4 border-[#0D27D6] w-full sm:w-auto" src="./img/summer-prog.webp" alt="summer-program" />
                </div>
            </div>
            <div>
                <div className="flex justify-center mb-8">
                    <img className="h-36 sm:h-60" src="./img/registration-fee.png" alt="registration-fee-banner" />
                </div>
                <div className="mb-4">
                    <h2 className="font-bold text-3xl">$40</h2>
                    <h2 className="text-lg">Registration fee includes a Little Warrior T-Shirt & Personalized Ninja Headband. </h2>
                </div>
                <div id="registration-pics" className="flex flex-row justify-center items-center">
                    <img className="m-1 rounded-lg shadow-xl" src="./img/reg-img1.webp" alt="registration-img" />
                    <img className="m-1 rounded-lg shadow-xl" src="./img/reg-img2.webp" alt="registration-img" />
                    <img className="m-1 h-32 rounded-lg shadow-xl" src="./img/reg-img3.webp" alt="registration-img" />
                    <img className="m-1 rounded-lg shadow-xl" src="./img/reg-img4.webp" alt="registration-img" />
                    <img className="m-1 rounded-lg shadow-xl" src="./img/reg-img5.webp" alt="registration-img" />
                </div>
            </div>
            <div className="mb-8">
                <div className="flex justify-center my-8">
                    <img className="h-36 sm:h-60" src="./img/monthly-tuition.png" alt="monthly-tuition" />
                </div>
                <div className="flex flex-col justify-center sm:flex-row">
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$70</h1>
                        <h1 className="text-lg underline">Monthly Contract</h1>
                        <p>(Includes Standard Little Warrior Start Up Kit,
                            Fall Test, Spring Combat Tournament, & Belt Ceremony Fee's).
                            Monthly Auto Draft, Full payment, Check
                            No Refunds</p>
                    </div>
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$80</h1>
                        <h1 className="text-lg underline">Month to Month (Cancel anytime)</h1>
                        <p>You can cancel at any time. Payments autodrafted on the 1st of each month.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center my-8">
                    <img className="h-36 sm:h-60" src="./img/yearly-tuition.png" alt="yearly-tuition" />
                </div>
                <div className="flex flex-col justify-center sm:flex-row">
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$775</h1>
                        <h1 className="text-lg underline">Full Year (10 Months)</h1>
                        <p>(Includes Standard Little Warrior Start Up Kit,
                            Fall Test, Spring Combat Tournament, & Belt Ceremony Fee's).
                            Monthly Auto Draft, Full payment, Check
                            No Refunds</p>
                    </div>
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$900</h1>
                        <h1 className="text-lg underline">Full Year (10 Months)</h1>
                        <p>(Includes Deluxe Little Warrior Start Up Kit,
                            Fall Test, Spring Combat Tournament, & Belt Ceremony Fee's).
                            Monthly Auto Draft, Full payment, Check
                            No Refunds</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center my-8">
                    <img className="h-36 sm:h-60" src="./img/starter-kit.png" alt="starter-kit" />
                </div>
                <div className="mb-4">
                    <h1 className="text-lg">Starter Kits are optional for all Little Warriors. Includes exclusive LW Shirt</h1>
                </div>
                <div className="flex flex-col justify-center sm:flex-row">
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$75</h1>
                        <h1 className="text-lg underline">Standard L.W.S.K.</h1>
                        <p>(Includes Level Up Little Warrior White Uniform, Belt, T-Shirt, Headband, & Bag)</p>
                        <img className="mt-2 rounded-lg shadow-xl" src="./img/starter-kit-img1.webp" alt="starter-kit-img" />
                    </div>
                    <div className="mx-8 w-80 border border-2 shadow-xl bg-gray-500 bg-opacity-30 p-4 rounded-lg my-4 sm:my-1">
                        <h1 className="font-bold text-3xl mb-4">$150</h1>
                        <h1 className="text-lg underline">Deluxe L.W.S.K.</h1>
                        <p>(Includes Little Warrior Blue or Pink Uniform, Gloves, Belt, T-Shirt, Headband, & Bag)</p>
                        <img className="mt-2 rounded-lg shadow-xl" src="./img/starter-kit-img2.webp" alt="starter-kit-img" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center my-8">
                    <img className="h-36 sm:h-60" src="./img/lw-uniform.png" alt="uniforms" />
                </div>
                <div className="flex flex-row uniform justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img className="ml-2 mr-1 my-4 rounded-lg shadow-xl" src="./img/lw-uni-img1.webp" alt="little-warriors-uniforms" />
                        <img className="mx-1 my-4 rounded-lg shadow-xl" src="./img/lw-uni-img2.webp" alt="little-warriors-uniforms" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="mx-1 my-4 rounded-lg shadow-xl" src="./img/lw-uni-img3.webp" alt="little-warriors-uniforms" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="mx-1 my-4 rounded-lg shadow-xl" src="./img/lw-uni-img4.webp" alt="little-warriors-uniforms" />
                        <img className="ml-1 mr-2 my-4 rounded-lg shadow-xl" src="./img/lw-uni-img5.webp" alt="little-warriors-uniforms" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center my-8">
                    <img className="h-36 sm:h-60" src="./img/mandatory-events.png" alt="mandatory-events" />
                </div>
                <div>
                    <h1 className="text-3xl title">$10: Belt Test - December 2023</h1>
                    <h3 className="italic mt-4 mb-8">(Belt Test in class at your child's school with parent attendance & participation)</h3>
                </div>
                <div>
                    <h1 className="text-3xl mb-4 title">$40: Stick Combat Tournament - March 2024</h1>
                    <h3 className="text-lg mb-4">Includes one student & one parent competitor wrist band.</h3>
                    <h4 className="px-6 sm:px-16 mb-8">We make our tournament mandatory for our Little Warriors to drive home all the values and lessons we teach them trhoughout the year & the values you teach them as well. As your Little Warrior gets older, they will experience competion in various sports and we use our Martial Arts tournament to help prepare them for those future experiences. Showing respect towards their opponents, learning to deal with winning and losing, showing discipline in following the rules, and learning good sportsmanship. We involve our parents to compete as well so your Little Warrior witness these values being implented by the ones they love and look up too the most, you!!! Leading by example!</h4>
                </div>
                <div>
                    <h1 className="text-3xl mb-4 title">$75: Spring Belt Ceremony - April 2024</h1>
                    <h3 className="text-lg my-2">Fee applied in February. Includes 2 Adult event tickets.</h3>
                    <h3 className="text-lg my-2">Belt Ceremony will be held at a centralized location in the DFW on a Saturday morning at the end of April.</h3>
                    <h3 className="text-lg px-6 sm:px-16 my-2">Preparing each student for the Spring Belt Ceremony takes time, effort, & meticulous planning. Mandatory for all Little Warrior Students to receive next rank. Fee applied in February to all enrolled students regardless of attendance. </h3>                </div>
            </div>
            <PrivateClasses />

            <div className='my-12'>
                <a className='w-auto border shadow-xl border-4 text-gray-100 border-[#0D27D6] rounded-full bg-[#30cf3b] text-xl sm:text-2xl py-2 px-4 sm:py-8 sm:px-32'>Click to sign up for Ninja Skills!!</a>
            </div>
            <HashLink
                smooth
                id="to-top"
                to="/signup-and-prices#"
                className="flex justify-center mt-6 text-gray-400 underline"
            >
                Back To Top
            </HashLink>
        </div >

    )
}

export default SignupPrices