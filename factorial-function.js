// function factorial(i){

//     if(i==1){
//         return 1;
//     }

//     return i * factorial(--i);
// }

// console.log(factorial(4))






function clientsInput(i){

    if(i==1){
        return 1;
    }

    return i * clientsInput(--i);
}

console.log(clientsInput(5))





