
"use client";
import { useState } from "react";
const ConcentrationGamecomponet = () => {
                {/* game component */}

        const [firstNumber ,setFirstNumber] = useState(0);
        const [secondNumber ,setSecondNumber] = useState(0);
    return (
        <main className=" w-4/5 overflow-y-auto">

            <div className="leading-10 font-semibold text-center text-3xl ">
                {/* title of the page */}
                Concentrate
            </div>


            <div>

            {firstNumber} {secondNumber}


            </div>
        </main>
    );
}

export default ConcentrationGamecomponet;