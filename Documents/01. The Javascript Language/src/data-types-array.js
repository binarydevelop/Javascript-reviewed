// Sum input numbers
function sumInput(){ 
    let sum = 0;
    while(true){
        let input = prompt('Enter Your Number or string to cancel', 0);
        if(isFinite(input)){
            sum += Number(input)
        }
        else{
            alert(sum);
            break;
        }
    }
}
sumInput();

// maximal sub-array