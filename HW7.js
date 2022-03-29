function doExternalFileThing(elt) {
    elt.innerHTML = 'Done from an external file!';
    elt.disabled = true;
}

/* -------------- Conditional ------------------------------*/
function findDayOfWeek(button) {
    let parentElt = button.parentElement;
    let daynum = (new Date()).getDay(); // 0-6
    
    contents = 'Today is a ';

    if (daynum == 0) {
        contents = contents + 'Sunday';
    }
    else if (daynum == 1) {
        contents = contents + 'Monday';
    }
    else if (daynum == 2) {
        contents = contents + 'Tuesday';
    }
    else if (daynum == 3) {
        contents = contents + 'Wednesday';
    }
    else if (daynum == 4) {
        contents = contents + 'Thursday';
    }
    else if (daynum == 5) {
        contents = contents + 'Friday';
    }
    else {  // if (daynum == 6) {
        contents = contents + 'Saturday';
    }

    parentElt.innerHTML = contents;
}

function findDayOfWeekSwitch(button) {
    let parentElt = button.parentElement;
    let daynum = (new Date()).getDay(); // 0-6
    
    contents = 'Today is a ';

    switch (daynum) {
        case 0: contents = contents + 'Sunday'; 
                break;
        case 1: contents = contents + 'Monday'; 
                break;
        case 2: contents = contents + 'Tuesday'; 
                break;
        case 3: contents = contents + 'Wednesday'; 
                break;
        case 4: contents = contents + 'Thursday'; 
                break;
        case 5: contents = contents + 'Friday'; 
                break;
        default: contents = contents + 'Saturday'; 
                 break;
    }

    parentElt.innerHTML = contents;
}