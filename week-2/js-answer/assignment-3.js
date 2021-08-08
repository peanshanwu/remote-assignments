function avg(data){
    // your code here
    
    let total = 0;
    let number = data.products.length;
    let average = 0;

    for (let i = 0; i < number; i++) {
        total += data.products[i].price;
    };

    average = total / number;
    console.log(average);
    return average;
}


avg({
    size:3,
    products:[
        {name:"Product 1", price:100},
        {name:"Product 2", price:700},
        {name:"Product 3", price:250}
    ]
}); // show the average price of all products