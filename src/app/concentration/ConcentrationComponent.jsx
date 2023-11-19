
"use client";
import { useState ,useEffect } from "react";
const ConcentrationGamecomponet = () => {
    {/* game component */ }

    const [numbersAndExpression , setNumbersAndExpression] = useState({
        firstNumber:2,
        secondNumber:4,
        Expression:"+",
        options:[1,3,4,7],
        correctOption:3
    });

    const GenereateSession = () => {
        
        let numbersAndExpression = {
            firstNumber:0,
            secondNumber:0,
            Expression:0,
            options:[],
            correctOption:0
        };
        numbersAndExpression.firstNumber = Math.floor( Math.random()*10);
        numbersAndExpression.secondNumber = Math.floor(Math.random() *10);
        numbersAndExpression.Expression = ["+" , "-","*" ][Math.floor(Math.random()*3)];
        setNumbersAndExpression(numbersAndExpression);
    }

   
    useEffect(()=> {
        GenereateSession()
    } ,[])
    return (
        <main className=" w-4/5 overflow-y-auto">

            <div className="leading-10 font-semibold text-center text-3xl ">
                {/* title of the page */}
                Concentrate
            </div>
            <div className="flex flex-col gap-y-3">

            <div>
            {/* ToDo: Like to implement time */}
                {/* timeout */}
                Time : 
            </div>


                <div className="flex gap-2">
                    {/* `question` */}
                    <div> {numbersAndExpression.firstNumber}</div>
                    <div> {numbersAndExpression.Expression} </div>
                    <div> {numbersAndExpression.secondNumber} </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {/* answer */}
                    <div> {numbersAndExpression.options[0]}</div>
                    <div> {numbersAndExpression.options[1]}</div>
                    <div> {numbersAndExpression.options[2]}</div>
                    <div> {numbersAndExpression.options[3]}</div>
                </div>

            </div>
        </main>
    );
}

export default ConcentrationGamecomponet;