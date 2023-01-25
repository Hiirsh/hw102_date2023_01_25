class Employee extends Person {
  constructor(id, firstName, lastName, birthDate, salary) {
      super(id, firstName, lastName, birthDate)
      this._salary = salary
  }

  get salary() {
      return this._salary
  }

  set salary(value) {
      if (value > this._salary) {
          this._salary = value
      }
  }
}