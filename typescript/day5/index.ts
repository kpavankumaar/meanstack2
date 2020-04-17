interface member {
    name: string; 
    age: number;
    education?: string;
    state(num1: number, num2:number):number;
    
}
interface data1{
    dataProperty:string
}
interface data2 extends data1{
    dataProperty2: string
}
interface MemberDetailsConstructor{
    new (phoneNumber: number);
}
function createMemberDetails(constructor: MemberDetailsConstructor, phno: number){
    return new constructor(phno);
}
class MemeberDetails implements member, data2{
    name
    age
    education
    dataProperty
    dataProperty2
    state(a:number,b:number){
        return a +b;
    }
    constructor(phNumber){
        console.log(phNumber);
    }
    
}
let member = createMemberDetails(MemeberDetails,99999999);



new MemeberDetails(9666698000)

function recieveData (obj:member){
    console.log(obj.name, obj);
}
recieveData({name:"srk",age: 25, education:"btech"});


function runTheCode(obj:string):string{
    return "10";
}

runTheCode("name")
class Engine {
    private color = "red";
    protected engineNumber = "xyz";
    constructor(public engineType){
        console.log(engineType);
        
    }
    detailedInfo(){
        console.log(this.engineType);
        
    }
    
    set colorValue(v : string) {
        this.color = v;
    }
    
    public get getColorValue() : string {
        return this.color;
    }
    
    
}
let carEngine = new Engine("turbo engine");
carEngine.colorValue = "green";
let colorUpdate = carEngine.getColorValue;
console.log(colorUpdate);
class Bike extends Engine{
    constructor(engineType, private transmission, protected chasis) {
        super(engineType)
        
    }
    bikeMethod(){
        this.engineType;
        //this.color;
        this.engineNumber;
        console.log(this.engineNumber);
    }
}

let motorBike = new Bike("oil cooled engine", { "clutch": "clutchtype1", "exhaust": "underbelly silencer" },"v shape");

motorBike.colorValue = "blue";
let motorBikecolorUpdate = motorBike.getColorValue;
console.log(motorBikecolorUpdate);

