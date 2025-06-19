import Button from '../components/Button'

export default function Join() {
    return (
        <div className="flex flex-col lg:flex-row 
            *:px-32 *:py-64 *:content-center"
        >
            <div className="flex-4 relative bg-[#6BB080]">
                <div className="text-white text-center text-balance">
                    <h2 className="mb-4 text-3xl font-bold">JOIN US</h2>

                    <p className="text-lg">
                        Are you passionate about global challenges and eager to
                        share your experiences with prospective students?{" "}
                        <span className="font-bold">Join our team!</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col flex-5 gap-4 text-lg">
                <h3 className="font-bold text-center text-balance">
                    Eligibility Requirements
                </h3>

                <p>To become a HGLO Honors Ambassador, you must:</p>
                <ul className="ml-4 list-disc">
                    <li>
                        <p className="">
                            Be currently enrolled or have previously participated
                            in the Honors Global Challenges and Solutions program.
                        </p>
                    </li>

                    <li>
                        <p className="">
                            Have been accepted into the general Honors Ambassadors
                            program.
                        </p>
                    </li>
                </ul>
                
                <p>
                    If you are eligible and would like to join, please fill out
                    the form below!
                </p>

                <div className="flex justify-center">
                    <button className="block px-4 py-3 bg-[#66AB7B] 
                        text-white font-bold rounded-lg shadow-lg
                        transition-color duration-300 hover:bg-[#86B896]"
                    >
                        Ambassador Form
                    </button>
                </div>
            </div>
        </div>
    )
}