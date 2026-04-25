function validateForm() {
    let name = document.empForm.name.value;
    let email = document.empForm.email.value;
    let salary = document.empForm.salary.value;


    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return false;
    }

    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email");
        return false;
    }

    
    if (isNaN(salary) || salary <= 0) {
        alert("Salary must be a positive number");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}