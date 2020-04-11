class Engine {
    coolant;
    constructor(coolantType, public transmission) {
        this.coolant = coolantType;
        this.transmission = transmission
    }
    data(){
       console.log(this.coolant, this.transmission);

    }
}
function data() { }

let bikeEngine = new Engine("oil cooled", "Automatic");
bikeEngine.data();

