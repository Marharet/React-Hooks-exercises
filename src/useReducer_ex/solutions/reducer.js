       
function reducer(prevState, action){
    return prevState + action;
};

const res = [1, 2, 3].reduce(reducer);
console.log(res); 