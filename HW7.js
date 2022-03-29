function findTimeOfDay(button) {
    let parentElt = button.parentElement;
    let time = (new Date()).getHours();
    
    contents = 'Good ';

    if (time < 12) {
        contents = contents + 'Morning!';
    }
    else if (time < 14) {
        contents = contents + 'Afternoon!';
    }
    else {  
        contents = contents + 'Evening!';
    }

    parentElt.innerHTML = contents;
}
