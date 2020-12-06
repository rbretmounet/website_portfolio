function validateForm() {
    var firstName = document.forms["contact_form"]["first_name"].value;
    var lastName = document.forms["contact_form"]["last_name"].value;
    var emailAddress = document.forms["contact_form"]["email"].value;
    if (firstName == "") {
      alert("First name must be filled out");
      return false;
    }else if (lastName == "") {
        alert("Last name must be filled out");
        return false;
    }else if (emailAddress == "") {
        alert("Email must be filled out");
        return false;
    }
    else
    {
        emailjs.sendForm('service_povdbef','template_jvzwm7m','contactForm');
        document.getElementById('contactForm').reset();
        document.getElementById('message').value='Message Sent!';
        setTimeout(() => {  document.getElementById('message').value=''; }, 1000);
    }
  }