let calculator = {
    sum(){
        return this.a + this.b ;
    },
    multi(){
        return this.a*this.b ;
    },
    read(){
        this.a = +prompt("Enter First Number");
        this.b = +prompt("Enter 2nd Number");
    },
};
calculator.read();
alert(calculator.sum());
alert(calculator.multi());