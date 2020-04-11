
function data(){

}
function run(){

}
class Engine {
    private color = "red";
    protected engineNumber = "xyz";
    constructor(public engineType){
        console.log(engineType);
        
    }
    detailedInfo(){
        console.log(this.engineType);
        run();
    }
}
class Bike extends Engine{
    constructor(engineType, private transmission, protected chasis) {
        super(engineType)
        
    }
    bikeMethod(){
        this.engineType;
        console.log(this.engineNumber);
    }
}

let motorBike = new Bike("oil cooled engine", { "clutch": "clutchtype1", "exhaust": "underbelly silencer" },"v shape");
