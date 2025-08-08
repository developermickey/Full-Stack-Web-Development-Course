// Constructor Funcation

function Pizza(toppingsPara, sizePara, crustPara){
    this.toppings = toppingsPara
    this.size = sizePara
    this.crust = crustPara
}


let order1 = new Pizza(["Cheese", "Pepperoni"], "Large", "Thin");

console.log(order1);