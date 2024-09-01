// Union and Intersection Types
// Union Type: A value can be one of several types
type Vehicle = {
    wheels: number;
    fuel: string;
};

type Boat = {
    propellers: number;
    fuel: string;
};

// Union of Vehicle and Boat means it can be either one of them
type Transport = Vehicle | Boat;

let myCar: Transport = {
    wheels: 4,
    fuel: 'gasoline'
};

let myBoat: Transport = {
    propellers: 2,
    fuel: 'diesel'
};

// Intersection Type: A value must satisfy both types
type AmphibiousVehicle = Vehicle & Boat;

let myAmphibiousVehicle: AmphibiousVehicle = {
    wheels: 4,
    propellers: 2,
    fuel: 'electric'
};

/*
 * Union Type Explanation:
 * ------------------------
 * - The `Transport` type can be either a `Vehicle` or a `Boat`.
 * - `myCar` is valid because it matches the `Vehicle` structure.
 * - `myBoat` is valid because it matches the `Boat` structure.
 *
 * Intersection Type Explanation:
 * -------------------------------
 * - The `AmphibiousVehicle` type must satisfy both `Vehicle` and `Boat`.
 * - `myAmphibiousVehicle` has properties from both `Vehicle` (wheels) and `Boat` (propellers),
 *   and a common property `fuel`, making it valid.
 */

// Function using Union Type
function getFuelType(transport: Transport): string {
    return transport.fuel;
}

// Function using Intersection Type
function getTransportDetails(transport: AmphibiousVehicle): string {
    return `This vehicle has ${transport.wheels} wheels and ${transport.propellers} propellers, running on ${transport.fuel}.`;
}

console.log(getFuelType(myCar)); // Output: gasoline
console.log(getFuelType(myBoat)); // Output: diesel
console.log(getTransportDetails(myAmphibiousVehicle));
// Output: This vehicle has 4 wheels and 2 propellers, running on electric.
