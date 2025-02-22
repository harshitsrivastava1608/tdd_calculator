import { calculator } from "./calculator.js"
export const validateinput = (str="")=>{
    return str.length >= 0 ? true : false
}
export const splitInput=(str='')=>{
    const arrayOfInput=str.split(/[\n,]/).map(Number)
    return arrayOfInput  
}
export const checkNegative=(arr=[])=>{
    return arr.filter((num)=>num<0).length<=0
}
export const startCal=(str="")=>{
    const arrayOfInput=str.split(/[\n,]/).map(Number)
    console.log(arrayOfInput)
    return calculator(...arrayOfInput)
}
(function(){
    
    try{
        console.log(startCal(process.argv[2]))
    }catch(err){
        console.log(err)
    }
})()
