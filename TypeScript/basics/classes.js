"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // Constructors are responsible for creating instances of a class
    constructor(id, name, address) {
        // Variables within a class are known as properties
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        // Be sure to add the hash to your 
        // private constructor properties too
        this.name = name;
        this.address = address;
    }
    ;
    // Functions within a class are that Class's methods
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    ;
}
_Employee_id = new WeakMap();
;
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
    constructor(id, name, address) {
        super(id, name, address);
        // 'super' is a required keyword when inheriting properties
    }
    ;
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
;
