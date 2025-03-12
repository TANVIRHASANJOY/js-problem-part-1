function oddAverage (numbers){
    let odd=[];
    for(let number of numbers){
        if(number%2 !==0){
            odd.push(number);
         

        }
    }
    let sum=0;
for(const num of odd){
    sum=sum+num;

}
const count=odd.length;
const avg=sum/count;
return avg;
}
const number=[324,6,7,89,0,99,43,2,1];
let result=oddAverage(number);
console.log(result);