export const calculator=(...nums)=>{
    let sum=0
    for(let n of nums)
        sum+=n
    console.log(sum)
    return sum
}