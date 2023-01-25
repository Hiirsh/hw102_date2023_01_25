class Person {
  constructor(id, firstName, lastName, birthDate) {
      this._id = id
      this._firstName = firstName
      this._lastName = lastName
      this._birthDate = new Date(birthDate)
  }

  get id() {
      return this._id
  }

  get lastName() {
      return this._lastName
  }

  set lastName(lastName) {
      this._lastName = lastName
  }


  get firstName() {
      return this._firstName
  }

  set firstName(value) {
      this._firstName = value
  }

  get birthDate() {
      return this._birthDate;
  }

  get age() {
      const ageDiffMs = (new Date()) - this.birthDate
      const ageDate = new Date(ageDiffMs)
      return (ageDate.getUTCFullYear() - 1970)
  }

  fullName = function () {
      return `${this._firstName} ${this._lastName}`
  }
}