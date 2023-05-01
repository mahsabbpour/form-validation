
    const formBox = document.querySelector('#forms')
    const signBox = document.querySelector('#sign')

    let _child = formBox.children
    let para = 0
    // ********

    document.getElementById('signUp').addEventListener('click', function () {
        let temp = this.getAttribute('data-status')
        if (temp == 'one') {
            // first click
            this.parentElement.parentElement.style.transform = 'translateX(-100%)'
            formBox.style.transform = 'translateX(100%)'

            for (i = 0; i < _child.length; i++) {
                _child[i].style.transform = 'translateY(-100%)'
            }




            signBox.style.backgroundImage = 'linear-gradient(to right, #16bffd, #cb3066)'

            this.setAttribute('data-status', 'two')
            this.innerHTML = 'sign in'
            this.previousElementSibling.innerHTML = "To keep connected with us please login with your personal info"
            this.previousElementSibling.previousElementSibling.innerHTML = 'welcome back!'

        } else {
            this.parentElement.parentElement.style.transform = 'translateX(0)'
            formBox.style.transform = 'translateX(0)'


            for (i = 0; i < _child.length; i++) {
                _child[i].style.transform = 'translateY(0)'
            }


            this.setAttribute('data-status', 'one')
            this.innerHTML = 'sign up'
            this.previousElementSibling.innerHTML = "Enter your personal details and start journey with us"
            this.previousElementSibling.previousElementSibling.innerHTML = 'hello friends!'
            signBox.style.backgroundImage = 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'

        }
    })
    // ****************_form1


    function _form1() {

        let labelEmail1 = document.querySelector('#labelEmail1')
        let labelPass1 = document.querySelector('#labelPass1')

        let _email1 = document.forms['form1']['email1'].value
        let _pass1 = document.forms['form1']['pass1'].value

        console.log(_email1 + " - " + _pass1);

        // labelEmail1.innerText = ''
        if ((_email1 == '') || (_email1 == null) || (_email1.search(/<script/)) >= 0) {

            labelEmail1.innerText = "Enter your email!"
             

        } else {
            let _at = _email1.match(/@/g)

            if ((_email1.length) < 10) {
                labelEmail1.innerText = ' your email must have at least 10 characters'

                 
            }
            else if ((_email1.search(/[ا-ی]/)) != -1) {
                labelEmail1.innerText = ' your email must be written in english only'
                 
            }


            else if ((_email1.search(/[~!#$%^&*()_+]/)) != -1) {
                labelEmail1.innerText = 'your email must nut contain special characters'

                 
            }
            else if ((_at.length) != 1) {

                labelEmail1 = 'your email must have an @'
                 

            }

            else if ((_email1.search(/[a-z]/g)) != -1) {
                labelEmail1.innerText = ' your email must be written in english only'
                 

            }
            else if (_email1.search(/@/) < 3) {
                labelEmail1 = 'there must be at least three characters before @ in your email'
                 

            }

            else {

                labelEmail1.innerText = 'your email is valid and acceptable'
                labelEmail1.classList.remove('text-danger')
                labelEmail1.classList.add('text-success')

            }


            // ****************

            // labelPass1.innerText = ''


        }

        if ((_pass1 == '') || (_pass1 == null) || (_pass1.search(/<script/)) >= 0
        ) {
            labelPass1.innerText = "Enter your password...!"
             
        }

        else {
            if (_pass1.length < 8) {
                labelPass1.innerText = "yor password must have at least 8 characters! "
                 

            }
            else if ((_pass1.search(/[~!@#$%^&*()_+]/)) == -1) {

                labelPass1.innerText = 'your email must contain special characters'

                 

            }
            else if ((_pass1.search(/[0-9]/)) == -1) {
                labelPass1.innerText = 'there must be numbers in your email'

                 
            }

            else if ((_pass1.search(/[a-z]/)) == -1) {
                labelPass1.innerText = 'there must be english letters in your email'
                 

            }


            else {

                labelPass1.innerText = 'your password is valid and acceptable'
                labelPass1.classList.remove('text-danger')
                labelPass1.classList.add('text-success')

            }


        }



        return false
    }



      // ****************_form2


      function _form2() {

let labelEmail2= document.querySelector('#labelEmail2')
let labelPass2 = document.querySelector('#labelPass2')

let _email2 = document.forms['form2']['email2'].value
let _pass2 = document.forms['form2']['pass2'].value
let _name = document.forms['form2']['name'].value


if((_name == '') || (_name == null) || (_name.search(/<script/)) >=0){

    labelName.innerText = 'enter your name'
}


if ((_email2 == '') || (_email2 == null) || (_email2.search(/<script/)) >= 0) {

    labelEmail2.innerText = "Enter your email!"
     

} else {
    let _at = _email1.match(/@/g)

    if ((_email2.length) < 10) {
        labelEmail2.innerText = ' your email must have at least 10 characters'

         
    }
    else if ((_email2.search(/[ا-ی]/)) != -1) {
        labelEmail2.innerText = ' your email must be written in english only'
         
    }


    else if ((_email2.search(/[~!#$%^&*()_+]/)) != -1) {
        labelEmail2.innerText = 'your email must nut contain special characters'

         
    }
    else if ((_at.length) != 1) {

        labelEmail2.innerHTML = 'your email must have an @'
         

    }

    else if ((_email2.search(/[a-z]/g)) != -1) {
        labelEmail2.innerText = ' your email must be written in english only'
         

    }
    else if (_email2.search(/@/) < 3) {
        labelEmail2 = 'there must be at least three characters before @ in your email'
         

    }

    else {

        labelEmail2.innerText = 'your email is valid and acceptable'
        labelEmail2.classList.remove('text-danger')
        labelEmail2.classList.add('text-success')

    }


    // ****************




}

if ((_pass2 == '') || (_pass2 == null) || (_pass2.search(/<script/)) >= 0
) {
    labelPass2.innerText = "Enter your password...!"
     
}

else {
    if (_pass2.length < 8) {
        labelPass2.innerText = "yor password must have at least 8 characters! "
         

    }
    else if ((_pass2.search(/[~!@#$%^&*()_+]/)) == -1) {

        labelPass2.innerText = 'your email must contain special characters'

         

    }
    else if ((_pass2.search(/[0-9]/)) == -1) {
        labelPass2.innerText = 'there must be numbers in your email'

         
    }

    else if ((_pass2.search(/[a-z]/)) == -1) {
        labelPass2.innerText = 'there must be english letters in your email'
         

    }


    else {

        labelPass2.innerText = 'your password is valid and acceptable'
        labelPass2.classList.remove('text-danger')
        labelPass2.classList.add('text-success')

    }


}



return false
}