// Creating a teacher and a director
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// returns a Teacher's name in this format: S. Cheung
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
console.log(printTeacher('Nasser', 'Abuchaibe'));
// Creating class and constructor through interfaces 
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// creating instance of StudentClass
var studentClass = new StudentClass('Siad', 'Abuchaibe');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
