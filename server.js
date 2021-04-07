const inquirer = require('inquirer');
const db = require('./db')

//ask questions

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      name: 'firstQ',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View All Employees', 
        'View All Departments',
        'View all Roles',
        'Add Employee',
        'Add department',
        'Add roles',
        'Update Employee Role'      
      ]
    }
  ])
  
  if (answers.firstQ === 'View All Employees'){
    viewAllEmployees()
  } else if(answers.firstQ === 'View All Departments'){
    byDepartment()
  } else if(answers.firstQ === 'View all Roles'){
    viewRoles()
  } else if(answers.firstQ === 'Add Employee'){
    addEmployee()
  } else if(answers.firstQ === 'Add department'){
    addDepartment()
  } else if(answers.firstQ === 'Add roles'){
    addRoles()
  } else if (answers.firstQ === 'Update Employee Role'){
    updateEmployee()
  } else{
    console.log('Failed')
  }
};

async function viewAllEmployees(){
 const employees = await db.findAllEmployees();
 console.log(`\n `)
 console.table(employees)
 askQuestions()
};

async function byDepartment(){
  const department = await db.findByDepartment();
  console.log(`\n `)
  console.table(department)
  askQuestions()

};

async function viewRoles(){
  const roles = await db.findRoles();
  console.log(`\n `)
  console.table(roles)
  askQuestions()
};

async function addEmployee(){
  const employees = await db.addEmpDB();
  viewAllEmployees()
  askQuestions()
};

async function addRoles(){
  const roles = await db.addRolesDB();
  viewRoles()
  askQuestions()
};

async function updateEmployee(){
  const update = await db.updateEmpDB();
  askQuestions();
};

async function addDepartment(){
  const addDep = await db.addDepartmentDB();
  console.log(`\n `);
  byDepartment();
  askQuestions();
};



askQuestions()