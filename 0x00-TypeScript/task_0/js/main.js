/** Renders table based on a list of objects */
var student1 = {
    firstName: 'Nasser',
    lastName: 'Abuchaibe',
    age: 38,
    location: 'San Marcos'
};
var student2 = {
    firstName: 'Siad',
    lastName: 'Abuchaibe',
    age: 9,
    location: 'San Marcos'
};
var studentList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentList.forEach(function (obj) {
    var row = document.createElement('tr');
    var cellName = document.createElement('td');
    var cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
