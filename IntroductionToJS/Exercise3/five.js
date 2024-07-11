// Break statement

function findFirstMultiple(n,multiple){
    for(i=1;i<n;i++){
        if(i%multiple==0){
            console.log(i)
            break;
        }
        else{
            console.log(i)
        }
    }
}

findFirstMultiple(20,5)