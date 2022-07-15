
Function.prototype.inherits1 = function (BaseClass) {
  function Surrogate() { }
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject() {
 }
 MovingObject.prototype.test = function (){
   console.log("hello");
 }
 
function Ship() { }
Ship.inherits1(MovingObject);

function Asteroid() { }
Asteroid.inherits1(MovingObject);

Asteroid.prototype.newtest = function () {
  console.log("asteroid hello")
}

let ship = new Ship();
let asteroid = new Asteroid();
let newobj = new MovingObject();

ship.test();
asteroid.test();
newobj.newtest();


























