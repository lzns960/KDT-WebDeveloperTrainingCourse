// @ts-check
/*
// 생성자 함수 선언
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  // 메소드 정의
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
  this.showSpec = function () {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color}입니다. `
    );
  };
}
class ElecCar extends Car {
  // ElecCAr는 Car라는 클래스를 확장한 개념이다.라는 선언
  constructor(brand, color, fuel) {
    super(brand, color); // 부모 생성자를 그대로 가지고 오는 것
    this.fuel = fuel;
		this.drive() {
			console.log(
				`${brand}의 ${color}색 자동차가  ${this.fuel}의 힘으로 주행 중입니다.`
			);
		};
		this.showSpec() {
			super.showSpec(); 
			console.log(`그리고 이 차는 ${fuel} 힘으로 주행 합니다.`);
		};
  };
  

  /*
  // 메소드 추가
  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 주행합니다.`);
  }

}

const hyundai = new Car('hyundai', 'skyblue');
const tesla = new ElecCar('tesla', 'red', 'electricity');

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
console.log(tesla.brand, tesla.color, tesla.fuel); // 생성자 접근
/* tesla.showFuel(); // 따로 작성한 메소드도 정상 작동 
tesla.drive(); // ✅ 부모요소에 있던 메소드를 가지고 왔는지

/* class Car {
	constructor(brand, color) {
    this.brand = brand;
		this.color = color;
	}

	drive() {
		console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
	}
}

const hyundai = new Car('hyundai', 'skyblue');
const porsche = new Car('porsche', 'black');
const toyota = new Car('toyota', 'silver');

console.log(hyundai.brand, hyundai.color);
porsche.drive();
toyota.drive();
*/
/*
function Car (brand, color){
	this.brand = brand;
	this.color = color;
	
	this.drive() = function(){
		console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
	};
}

function ElecCar(brand, color, fuel){
	Car.call(this, brand, color); //super는 자동으로 this를 가져와주기때문에 넣을 필요 없는 것이고, call은 자동으로 안가져와주기 때문에 하나하나 넣는것이다. 
	this.fuel = fuel;
	this.drive = function() {
		console.log( 
			`${brand}의 ${color}색 자동차가  ${this.fuel}의 힘으로 주행 중입니다.`
		);
	}
}
ElecCar.prototype = Object.create(Car.prototype); 
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar('tesla', 'red', 'elec');
tesla.drive();
*/

//실습
// Class 선언
class Shape {
  // 생성자 전달
  constructor(width, height) {
    this.width = width;
    this.height = height;
  } // 메소드 선언
  getArea() {
    return this.width * this.height;
  }
}

class Rectange extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

const shape = new Shape(5, 5);
const rectange = new Rectange(4, 4);
const triangle = new Triangle(4, 4);
const circle = new Circle(4, 4, 2);

console.log(
  shape.getArea(),
  rectange.getArea(),
  triangle.getArea(),
  circle.getArea()
);
