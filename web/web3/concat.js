function addNames() {
    let firstName = document.getElementById("first-name").value;
    
    let lastName = document.getElementById("last-name").value;

    let fullName = `${firstName} ${lastName}`;

    document.getElementById("full-name").value = fullName; 
}