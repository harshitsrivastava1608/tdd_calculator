import { calculator } from "./calculator.js"
export const validateinput = (str="")=>{
    return str.length >= 0 ? true : false
}
export const startCal=(str="")=>{
    return calculator(...str.split(',').map(Number))
}
