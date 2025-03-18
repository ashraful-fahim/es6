//async function
async function orderFood() {
    const food = await cookFood();

    console.log('Food is ready!');
    console.log(food);
}

//async operation
function cookFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Delicious Food!");
        }, 2000);
    });
}


orderFood();