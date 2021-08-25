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
      annualSalary: '63507',
      reviewRating: 4
    },
    {
      name: 'Scout',
      employeeNumber: '6243',
      annualSalary: '7475',
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

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.table(employees);

// 1 - Loop over all employees
for(let employee of employees) {
    // console.log(employee);
    let employeeOutput = processEmployeeBonus(employee);
    console.log(employeeOutput);
}

// 2 - Create a function that takes in an obj, returns an obj
/**
 * 
 * @param {object} employeeInput Employee to process
 * @return{object} Object with bonus information
 */
function processEmployeeBonus(employeeInput) {
    employeeInput.bonusPercentage = 200;
    const salary = parseInt(employeeInput.annualSalary);
    if(employeeInput.reviewRating <= 2){
        employeeInput.bonusPercentage = 0;
    } else if(employeeInput.reviewRating === 3){
        employeeInput.bonusPercentage = 0.04;
    } else if(employeeInput.reviewRating === 4){
        employeeInput.bonusPercentage = 0.06;
    } else if(employeeInput.reviewRating === 5){
        employeeInput.bonusPercentage = 0.1;
    } else {
        //do nothing
    }
    if(employeeInput.employeeNumber.length === 4) {
        employeeInput.bonusPercentage += 0.05;
    }
    if( salary > 65000) {
        employeeInput.bonusPercentage -= 0.01;
    }
    if(employeeInput.bonusPercentage < 0) {
        employeeInput.bonusPercentage = 0;
    } else if(employeeInput.bonusPercentage > 0.13) {
        employeeInput.bonusPercentage = 0.13;
    }
    employeeInput.totalBonus = salary * 
                                employeeInput.bonusPercentage;
    employeeInput.totalBonus = employeeInput.totalBonus.toFixed(0);
    employeeInput.totalCompensation = salary + parseInt(employeeInput.totalBonus);

    return employeeInput;
} // end processEmployeeBonus function

// 3 - Calculate the bonus


// 4 - Move that calculation into a separate funciton
// 5 - Write some tests

