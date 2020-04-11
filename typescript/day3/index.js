class Engine {
    constructor(coolantType, transmission) {
        this.transmission = transmission;
        this.coolant = coolantType;
        this.transmission = transmission;
    }
    data() {
        console.log(this.coolant);
    }
}
function data() { }
let bikeEngine = new Engine("oil cooled", "Automatic");
bikeEngine.data();
