let myform = document.forms["myForm"];

const info = document.getElementById("info");
const password_error = document.getElementById("password_error");

function OnSubmit(event) {
  event.preventDefault();

  const password = myform["password"];
  const confirm = myform["confirm"];

  if (password.value != confirm.value) {
    password.style = "border:2px solid red";
    confirm.style = "border:2px solid red";
    password_error.innerHTML = "Password ve Confirm Password eyni olmalidir";
    return;
  }

  password.style = "";
  confirm.style = "";
  password_error.innerHTML = "";

  let content = "";
  content += `<li><b>Full Name :</b> ${myform["fullname"].value}</li>`;
  content += `<li><b>Email :</b> ${myform["email"].value}</li>`;
  content += `<li><b>Phone :</b> ${myform["phone"].value}</li>`;
  content += `<li><b>Plan :</b> ${myform["plan"].value}</li>`;
  content += `<li><b>Billing Interval :</b> ${myform["billing"].value}</li>`;
  content += `<li><b>Street Address :</b> ${myform["street"].value}</li>`;
  content += `<li><b>City :</b> ${myform["city"].value}</li>`;
  content += `<li><b>Province :</b> ${myform["province"].value}</li>`;
  content += `<li><b>ZIP/Postal Code :</b> ${myform["zip"].value}</li>`;
  content += `<li><b>Country :</b> ${myform["country"].value}</li>`;

  info.innerHTML = content;
}

function OnCancel() {
  info.innerHTML = "";
  password_error.innerHTML = "";
  myform["password"].style = "";
  myform["confirm"].style = "";
}