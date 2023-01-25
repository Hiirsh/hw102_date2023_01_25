//id;firstName;lastName;age

const employeesList = document.getElementById('employeesList')
const personId = document.getElementById('personId')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const salary = document.getElementById('salary')
const stats = document.getElementById('stats')
const employees = [];

const company = new Company()
const state = {
    areStatsShowed: false,
    areEmployeesShowed: false
}

addPerson.onclick = function (e) {
    e.preventDefault()
    const employee = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value);
    if (company.addEmployee(employee) < 0) {
        alert(`Person with id: ${employee.id} exists`);
    }
    personId.value = firstName.value = lastName.value = age.value = '';
    salary.value = 0;
    if (state.areEmployeesShowed) {
        printEmployees(company);
    }
    if (state.areStatsShowed) {
        printStats(employees);
    }
    console.log(company.getEmployees())
}
showEmployees.onclick = function handleemployees(e) {
    if (e) {
        e.preventDefault()
    }
    if (!state.areEmployeesShowed) {
        printEmployees(company);
        state.areEmployeesShowed = true
    }
    else {
        while (employeesList.firstElementChild) {
            employeesList.removeChild(employeesList.firstElementChild);
        }
        state.areEmployeesShowed = false
    }
}

calcStats.onclick = function handleStats(e) {
    if (e) {
        e.preventDefault()
    }
    if (!state.areStatsShowed) {
        printStats(company)
        state.areStatsShowed = true
    } else {
        while (stats.firstElementChild) {
            stats.removeChild(stats.firstElementChild);
        }
        state.areStatsShowed = false
    }
}

function printEmployees(company) {
    const employees = company.getEmployees()
    while (employeesList.firstElementChild) {
        employeesList.removeChild(employeesList.firstElementChild);
    }
    employees.forEach(e => {
        const li = createInfoElement(e.info, 'li');
        employeesList.appendChild(li);
        const deleteButton = document.createElement('button')
        deleteButton.append(document.createTextNode('delete'))
        li.appendChild(deleteButton)
        deleteButton.onpointerdown = function () {
            const note = deleteButton.parentElement
            note.parentElement.removeChild(note)
            employees.splice(employees.indexOf(p), 1)
            if (state.areStatsShowed) {
                printStats(company)
            }
        }
    })
}

function printStats(company) {
    if (company.getEmployees().length) {
        const companyStats = company.getStatistics()
        const divStats = document.createElement('div')
        const statsElements = []
        statsElements[0] = createInfoElement(`Average age: ${companyStats.avAge}`, 'h3');
        statsElements[1] = createInfoElement(`Min age: ${companyStats.minAge}`, 'h3');
        statsElements[2] = createInfoElement(`Max age: ${companyStats.maxAge}`, 'h3');
        statsElements[3] = createInfoElement(`Average salary: ${companyStats.avSalary}`, 'h3');
        statsElements[4] = createInfoElement(`Min salary: ${companyStats.minSalary}`, 'h3');
        statsElements[5] = createInfoElement(`Max salary: ${companyStats.maxSalary}`, 'h3');
        divStats.append(
            ...statsElements
        );
        if (stats.firstElementChild) {
            stats.replaceChild(divStats, stats.firstElementChild);
        } else {
            stats.appendChild(divStats);
        }
    } else {
        stats.appendChild(createInfoElement('No stats', 'h3'));
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}