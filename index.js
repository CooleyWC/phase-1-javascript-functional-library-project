function myEach(collection, cb){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }
    
    for(let element of array){
        cb(element)
    }
    return collection;
}

// myEach([1,2,3], alert)

// myEach({one: 'hi', two: 'hi twice', three: 'hi thrice'}, alert);

function myMap(collection, cb){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }

    let newArray = []
    for(let element of array){
        newArray.push(cb(element));
    }
    // console.log(newArray)
    return newArray

    // return array.map(element=>cb(element));
    
    return collection;
}

myMap([1, 2, 3], function(num){ return num * 10; });

function myReduce(collection, cb, acc){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }

    if(acc===undefined){
        acc=array[0];
        array.shift();
        // console.log(array)
    }

    for(let element of array){
        acc = cb(acc, element)
    }
return acc
};

// myReduce([1, 2, 3, 4], function(acc, val, collection) { return acc + (val*3); });
// myReduce({one: 1, two: 2, three: 3, four: 4}, function(acc, val, collection) { return acc + (val*3); });


function myFind(collection, predicate){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }

    let found = undefined
    for(let element of array){
        // console.log(element)
        if(predicate(element)=== true){
            found = element;
            break;
        }
    }
    return found
}

function myFilter(collection, predicate){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }

    let newArray = [];
    for(let element of array){
        if(predicate(element)===true){
            newArray.push(element);
        }
    }
    // console.log(newArray)
    return newArray

}

function mySize(collection){
    let array;

    if(Array.isArray(collection)){
        array = [...collection]
    } else if(typeof collection==='object') {
        array = Object.values(collection);
    } else {
        console.log('error')
    }
    // console.log(array.length)
    return array.length
}

function myFirst(collection, n=0){
    let array = [...collection];
    
    let newResult = 0;
    if(n === 0){
        newResult= array[0]
    } else {
        newResult = array.slice(0, n)
    }

    return newResult;
}

function myLast(collection, n=0){
    let array= [...collection];

    let newResult = 0;
    if(n === 0){
        newResult= array[array.length-1]
    } else {
        newResult = array.slice(-n)
    }
    return newResult

}

function myKeys(obj){
    let newArray = [];
    for(let key in obj){
        newArray.push(key);
    }
    return newArray
}

function myValues(obj){
    let newArray = [];

    for(let key in obj){
        newArray.push(obj[key])
    }
    return newArray
}