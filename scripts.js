
function ChangeText() //task 1
{
	let two = $('#content2').html();
	$('#content2').html($('#content1').html());
	$('#content1').html(two);

}

var a = 8;
var b = 7;
var c = 12;

function square() //task 2
{
    var p = (a + b + c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
}



function eraseCookie(name)
{
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function min_number() //task 3
{
    var m=[1,1,1,1,1,1,1,1,3,2];
    var min=m[0];
    var k=0;
    for(var i=0; i<9; i++)
        if(m[i]<min) 
        {
            min=m[i];
            k=1;
        }
        else
            if(m[i]==min) k++;
 
    alert("Количество минимальных элементов = " + k);
    
    document.cookies="k=" +k+";" + "expires=Mon,  2 Nov 2020 00:00:00 GMT;";

    alert(document.cookies);

    alert("Сохранено в cookies. После нажатия 'ОК' произойдет удаление данных из cookies.");

    eraseCookie("k");

    alert(document.cookies);

    alert("сookies удалены");
}

//TASK 4

jQuery.fn.changeColorTo = function(color) 
{
    this.children().css("color", color);
};

function takeColor()
{
    var color = localStorage.getItem("color");
    $("#footer").changeColorTo(color);
}

function ChangeColor() 
{
    var elem = $("#color");
    elem.blur(function(){
        $("#footer").changeColorTo(elem.val());
        localStorage.setItem("color", elem.val());
    });
}


//TASK 6

function inputValue(from, to)
{
    $(to).val($(from).html());
}

function addEvent(elemToChange, elemWithValue){
    $(elemWithValue).change(function(){
        $(elemToChange).html($(elemWithValue).val());
        localStorage.setItem(elemToChange, $(elemWithValue).val());
    });
}

function clickButtons(button, elem){
    $(button).click(function(){
        localStorage.removeItem(elem);
    });
}

function inputAll(){
    
    addEvent("#header", "#header-input");
    addEvent("#sidebar", "#sidebar-input");
    addEvent("#site", "#site-input");
    addEvent("#content1", "#content1-input");
    addEvent("#content2", "#content2-input");
    addEvent("#footer", "#footer-input");

  
    clickButtons("#header-button", "#header");
    clickButtons("#sidebar-button", "#sidebar");
    clickButtons("#site-button", "#site");
    clickButtons("#content1-button", "#content1");
    clickButtons("#content2-button", "#content2");
    clickButtons("#footer-button", "#footer-input");
}

function readLS(elem){
    if(localStorage.getItem(elem)){
        $(elem).html(localStorage.getItem(elem));
    }
}

function setHtml()
{
    readLS("#header");
    readLS("#sidebar");
    readLS("#site");
    readLS("#content1");
    readLS("#content2");
    readLS("#footer");

    inputValue("#header", "#header-input");
    inputValue("#sidebar", "#sidebar-input");
    inputValue("#site", "#site-input");
    inputValue("#content1", "#content1-input");
    inputValue("#content2", "#content2-input");
    inputValue("#footer", "#footer-input");

    inputAll();
} 




(function menu()
{
	ChangeText();//task 1

	var e = Math.pow(10, 3); //task 2
    $("#site").append( Math.round(square() * e) / e );
    
    min_number();//task 3
    
    document.addEventListener("DOMContentLoaded", takeColor); 
    
    ChangeColor();//task 4

    window.addEventListener("load", function() //task 5 
    { 
        $("#site").append("<p> Площадь треугольника </p>");
    });

    document.addEventListener("DOMContentLoaded", setHtml); //task 6
})();