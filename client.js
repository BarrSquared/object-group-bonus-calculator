const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
//function to take in employee obj
//return new obj with bonusPercentage, totalCompensation, totalBonus

function processEmpBonus (obj) {
  let employeeSal = parseInt(empObj.annualSalary);
  let processedBonuses = {};
  
function bonusPercentCal(empObj) {

  let bonusPercentage = 0;

  //star review
  for (let employee of empObj) {
    if (employee.reviewRating <= 2) {
      //no bonus
    } else if (employee.reviewRating === 3) {
      bonusPercentage = 0.04;
    } else if (employee.reviewRating === 4) {
      bonusPercentage = 0.06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = 0.1;
    }
  }
  //loop for employee number, 4 digits for 5%
  for (let emp of empObj) {
    if (emp.employeeNumber.length === 4) {
      bonusPercentage = bonusPercentage + (employeeSal * 0.05)
    }
    //loop for the employee salary, if (salary > $65k) - 1% from salary
    for (let input of empObj) {
      if (empObj.employeeSal > 65000) {
        bonusPercentage = bonusPercentage - 0.01;
      }
    }
    // bonus percentage set to 13% max, 0% as bottom.
    if (bonusPercentage > 0.13) {
      bonusPercentage = 0.13;
    } else if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }
  }
  return bonusPercentage;
} // end of bonusPercentage
let totalBonus = bonusPercentCal * employeeSal;
let totalCompensation = totalBonus + employeeSal;




}// end of processEmpBonus

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(processEmpBonus(employees));
