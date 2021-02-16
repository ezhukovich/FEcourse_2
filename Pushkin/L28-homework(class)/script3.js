class Employee {
    constructor(name_h, surname_h, vacancy_h, age_h, number_h) {
        this.name = name_h;
        this.surname = surname_h;
        this.vacancy = vacancy_h;
        this.age = age_h;
        this.number = number_h;
    }

}
let allInfo = [
    new Employee("Dima", "Pushkin", "student", 26, 380630174779),
    new Employee("Harry", "Potter", "student", 23, 380630174279),
    new Employee("Rembo", "Stllone", "student", 26, 380630174779),
    new Employee("Coco", "Chanel", "teacher", 55, 380630074779),
    new Employee("Arnold", "Fish", "student", 52, 380630454779),
    new Employee("Crazy", "Frog", "student", 17, 380630174779)
];
console.log(allInfo);