function getParagraph1() {
    var input = []
    for(var i = 1; i<=6; i++){
        input.push(document.getElementById("para1_input_box_" + i).value);
        input.join(". ");
        document.getElementById("show_paragraph_1").innerHTML = input.join(". ");
    }
}

function getParagraph2() {
    var input2 = []
    for(var a = 1; a<=6; a++){
        input2.push(document.getElementById("para2_input_box_" + a).value);
        input2.join(". ");
        document.getElementById("show_paragraph_2").innerHTML = input2.join(". ");
    }
}