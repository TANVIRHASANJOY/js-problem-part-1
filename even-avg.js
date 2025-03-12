function evenAverage(numbers){
    let even=[];
    let sum=0;
    for(let number of numbers){
        if(number%2===0){
            even.push(number);

        }
    }
    for(let num of even){
        sum=sum+num;
    }
    let count =even.length;
    let average=sum/count;
    return average;

}
let value=[32,68,7,6,45,8,,90,0,11,0]
let result=evenAverage(value)
console.log(result)