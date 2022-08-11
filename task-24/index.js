function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Enter Your Value");
    }
};
let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
alert(accumulator.value);