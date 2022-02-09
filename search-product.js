// declare of product array....

const products =[

    {name : "iphone 11", price : "132000"},
    {name : "samsung galaxy s21 ultra phone", price : "125000"},
    {name : "dell laptop", price : "55000"},
    {name : "asus ipad laptop", price : "80000"},
    {name : "smart watch samsung", price : "25000"},
    {name : "apple watch", price : "62000"},
    {name : "one-plus phone", price : "42000"},
    {name : "apple macbook", price : "145000"},
];

// create of searchproduct function
function searchProducts(products,searchText){

    const result = [];
    for(const product of products){

        if(product.name.includes(searchText)){
            result.push(product);
        }
    }

    return result;
}

// in 31 lines maeans: const matchedProduct = function-name(parameter1,"product name")

const matchedProduct = searchProducts(products,"laptop");

console.log(matchedProduct)