function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(name){
    return function namedFunction(){};
}

function returnsAnAnonymousFunction(){
    return function (){};

}