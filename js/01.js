
    var picarry = new Array(4);
    picarry[0] = "images/02.jpg";
    picarry[1] = "images/03.jpg";
    picarry[2] = "images/04.jpg";
    picarry[3] = "images/05.jpg";
    var timer, index = 0;

    window.onload = Showpic;


    function Showpic() {
        document.getElementById("pic").src = picarry[index];
        if (index < (picarry.length - 1))
            index++;
        else
            index = 0;
        timer = setTimeout("Showpic()", 1000);
    }
    function ShowPrepic() {
        if (index > 0)
            index--;
        else
            index = 4;
        document.getElementById("pic").src = picarry[index];
        timer = setTimeout("ShowPrepic()", 1000);

    }
    function ShowNext() {
        clearTimeout(timer);
        Showpic();
    }
    function ShowPre() {
        clearTimeout(timer);
        ShowPrepic();
    }

