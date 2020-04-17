export module userDetails {
    export class data {
        constructor() {
            
        }
        public sample(){}
    }
    export class Address extends data {
        constructor(parameters) {
            super()
        }
    }

    class Employee extends Address {
        constructor(parameters) {
            super("basic info");
        }
    }

    let emp1 = new Employee(10);
    emp1.sample()
    let friends : [number,number]
    friends = [1,2]
    let friends1 : Array< string | number | number[] >;
    friends1 = ["data", "data1", "" , "", 1,[1,2,3]]
    let friends2 : number[] = [1,2,3,4,5,6];
}