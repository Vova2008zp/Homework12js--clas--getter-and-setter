'use strict';

function UserConstructor(name, age) {
  this.name = name;
  this.age = age;
}

function UserProto() {
  this.isAdult = function () {
    return this.age >= 18;
  };
}

// const userProto = {
//   isAdult: function () {
//     return this.age >= 18;
//   },
// };

const userProto = new UserProto();

UserConstructor.prototype = userProto;

const user1 = new UserConstructor('Test', 12);
const user2 = new UserConstructor('Test', 19);

// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult() {
//     return this.age >= 18;
//   }
// }

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  asnjddskfdbfkd() {}

  isAdult(legalAdultAge = 18) {
    return this.age >= legalAdultAge;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const betterUser1 = new User('Test', 'Test 123', 12);
const betterUser2 = new User('Test', 'Test 123', 19);
/*
  Созадть класс рабочего
  у него есть свойства
  имя 
  фамилия,
  зарплата в день,
  количество отработанных дней

  у рабочего есть метод, возвращающий сколько ему надо заплатить
*/
const MIN_ZP = 216.67; // 6500 /30

class Worker {
  // обьявил приватное поле
  #firstName;

  constructor(firstName, lastName, daysWorked = 0, paymentRate = MIN_ZP) {
    // используем сеттер, будут все проверки сеттера
    this.firstName = firstName;
    this.lastName = lastName;
    this.paymentRate = paymentRate;
    this.daysWorked = daysWorked;
  }

  // getter - спец метод обьекта, который не принимет параметров
  // и возвращает значение
  // используется для чтения виртуальных свойств
  get firstName() {
    // private field
    return this.#firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get paymentRate() {
    return this._paymentRate;
  }
  get daysWorked() {
    return this._daysWorked;
  }

  get fullName() {
    return `${this.#firstName} ${this._lastName}`;
  }

  // setter - спец метод обьекта, который принимает один параметр
  // и может записать в какое то свойсто обьекта новое значение
  // используется для записывания/ переписывание свойств
  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string' || newFirstName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    // зашиваем свойство вручную
    this.#firstName = newFirstName.trim();
  }
  set lastName(lastName) {
    if (typeof lastName !== 'string' || lastName.trim() === '') {
      throw new TypeError('firstName must be not empty string');
    }
    // зашиваем свойство вручную
    this._lastName = lastName.trim();
  }
  set daysWorked(daysWorked) {
    if (typeof daysWorked !== 'number' || isNaN(daysWorked)) {
      throw new TypeError('daysWorked must be not negative integer');
    }

    if (daysWorked < 0 || !Number.isInteger(daysWorked)) {
      throw new RangeError('daysWorked must be not negative integer');
    }

    // зашиваем свойство вручную
    this._daysWorked = daysWorked;
  }
  set paymentRate(paymentRate) {
    if (paymentRate < MIN_ZP) {
      paymentRate = MIN_ZP;
    }
    // зашиваем свойство вручную
    this._paymentRate = paymentRate;
  }

  get workerPayment() {
    return this._daysWorked * this._paymentRate;
  }

  // приватный метод
  #isAdult() {
    return true;
  }

  isReallyAdult() {
    if (Math.random() > 0.5) {
      return this.#isAdult();
    }
  }

  // статический метод
  // сидит у класса
  // Worker.isWorker
  static isWorker (obj) {
    return obj instanceof Worker;
  }
}

const worker1 = new Worker('Test', 'Testenko', 30, 100);
const worker2 = new Worker('Director', 'Directorenko', 1000, 6500000);
// const worker3 = new Worker(12321312321321, 'YHGahaks');

function Test() {}
Test.test = function () {
  return true;
};
