function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data))
}

function displayData(users){
    const tbody = document.getElementById('table-body');
    const userLength = users.length;

    for(let i = 0; i < userLength; i++){
        let tr = document.createElement('tr');

        // Display user ID
        let tdId = document.createElement('td');
        tdId.innerText = users[i].id;
        tr.appendChild(tdId);

        // Display  Name
        let tdName = document.createElement('td');
        tdName.innerText = users[i].name;
        tr.appendChild(tdName);

        
        // Display user Name
        let tdUserName = document.createElement('td');
        tdUserName.innerText = users[i].username;
        tr.appendChild(tdUserName);
        
        // Display user Email
        let tdEmail = document.createElement('td');
        tdEmail.innerText = users[i].email;
        tr.appendChild(tdEmail);

        // Append the row to the table body
        tbody.appendChild(tr);
    }
}

loadUser()



