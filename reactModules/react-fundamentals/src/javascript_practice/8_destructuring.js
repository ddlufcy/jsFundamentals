const testObj = {
    string: "its a string",
    num: 23,
    bool: true,
    obj: {key: 'waluigi'},
    arr: [1,2,3,4, undefined],
    nan: NaN
}

let {string, obj, num, nan} = testObj;

let newObj = {test: 'blah', 'newThang': 'other thing', ...testObj};
console.log(newObj);