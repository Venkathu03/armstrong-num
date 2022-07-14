//armstrong

var x=342;
console.log('x=',x);
var sum=0;
var n=x;

while(n>0){
    let remainder = n%10;
    sum = sum + (remainder*remainder*remainder);
    n=n-remainder;
    n=n/10;
    console.log('sum=',sum);
}
if(sum==x){
    console.log('is an armstrong number');
}
else{
    console.log('is not armstrong number');
}