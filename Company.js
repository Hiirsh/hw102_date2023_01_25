class Company {
  constructor() {
    this._employees = []
  }

  getEmployees() {
    return [...this._employees]
  }

  addEmployee(employee) {
    const index = this._employees.findIndex(e => e.id === employee.id)
    if (index < 0) {
      this._employees.push(employee)
    }
    return index < 0
  }

  removeEmployee(id) {
    const index = this._employees.findIndex(e => e.id === id)
    if (index >= 0) {
      this._employees.splice(index, 1)
    }
    return index >= 0;
  }

  totalSalary() {
    return this._employees.reduce((acc, e) => acc + e.salary, 0)
  }

  avSalary() {
    return (this.totalSalary() / this.#emplNum()).toFixed(1)
  }
  minSalary() {
    return Math.min(...this._employees.map(e => e.salary))
  }

  maxSalary() {
    return Math.max(...this._employees.map(e => e.salary))
  }

  avAge() {
    return this._employees.reduce((acc, e) => acc + e.age, 0) / this.#emplNum()
  }

  minAge() {
    return Math.min(...this._employees.map(e => e.age))
  }

  maxAge() {
    return Math.max(...this._employees.map(e => e.age)).toFixed(1)
  }

  getStatistics() {
    return {
      minAge: this.minAge(),
      maxAge: this.maxAge(),
      avAge: this.avAge(),
      totalSalary: this.totalSalary(),
      avSalary: this.avSalary(),
      minSalary: this.minSalary(),
      maxSalary: this.maxSalary()
    }
  }

  #emplNum() {
    return this._employees.length
  }
}