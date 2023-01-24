
var count = 0;

function add_item_counter(cost) {

    count++;
    let btn = document.getElementById('#nbr_items');
    // Setting new attributes

    document.getElementById("nbr_items").innerHTML = count;
    document.getElementById("Total_nbr_items").innerHTML = 'Total Items: ' + count * cost + ' $';

}



function remove__item_counter(cost) {


    let btn = document.getElementById('#nbr_items');
    // Setting new attributes
    if (count === 0) {
        count = 0
    }
    else {
        count--;
    }


    document.getElementById("nbr_items").innerHTML = count;
    document.getElementById("Total_nbr_items").innerHTML = 'Total Items: ' + count * cost + ' $';
}




function likebtn(name_btn) {
    let btn = document.getElementById(name_btn);
    if (btn.getAttribute('class') === 'btn btn-primary') {
        btn.setAttribute('class', 'btn btn-outline-primary');
    }

    else {
        btn.setAttribute('class', 'btn btn-primary');
    }

}



