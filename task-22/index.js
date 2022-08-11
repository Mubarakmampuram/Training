let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
};
ladder.up().up().up().showStep().up().down().down().showStep(); //shows 3 and 2