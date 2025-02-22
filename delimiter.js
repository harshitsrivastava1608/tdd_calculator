export const checkDelimiter=(s)=>{
   
    const regex=/^\/\/([^\n]*)\n/
   
    return s.match(regex)?s.match(regex)[1]:null;
}

