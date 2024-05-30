// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, modelName: string, ...additionalInfo: any[]): object {
    let car: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    additionalInfo.forEach(info => {
        let key = Object.keys(info)[0];
        let value = info[key];
        car[key] = value;
    });

    return car;
}

let carInfo = createCar("Toyota", "Camry", { color: "red" }, { year: 2022 });
console.log(carInfo);

let carInfo2 = createCar("Toyota", "Camry");
console.log(carInfo2);
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
console.log(createCar("Toyota", "Corolla", ["color", "red"], ["year", 2020])); // incorrect for array as additional input
console.log(createCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

// teacher's approach - slightly modified
type KeyValueArray = [string, any];
type KeyValueObject = { [key: string]: string | number };

function make_car(manufacturer: string, model: string, ...options: (KeyValueArray | KeyValueObject)[]): KeyValueObject {
    let car: KeyValueObject = { manufacturer, model };
    options.forEach(option => {
        if (Array.isArray(option)) {
            const [key, value] = option;
            car[key] = value;
        } else {
            Object.assign(car, option);
        }
    });
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Toyota", "Camry", {"color": "red"}, { "year": 2022 }));
