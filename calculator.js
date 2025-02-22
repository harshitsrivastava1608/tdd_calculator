export const getNegatives=(arr=[])=>{
    return arr.filter((num)=>num<0)
}
export const calculator=(...nums)=>{
    try{
        const arr= getNegatives(nums)
        if(arr.length>0){
         throw new Error(`Negatives not allowed ${arr}`)
        }
         let sum=0
         for(let n of nums){
            sum=add(sum,n)
         }
             
         return sum
    }catch(err){
        console.error(err.message)
    }
  
}
function add(sum,n){
    return sum+n
}