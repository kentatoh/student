function validate() {
  var reg = /\d/;
  var studentId = document.forms["student-form"]["studentId"].value;
  var firstName = document.forms["student-form"]["firstName"].value;
  var lastName = document.forms["student-form"]["lastName"].value;
  var age = document.forms["student-form"]["age"].value;
  var degree = document.forms["student-form"]["degree"].value;
  var gender = document.forms["student-form"]["gender"].value;

  if (
    studentId == "" ||
    firstName == "" ||
    lastName == "" ||
    age == "" ||
    gender == "" ||
    degree == ""
  ) {
    alert("Please fill in all blanks");
    return false;
  } else if (reg.test(firstName)) {
    alert("First Name should not contain number");
    return false;
  } else if (reg.test(lastName)) {
    alert("Last name should not contain number");
    return false;
  } else if (reg.test(degree)) {
    alert("Degree should not contain number");
    return false;
  }

  reg = /^[0-9]/;
  if (!reg.test(age)) {
    alert("Age should contain numbers only");
    return false;
  }

  return true;
}
