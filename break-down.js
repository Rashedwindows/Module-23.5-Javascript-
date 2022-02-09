/* const products =[

    {name : "iphone 11", price : "132000"},
    {name : "samsung galaxy s21 ultra phone", price : "125000"},
    {name : "dell laptop", price : "55000"},
    {name : "asus ipad laptop", price : "80000"},
    {name : "smart watch samsung", price : "4000"},
    {name : "apple watch", price : "62000"},
    {name : "one-plus phone", price : "42000"},
    {name : "apple macbook", price : "145000"},
];

for(const product of products){


    if(product.price<5000){

        break;
    }

    console.log(product)
}
    */


// continue(skip)



const products =[

    {name : "iphone 11", price : "132000"},
    {name : "samsung galaxy s21 ultra phone", price : "125000"},
    {name : "dell laptop", price : "55000"},
    {name : "asus ipad laptop", price : "80000"},
    {name : "smart watch samsung", price : "4000"},
    {name : "apple watch", price : "62000"},
    {name : "one-plus phone", price : "42000"},
    {name : "apple macbook", price : "145000"},
];

for(const product of products){


    if(product.price<10000){

        continue;
    }

    console.log(product)

}




console.log("after the loop") 