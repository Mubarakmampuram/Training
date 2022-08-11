function Calculator(){
    this.read = function(){
         this.a = +prompt("Enter Number 1");
         this.b = +prompt("Enter Number 2");
     },
     this.sum = function(){
         return this.a + this.b;
     },
     this.multi = function(){
         return this.a * this.b;
     }
 };
 let task1 = new Calculator();
 
 task1.read();
 alert("sum = "+ task1.sum());
 alert("multi = " + task1.multi());