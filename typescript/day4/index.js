let motorBike = new Bike("oil cooled engine", { "clutch": "clutchtype1", "exhaust": "underbelly silencer" }, "v shape");
class Engine {
    constructor(engineType) {
        this.engineType = engineType;
        this.color = "red";
        this.engineNumber = "xyz";
        console.log(engineType);
    }
    detailedInfo() {
        console.log(this.engineType);
    }
}
class Bike extends Engine {
    constructor(engineType, transmission, chasis) {
        super(engineType);
        this.transmission = transmission;
        this.chasis = chasis;
    }
    bikeMethod() {
        this.engineType;
        console.log(this.engineNumber);
    }
}
