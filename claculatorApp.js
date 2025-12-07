import input from "analiza-sync"
import calculatorApp from "./all_Imports.js"
import { log } from "console";

console.log("!!!Welcome To Our Calculator App!!!");
const x = Number(input("peek a number use x:"))
const y = Number(input("peek a number use y:"))
let choice;

    while (choice !== "7") {
    choice = input(`How do you want to calc x and y ?
    1. sum
    2. sub
    3. multiply
    4. divided
    5. power
    6. root
    7. Exit 
    :__`)
        if (choice == "1") {
            const sum = calculatorApp.sumcalc(x,y)
            console.log(`${x} + ${y} = ${sum}`);  
            break                   
        }
        else if (choice == "2") {
            const sub = calculatorApp.subtrack(x,y)
            console.log(`${x} - ${y} = ${sub}`);
            break            
        }
        else if (choice == "3") {
            const multiply = calculatorApp.multiply(x,y)
            console.log(`${x} * ${y} = ${multiply}`); 
            break           
        }
        else if (choice == "4") {
            const divided = calculatorApp.divided(x,y)
            console.log(`${x} / ${y} = ${divided}`);
            break            
        }
        else if (choice == "5") {
            const power = calculatorApp.power(x,y)
            console.log(`${x} ** ${y} = ${power}`);
            break
        }
        else if (choice == "6") {
            const root = calculatorApp.root(x,y)
            console.log(`${x} √ ${y} = ${root}`);
            break
        }
        else if (choice == "7") {
            break
        }   
    }