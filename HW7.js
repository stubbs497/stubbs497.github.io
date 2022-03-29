function doExternalFileThing(elt) {
    elt.innerHTML = 'Done from an external file!';
    elt.disabled = true;
}

/* -------------- Conditional ------------------------------*/
function findDayOfWeek(button) {
    let parentElt = button.parentElement;
    let time = console.log
    
    contents = 'Good ';

    if (time > 12) {
        contents = contents + 'Morning';
    }
    else if (time > 14) {
        contents = contents + 'Afternoon';
    }
    else {  
        contents = contents + 'Evening';
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