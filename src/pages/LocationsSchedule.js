import { HashLink } from 'react-router-hash-link';
import PrivateClasses from '../components/PrivateClasses';

const LocationsSchedule = () => {
    return (
        <div className='mb-2'>
            <div className="flex justify-center mb-8">
                <img className="h-36 sm:h-60" src='./img/locations.png' alt='locations-banner' />
            </div>
            <div>
                <h1>Classes run from August 29th, 2022 - May 26th, 2023</h1>
                <h2 className="px-2 pb-4 text-3xl flex justify-center my-4"><span className="bg-[#30cf3b] p-1 rounded-lg text-white border border-2 border-[#0D27D6] shadow-xl">Please use student name on Sign Up Form!!!!</span></h2>
            </div>
            <div className="overflow-x-auto mx-6">
                <table className="min-w-full divide-y rounded-lg my-6 shadow-lg">
                    <thead className="bg-gray-300 border-2 border-gray-300">
                        <tr className=''>
                            <th scope="col" className="px-6 py-6 text-center text-xs font-bold text-[#0D27D6] uppercase tracking-wider">
                                Program
                            </th>
                            <th scope="col" className="px-6 py-6 text-center text-xs font-bold text-[#0D27D6] uppercase tracking-wider">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-6 text-center text-xs font-bold text-[#0D27D6] uppercase tracking-wider">
                                Instructor
                            </th>
                            <th scope="col" className="px-6 py-6 text-center text-xs font-bold text-[#0D27D6] uppercase tracking-wider">
                                When
                            </th>
                            <th scope="col" className="px-6 py-6 text-center text-xs font-bold text-[#0D27D6] uppercase tracking-wider">
                                Register
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center">
                                    <img className='w-44' src='./img/levelup-logo.webp' alt='levelup-logo' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex flex-col justify-center">
                                    <h2 className='text-2xl underline'>Primrose of Prestonwood</h2>
                                    <h2>15237 Montfort Dr, Dallas, TX 75248</h2>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center items-center">
                                    <h1 className='mr-4 text-xl'>Mr. C</h1>
                                    <img className='w-24 rounded-lg shadow-xl border-2 border-gray-300' src='./img/mr-c.webp' alt='mrc' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 flex flex-col justify-center items-center">
                                    <h1 className='mr-4 '>Monday</h1>
                                    <h1 className='mr-4 '>9:30 AM</h1>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Register</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center">
                                    <img className='w-44' src='./img/levelup-logo.webp' alt='levelup-logo' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    <h2 className='text-2xl underline'>Primrose of Frisco at Independence</h2>
                                    <h2>14477 Lebanon Rd, Frisco, TX 75035</h2>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center items-center">
                                    <div>
                                        <h1 className='mr-4 text-xl'>Coach</h1>
                                        <h1 className='mr-4 text-xl'>Jesse</h1>
                                    </div>
                                    <img className='w-24 rounded-lg shadow-xl border-2 border-gray-300' src='./img/jesse.webp' alt='mrc' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 flex flex-col justify-center items-center">
                                    <h1 className='mr-4 '>Monday</h1>
                                    <h1 className='mr-4 '>9:30 AM</h1>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Register</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center">
                                    <img className='w-44' src='./img/levelup-logo.webp' alt='levelup-logo' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    <h2 className='text-2xl underline'>Primrose of Park Cities</h2>
                                    <h2>4011 Inwood Rd, Dallas, TX 75209</h2>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 flex justify-center items-center">
                                    <h1 className='mr-4 text-xl'>Mr. C</h1>
                                    <img className='w-24 rounded-lg shadow-xl border-2 border-gray-300' src='./img/mr-c.webp' alt='mrc' />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 flex flex-col justify-center items-center">
                                    <h1 className='mr-4 '>Monday</h1>
                                    <h1 className='mr-4 '>10:30 AM</h1>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Register</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <PrivateClasses />
            <HashLink
                smooth
                id="to-top"
                to="/locations-shedule#"
                className="flex justify-center mt-6 text-gray-400 underline"
            >
                Back To Top
            </HashLink>
        </div>
    )
}

export default LocationsSchedule