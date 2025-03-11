function leapYear (year){
if(year%100 !==0 && year%4==0){
    return true;
}
else if(year%100===0 && year%400===0){
    return true;
}
return false;
}
let leap=leapYear(2000)
let leap2=leapYear(2100)
console.log(leap,leap2)