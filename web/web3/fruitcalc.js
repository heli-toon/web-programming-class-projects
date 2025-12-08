function totalPrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const fruitElement = document.getElementById("fruit");
    const pricePerUnit = parseInt(fruitElement.value); 

    const total = quantity * pricePerUnit;

    const fruitName = fruitElement.options[fruitElement.selectedIndex].text;

    document.getElementById("price-result").innerHTML = `The total price of ${quantity} ${fruitName} is ${total} Ghana CD`;
}