const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
    //get values from the inputs
   const fnameValue = fname.value.trim();
   const lnameValue = lname.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();

   if(fnameValue === '') {
    setErrorFor(fname, 'First name cannot be blank');
   } else {
    setSuccessFor(fname);
   }
   if(lnameValue === '') {
    setErrorFor(lname, 'Last name cannot be blank');
   } else {
    setSuccessFor(lname);
   }
   if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
   } else {
    setSuccessFor(email);
   }
   if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
   } else {
    setSuccessFor(password);
   }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    
    // add error message inside small
    small.innerText = message;

    //add errorclass
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('span');

    //add errorclass
    formControl.className = 'form-control success';
}