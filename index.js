// Write your solution in this file!

let employee = {
  name: "Lasha",
  streetAddress: "16035 E Easter"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
    [key]: value
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
  const employee2 = {...employee}
  delete employee2[key]
  return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}