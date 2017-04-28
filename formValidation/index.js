
const infoMessage = ['The name should between 4-16 characters', 'The password should be at least 8 characters',
'please retype the password', 'Please input your email address', 'Please input your phone number as XXX-XXX-XXXX'];
const infoColor = ['#337ab7', '#5cb85c', '#d9534f','#aaa'];
const inputGroups = document.getElementsByClassName('form-input');

var password = "";

(function(){
    var formMessage = document.getElementsByClassName('form-message');
    var submitBtn = document.getElementById('submitBtn');

    for(let i = 0; i< inputGroups.length; i++){
        inputGroups[i].onfocus = function(){
            formMessage[i].innerHTML= infoMessage[i];
            formMessage[i].style.color = infoColor[3];
            inputGroups[i].style.borderColor = infoColor[0];
        };
        inputGroups[i].onblur = function(){
            var rst = validate(i, inputGroups[i].value);
            formMessage[i].innerHTML = rst.content;
            if(rst.fb){
                inputGroups[i].style.borderColor = infoColor[1];
                formMessage[i].style.color = infoColor[1];
            }else{
                inputGroups[i].style.borderColor = infoColor[2];
                formMessage[i].style.color = infoColor[2];
            }
            
        };
    }

    submitBtn.onclick = submitAll;

})()

function validate(i, content){
    var result = {
        fb: false,
        content: ''
    }

    if(!content || !content.replace(/\s/g,'')){
        result.content='This area is required';
        return result;
    }

    content = content.replace(/\s/g,'');
    switch(i){
        case 0:
            if(/\w{4,16}/.test(content)){
                result.fb = true;
                result.content = 'You chose a nice name!';
            }else {
                result.content = 'The name should between 4-16 characters';
            }
            return result;
        case 1:
            if(/\w{8,}/.test(content)){
                result.fb = true;
                result.content = 'The password is strong';
                password = content;
            } else {
                result.content = 'The password should be at least 8 characters';
            }
            return result;
        case 2:
            if(password === content){
                result.fb = true;
                result.content = 'The password is correct';
            } else {
                result.content = 'The two passwords are different';
            }
            return result;
        case 3:
            if(/^\w+@\w+$/.test(content)){
                result.fb = true;
                result.content = 'The email address is valid';
            } else {
                result.content = 'Please input valid email address';
            }
            return result;
        case 4:
            if(/^\d{3}-\d{3}-\d{4}$/.test(content)){
                result.fb = true;
                result.content = 'The phone number is valid';
            } else {
                result.content = 'Please input valid phone number';
            }

            return result;
    }
    return result;
}

function submitAll (){
     for(let i = 0; i< inputGroups.length; i++){
         var rst = validate(i, inputGroups[i].value);
         if(!rst.fb){
             alert(rst.content)
             return false;
         }
     }
     alert("All corect!");
     return false
}