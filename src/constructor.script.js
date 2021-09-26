function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(){
        this.Value +=  prompt("Enter a New Number", 0);
    }
    
}