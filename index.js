let employee = {
    name : "Maish",
    streetAddress : "Ring Road"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
    ...employee, [key]:value
    };
}
let newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Peter"
);

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}
const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Peter");

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee; 
    return newEmployee; 
}
const newlyEmployed = deleteFromEmployeeByKey(employee, 'age');

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
const deletedKey = destructivelyDeleteFromEmployeeByKey(
    employee,"name"
);