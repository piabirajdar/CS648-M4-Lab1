/*eslint-env browser*/

// From the DOM access the employee

let addForm = document.getElementById('addForm');
let employees = document.getElementById('employees');

let count = 0;
let employeeCount = document.getElementById("empCount");


// on submission of form add an employee

addForm.addEventListener('submit', (e) => {
     e.preventDefault();
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    let newrow = employees.insertRow(-1);

    let idCell = newrow.insertCell(0);
    let nameCell = newrow.insertCell(1);
    let extensionCell = newrow.insertCell(2);
    let emailCell = newrow.insertCell(3);
    let departmentCell = newrow.insertCell(4);
    let deleteCell = newrow.insertCell(5);
    
    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));

    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm delete';
    deleteButton.appendChild(document.createTextNode('X'));
    deleteCell.appendChild(deleteButton);

    addForm.reset();

    document.getElementById('id').focus();

    count++;
    employeeCount.textContent = count;
});

// delete an employee of your choice.
employees.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let newrow  = e.target.parentNode.parentNode;
            employees.deleteRow(newrow .rowIndex);
            count--;
            employeeCount.textContent = count;
        }
    }
});