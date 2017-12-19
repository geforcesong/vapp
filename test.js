
function b() {
    return new Promise((resolve, reject) => {
        resolve(5);
    });
}

function test() {
    return b().then((d)=>{
        console.log(d);
        return 77;
    });
}

test().then(d => {
    console.log(d);
})