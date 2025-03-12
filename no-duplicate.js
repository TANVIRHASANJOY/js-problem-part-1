function noDuplicate(array){
    let unique= [];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
return unique;
}
let uniqueArray=['tanvir','hasan','joy','joy','robin','hasan'];
const unique1=noDuplicate(uniqueArray);
console.log(unique1);