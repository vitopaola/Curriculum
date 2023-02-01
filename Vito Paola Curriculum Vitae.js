let x = 0;

function cambiarColor(){
    if(x==0){
        document.body.style.backgroundColor = "ivory";
        der.style.backgroundColor = "peachpuff";
        izq.style.backgroundColor = "lightslategray";
        x++;
    }
    else if(x==1){
        document.body.style.backgroundColor = "paleturquoise";
        der.style.backgroundColor = "palegoldenrod";
        izq.style.backgroundColor = "teal";
        x ++;
    }
    else{
        document.body.style.backgroundColor = "wheat";
        der.style.backgroundColor = "ivory";
        izq.style.backgroundColor = "#614d51";
        x = 0;
    }
    }
