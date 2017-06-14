// Assignment: Given the code (JS) below, re-write it using all TypeScript features.

// CODE TO CHANGE //

myNum = 5;
myString = "Hello Universe";
myArr = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable = "Hey";
anythingVariable = 25; 
arrayOne = [true, false, true, true]; 
arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
    throw new Error('Error message');
}

// END CODE TO CHANGE //

///////////////////
// ANSWER BELOW: //
///////////////////

var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: Object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: boolean[] = [true, false, true, true]; 
var arrayTwo: any[] = [1, 'abc', true, 2];
const myObj2: Object = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number;
    _priv: number;

    constructor(val: number) {
        this.val = val;
    }

    doSomething() {
        this._priv = 10;
    };
}

let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World");
}
function sendingErrors(message: string): never {
    throw new Error(message);
}