function sum() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  };
  return ans; 
};

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

function sum2(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count += args[i];
  };
  return count;
};


// console.log(sum2(1, 2, 3, 4) === 10);
// console.log(sum2(1, 2, 3, 4, 5) === 15);





Function.prototype.myBind = function (ctx, ...bindArgs) { //says, ctx=pavlov, bindArgs = 
  let that = this;
  return function (...callArgs) {
    return that.apply(ctx, bindArgs.concat(callArgs));

  }
};



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

markov.says.apply(pavlov)

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");

markov.says.myBind(pavlov, "meow", "Kush")();

markov.says.myBind(pavlov)("meow", "a tree");

markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");



// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// };

// console.log(sumThree(4, 20, 6)); // == 30

// // // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// console.log(f1 = f1(4)); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30


function curriedSum(numArgs) {
  let numbers = [];
  
  function _curriedSum (num1) {
    numbers.push(num1);

    if (numbers.length === numArgs) {
      let count = 0;

      for (let i = 0; i < numbers.length; i++){
        count += numbers[i];
      }
 
      return count;
    }
    else {
      return _curriedSum;
    }

  } 
  return _curriedSum;
};

// console.log(curriedSum(3)(4)(20)(6));



///es6 syntax (mycurry supposed to do the same thing as .curry)
Function.prototype.myCurry1 = function (numArgs) {
  const arr = [];
  const _curryFn = (arg) => {
    arr.push(arg);

    if (arr.length === numArgs) {
      return this(...arr);
    }
    else {
      return _curryFn;
    }
    
  }
  return _curryFn;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


// apply
Function.prototype.myCurry2 = function (numArgs) {
  const arr = [];
  let that = this
   function _curryFn(arg){
    arr.push(arg);

    if (arr.length === numArgs) {
      return that.call(null, ...arr);
    }
    else {
      return _curryFn;
    }

  }
  return _curryFn;
};


// spread
Function.prototype.myCurry3 = function (numArgs) {
  const argArray = [];
  let that = this;
  function _curryFn(arg) {
    argArray.push(arg);

    if (argArray.length === numArgs) {
      return that(...argArray);
    }
    else {
      return _curryFn;
    }
  }
    return _curryFn;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.myCurry2(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// // or more briefly:
console.log(sumThree.myCurry2(3)(4)(20)(6)); // == 30
