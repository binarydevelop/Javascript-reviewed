let ladder = {
    step: 0,
    up() {
       this.step++;
       console.log(this)
       return this;
    },
    down() {
       this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

ladder.up().down().up().showStep(); // Why this would work is because we are returning object reference from 
// previous function which operated on it. 