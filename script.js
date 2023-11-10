function makeDivFalse(div, email) {
    if (!email)
        div.querySelector('p').className = "empty";
    div.querySelector('input').className = "false";
    div.querySelector('img').className = "";
}

function makeDivTrue(div, email) {
    if (!email)
        div.querySelector('p').className = "empty hidden";
    div.querySelector('input').className = "true";
    div.querySelector('img').className = "hidden";
}

function checkEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);    
}

function checkIfEmpty(data, name) {
    var div = document.getElementById(name)
    
    
    if (!data) {
        if (name == 'email')
            document.getElementById('email-error').className = "empty hidden"

        makeDivFalse(div, false);
        return false;
    }
    
    if (data && name == 'email'){
        if (!checkEmail(data)) {
            makeDivTrue(div, false);
            document.getElementById('email-error').className = "empty"
            makeDivFalse(div, true);
            return false;
        }
        else {
            document.getElementById('email-error').className = "empty hidden"
            makeDivTrue(div, true);
        }
    }
     
    makeDivTrue(div, false);
    return true;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var form = document.forms['form'];

    var falseData = true

    for (var i = 0; i < 4; i++) {
        if (!checkIfEmpty(form.elements[i].value, form.elements[i].name))
            falseData = false;
    }

    if (falseData)
        document.getElementById('form').reset();
})