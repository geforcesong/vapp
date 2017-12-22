class MyPromise {
    constructor(fn) {
        this.value = null;
        this.callback = null;
        fn(this.resolve);
    }

    resolve() {
        this.callback(this.value);
    }

    then(onFulfilled) {
        this.callback = onFulfilled;
    }
}

function test() {
    return new MyPromise((resolve) => {
        setTimeout(function () {
            console.log(100);
        }, 1000);
    });
}

test().then((d)=>{
    console.log('done');
});