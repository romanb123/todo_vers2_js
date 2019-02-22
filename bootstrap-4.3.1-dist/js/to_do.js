
// function to creat a div:
function divcreate(){
    // get the value of the missions:
var mission=document.getElementById('mission_text').value;
var date=document.getElementById('mission_date').value;
var time=document.getElementById('mission_time').value;


    // create a mission with the values:
    document.getElementById("missionsrow").innerHTML+="<div class='col-sm-12 col-md-12  col-lg-3 mission'>"
    +"<button class='close' class='close' aria-label='Close'onclick='removemission()'>"+"<span aria-hidden='true' class='remove' >&times;</span>"
    +"</button>"+"<h1>"+"Mission"+"</h1>"+"<p>"+mission+"</p>"+"<span class='date_time'>"+date+"<br>"+time+"</span>"
    +"</div>";
}


// function to deleate a div:
function removemission(){
var d=event.target;
var p=d.parentElement;
var s=p.parentElement;
s.parentElement.removeChild(s);
};