// Continue Statement

function printOddNumbers(n){
    for(i=1;i<n;i++){
        if(i%2!=0){
            console.log(i)    
        }
        else{
            continue;
        }
    }
}
console.log("The odd numbers are,")
printOddNumbers(20);