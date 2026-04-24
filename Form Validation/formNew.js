function validateForm() {

    let isValid = true;

    
    let name = document.getElementById("name").value.trim();
    let usn = document.getElementById("usn").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();


    document.getElementById("nameError").innerText = "";
    document.getElementById("usnError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("emailError").innerText = "";

    
    if (name.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters";
        isValid = false;
    }


    if (usn === "") {
        document.getElementById("usnError").innerText = "USN is required";
        isValid = false;
    }

    
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter valid 10-digit phone number";
        isValid = false;
    }


    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}