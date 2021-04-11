let id = 0;

document.getElementById('addBtn').addEventListener('click',() => {
    let table = document.getElementById('myTable');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('newBook').value;
    row.insertCell(1).innerHTML = document.getElementById('newAuthor').value;
    document.getElementById('newBook').value = '';
    document.getElementById('newAuthor').value = '';
});
