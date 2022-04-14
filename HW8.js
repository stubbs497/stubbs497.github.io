function validForm(formElt) {
    console.log('validForm called');
    valid = true;

    valid = validButtons(formElt.querySelector('fieldset:nth-of-type(2)'),
                        'input[type=checkbox]', 'p > span', 1);
    console.log('First validButtons: ' + valid);
    return vaild;
} 