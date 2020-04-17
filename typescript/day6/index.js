function recieveData(obj) {
    console.log(obj.name, obj);
}
function runTheCode(obj) {
    return "10";
}
runTheCode("name");
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
    set colorValue(v) {
        this.color = v;
    }
    get getColorValue() {
        return this.color;
    }
}
let carEngine = new Engine("turbo engine");
carEngine.colorValue = "green";
let colorUpdate = carEngine.getColorValue;
console.log(colorUpdate);
class Bike extends Engine {
    constructor(engineType, transmission, chasis) {
        super(engineType);
        this.transmission = transmission;
        this.chasis = chasis;
    }
    bikeMethod() {
        this.engineType;
        //this.color;
        this.engineNumber;
        console.log(this.engineNumber);
    }
}
let motorBike = new Bike("oil cooled engine", { "clutch": "clutchtype1", "exhaust": "underbelly silencer" }, "v shape");
motorBike.colorValue = "blue";
let motorBikecolorUpdate = motorBike.getColorValue;
console.log(motorBikecolorUpdate);
