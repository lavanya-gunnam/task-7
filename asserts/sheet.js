function submitValidation() {

   // alert('hello')
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('inputEmail').value;
    const pnumber = document.getElementById('inputphonenumber').value;
    const dob = document.getElementById('dateOfBirth').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const password1 = document.getElementById('exampleInputPassword2').value;
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    const country = document.getElementById('country').value;
    const checkbox = document.getElementById('flexCheckChecked');
  
  
  
    if(userfunction(username))
    {

        if(emailfunction(email) ){
            if(phonefunction(pnumber)){
                if(datefunction(dob)){
                    if(passwfunction(password)){
                        if(cpasswfunction(password ,password1 )){
                            if(genderfunction( male,female)){
                             if(countryfunction(country) ){
                                if(boxfunction(checkbox)){
                                    
                                    document.getElementById('username').value = ""
                                    document.getElementById('dateOfBirth').value = ""
                                     document.getElementById('inputphonenumber').value = ""
                                      document.getElementById('inputEmail').value = ""
                                    document.getElementById('country').value = ""
                                     document.getElementById('exampleInputPassword1').value = ""
                                     document.getElementById('exampleInputPassword2').value = ""
                                   document.getElementById("flexCheckChecked").checked = false;
                                    document.getElementById("male").checked = false;
                                    document.getElementById("female").checked = false;
                                    
                                    setTimeout(function () {
                                      window.location.reload();
                                  }, 4000);
                              
                                }
                                document.getElementById("popupMsg").style.display = "block";
                            }else{
                               document.getElementById('checkErr').style.display = 'none';
                               document.getElementById('flexCheckChecked').style.borderColor = 'black';
                               }
                        }else{
                     document.getElementById('countryErr').style.display = 'none';
                      document.getElementById('country').style.borderColor = 'black';
                      document.getElementById('checkErr').style.display = 'none';
                      document.getElementById('flexCheckChecked').style.borderColor = 'black';
                      }
                    }else{
                      document.getElementById('genderErr').style.display = 'none';
                     document.getElementById('countryErr').style.display = 'none';
                      document.getElementById('country').style.borderColor = 'black';
                      document.getElementById('checkErr').style.display = 'none';
                      document.getElementById('flexCheckChecked').style.borderColor = 'black';
                    
                     }
                }else{
                  document.getElementById('password2Err').style.display = 'none';
                  document.getElementById('exampleInputPassword2').style.borderColor = 'black';
                  document.getElementById('genderErr').style.display = 'none';
                 document.getElementById('countryErr').style.display = 'none';
                  document.getElementById('country').style.borderColor = 'black';
                  document.getElementById('checkErr').style.display = 'none';
                  document.getElementById('flexCheckChecked').style.borderColor = 'black';
                
                 }
            }else{
              
              document.getElementById('passwordErr').style.display = 'none';
              document.getElementById('exampleInputPassword1').style.borderColor = 'black';
              document.getElementById('password2Err').style.display = 'none';
              document.getElementById('exampleInputPassword2').style.borderColor = 'black';
              document.getElementById('genderErr').style.display = 'none';
             document.getElementById('countryErr').style.display = 'none';
              document.getElementById('country').style.borderColor = 'black';
              document.getElementById('checkErr').style.display = 'none';
              document.getElementById('flexCheckChecked').style.borderColor = 'black';
            
             }
        }else{
          document.getElementById('dateOfBirthrErr').style.display = 'none';
          document.getElementById('dateOfBirth').style.borderColor = 'black';
          document.getElementById('passwordErr').style.display = 'none';
          document.getElementById('exampleInputPassword1').style.borderColor = 'black';
          document.getElementById('password2Err').style.display = 'none';
          document.getElementById('exampleInputPassword2').style.borderColor = 'black';
          document.getElementById('genderErr').style.display = 'none';
         document.getElementById('countryErr').style.display = 'none';
          document.getElementById('country').style.borderColor = 'black';
          document.getElementById('checkErr').style.display = 'none';
          document.getElementById('flexCheckChecked').style.borderColor = 'black';
        
         }
    }else{
      document.getElementById('phonenumberErr').style.display = 'none';
      document.getElementById('inputphonenumber').style.borderColor = 'black';
      document.getElementById('dateOfBirthrErr').style.display = 'none';
      document.getElementById('dateOfBirth').style.borderColor = 'black';
      document.getElementById('passwordErr').style.display = 'none';
      document.getElementById('exampleInputPassword1').style.borderColor = 'black';
      document.getElementById('password2Err').style.display = 'none';
      document.getElementById('exampleInputPassword2').style.borderColor = 'black';
      document.getElementById('genderErr').style.display = 'none';
      document.getElementById('country').style.borderColor = 'black';
      document.getElementById('checkErr').style.display = 'none';
      document.getElementById('flexCheckChecked').style.borderColor = 'black';
    
     }
 }
 else{
  document.getElementById('emailErr').style.display = 'none';
  document.getElementById('inputEmail').style.borderColor = 'black';
  document.getElementById('phonenumberErr').style.display = 'none';
  document.getElementById('inputphonenumber').style.borderColor = 'black';
  document.getElementById('dateOfBirthrErr').style.display = 'none';
  document.getElementById('dateOfBirth').style.borderColor = 'black';
  document.getElementById('passwordErr').style.display = 'none';
  document.getElementById('exampleInputPassword1').style.borderColor = 'black';
  document.getElementById('password2Err').style.display = 'none';
  document.getElementById('exampleInputPassword2').style.borderColor = 'black';
  document.getElementById('genderErr').style.display = 'none';
  document.getElementById('male').style.borderColor = 'black';
document.getElementById('female').style.borderColor = 'black';
 document.getElementById('country').style.borderColor = 'black';
 document.getElementById('countryErr').style.display = 'none';
  document.getElementById('country').style.borderColor = 'black';
  document.getElementById('checkErr').style.display = 'none';
  document.getElementById('flexCheckChecked').style.borderColor = 'black';

 }
}

 function userfunction(username) {
      if (username.length <= 3 || /\d/.test(username)) {
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('usernameErr').style.display = 'block';
        userCheck = false;
        return false;
      } else {
        document.getElementById('username').style.borderColor = 'green';
        document.getElementById('usernameErr').style.display = 'none';
        userCheck = true;
        return true;
      }
    } //use name ends
  //email
  
    function emailfunction(email) {
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailPattern.test(email)) {
        document.getElementById('inputEmail').style.borderColor = 'green';
        document.getElementById('emailErr').style.display = 'none';
        emailCheck = true;
        return true;
      } else {
        document.getElementById('inputEmail').style.borderColor = 'red';
        document.getElementById('emailErr').style.display = 'block';
        emailCheck = false;
        return false;
      }
    }
    //email ends
  //phone number
    function phonefunction(pnumber) {
      const pnumberpattern = /^[6-9]\d{9}$/;
      if (pnumberpattern.test(pnumber)) {
        document.getElementById('inputphonenumber').style.borderColor = 'green';
        document.getElementById('phonenumberErr').style.display = 'none';
        phoneCheck = true;
        return true;
      } else {
        document.getElementById('inputphonenumber').style.borderColor = 'red';
        document.getElementById('phonenumberErr').style.display = 'block';
        phoneCheck = false;
        return false;
      }
    }
    //phone end
    //date
   function datefunction(dob) {
      if (dob == null || dob.trim() === '') {
        document.getElementById('dateOfBirth').style.borderColor = 'red';
        document.getElementById('dateOfBirthrErr').style.display = 'block';
        dateCheck = false;
        return false;
      } else {
        document.getElementById('dateOfBirth').style.borderColor = 'green';
        document.getElementById('dateOfBirthrErr').style.display = 'none';
        dateCheck = true;
        return true;
      }
    }
  
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  //password
    function passwfunction(password) {
      if (passwordPattern.test(password)) {
        document.getElementById('exampleInputPassword1').style.borderColor = 'green';
        document.getElementById('passwordErr').style.display = 'none';
        passwordCheck = true;
        return true;
      } else {
        document.getElementById('exampleInputPassword1').style.borderColor = 'red';
        document.getElementById('passwordErr').style.display = 'block';
        passwordCheck = false;
        return false;
      }
    }
  //conformpassword
    function cpasswfunction(password ,password1 ) {
        console.log("Original Password:", password);
    console.log("Confirmed Password:", password1);

        if (passwordPattern.test(password1)) {
        document.getElementById('exampleInputPassword2').style.borderColor = 'green';
        document.getElementById('password2Err').style.display = 'none';
        password2Check = true;
        return true;
      } 
     
  
      else if (password1 !== password) {
        document.getElementById('exampleInputPassword2').style.borderColor = 'red';
        document.getElementById('password2Err').style.display = 'block';
        password2Check = false;
        return false;
      }
    }
    
  //gender
  
    function genderfunction(male,female) {
      if (male.checked || female.checked) {
        document.getElementById('genderErr').style.display = 'none';
        mfCheck = true;
        return true
      } else {
        document.getElementById('genderErr').style.display = 'block';
        
        mfCheck = false;
        return false
      }
    }
  //country
    function countryfunction(country) {
      if (country.length === 1) {
        document.getElementById('country').style.borderColor = 'green';
        document.getElementById('countryErr').style.display = 'none';
        countryCheck = true;
        return true;
      } else {
        document.getElementById('country').style.borderColor = 'red';
        document.getElementById('countryErr').style.display = 'block';
        countryCheck = false;
        return false;
      }
    }
  //check box
    function boxfunction(checkbox) {
      if (!checkbox.checked) {
        checkbox.style.borderColor = 'red';
        checkErr.style.display = 'block';
        check = false;
        return false;
      } else {
        checkbox.style.borderColor = 'green';
        checkErr.style.display = 'none';
        check = true;
        return true;
      }
    }
  //check box end
  
  