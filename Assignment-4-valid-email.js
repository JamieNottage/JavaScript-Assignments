function validEmail(email) {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailformat)) {
        return true;
    } else {
        return false;
    }
}

console.log(`This is a valid email: ${validEmail("john.smith@smithmail.com")}`);
