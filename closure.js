/* A closure is a function that has access to its own scope, the outer function’s variables, and global variables, even after the outer function has finished executing. This enables functions to “remember” their environment.*/

function outer(){
    let outerVar = "I'm in the outer scope!";
    function inner(){
        console.log(outerVar);
    }
    // return inner;
}

const closure = outer();
closure();