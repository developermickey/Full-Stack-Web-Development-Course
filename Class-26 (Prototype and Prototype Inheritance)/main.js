function Car(modelPara, yearPara, colorPara) {
        this.model = modelPara;
        this.year = yearPara;
        this.color = colorPara;
}


Car.prototype.displayInfo = function() {
    console.log(`This is a ${this.color} ${this.year} and ${this.modol}`)
}


let car1 = new Car("Dize", 2018, "White");

console.log(car1);
console.log(car1.displayInfo());