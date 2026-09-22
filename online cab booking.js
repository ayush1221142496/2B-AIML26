class Vehicle {
	constructor(vehicleNo, driverName, distance) {
		this.vehicleNo = vehicleNo;
		this.driverName = driverName;
		this.distance = distance;
	}

	calculateFare() {
		return 0;
	}

	static displayPlatformName() {
		console.log("Booking platform: QuickCab");
	}
}

class Car extends Vehicle {
	constructor(vehicleNo, driverName, distance) {
		super(vehicleNo, driverName, distance);
	}

	calculateFare() {
		return this.distance * 15;
	}
}

class Bike extends Vehicle {
	constructor(vehicleNo, driverName, distance) {
		super(vehicleNo, driverName, distance);
	}

	calculateFare() {
		return this.distance * 8;
	}
}

Vehicle.displayPlatformName();

const car = new Car("CAR101", "Amit", 12);
const bike = new Bike("BIKE202", "Riya", 10);

console.log(`Car fare for ${car.distance} km: Rs. ${car.calculateFare()}`);
console.log(`Bike fare for ${bike.distance} km: Rs. ${bike.calculateFare()}`);