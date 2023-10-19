// Add your code here
function submitData(name, email) {
    const object = {
      name: name,
      email: email
    };
  
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(object => {
      const id = object.id;
      const idElement = document.createElement('p');
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
  }
  
  // Usage
  submitData("John Doe", "johndoe@example.com");
  
  