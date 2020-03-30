function validation(){
	var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var courseName = document.getElementById("coursename");
    var email = document.getElementById("email");
    var collegeName = document.getElementById("collegename");
    var birthdate = document.getElementById("birthdate");
    var phone = document.getElementById("phone");

    if(firstName.value == "" || lastName.value == "" || courseName.value == "" || email.value == "" || collegeName.value == "" || phone.value == "" || birthdate == ""){
        alert("Every Field with is Mandatory.");
    }
}