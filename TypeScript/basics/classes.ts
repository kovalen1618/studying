class Employee {
    // Variables within a class are known as properties
    #id: number;
    // Using the hash (#) symbol is akin to making the property private
    protected name: string;
    // TODO Protected - needs more info
    address: string;

    // Constructors are responsible for creating instances of a class
    constructor(id: number, name: string, address: string) {
        this.#id = id;
        // Be sure to add the hash to your 
        // private constructor properties too
        this.name = name;
        this.address = address;
    };

    // Functions within a class are that Class's methods
    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    };
};

// Create an instance of the Employee class with 
// specific values for the Class properties
let john = new Employee(1, 'John', 'Highway 71');
// Call the instantiated class of john's methods
let johnAddress = john.getNameWithAddress();

// Private properties cannot be accessed outside of a class
// let privateId = john.id;

// Protected properties cannot be accessed outside of a class
// let protectedName = john.name;

console.log(john);
console.log(johnAddress);


// The 'extends' keyword allows for a new class to inherit 
// properties and methods from a parent class
class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
        // 'super' is a required keyword when inheriting properties
    };

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`
    }
};

// TODO - Continue from https://youtu.be/3qBXWUpoPHo?t=6383