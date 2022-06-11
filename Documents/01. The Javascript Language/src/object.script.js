const calculator = {
    read() {
        this.num1 = prompt("Enter First Number", 0 );
        this.num2 = prompt("Enter Second NUmber", 0);
    },

    sum() {
        return Number(this.num1) + Number(this.num2);
    },

    mul() {
        return Number(this.num1 * this.num2);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());