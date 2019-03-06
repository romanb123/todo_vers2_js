




var i=0;
var ArrMissions = [];
// function to creat a div:
function divcreate() {
  // get the value of the missions:
  var mission = document.getElementById('mission_text').value;
  var date = document.getElementById('mission_date').value;
  var time = document.getElementById('mission_time').value;
  

// to local storage:
    var ObjMissions = {text:mission, when:date, clock:time};
    var mission1=localStorage.getItem("lastname"); 
    objmissions1 = JSON.parse(mission1);
  if(objmissions1!=null){
console.log(objmissions1);
objmissions1.push(ObjMissions);
 myJSON = JSON.stringify(objmissions1);
localStorage.setItem("lastname",myJSON);
}
else{
    ArrMissions.push(ObjMissions);
     myJSON = JSON.stringify(ArrMissions);
    localStorage.setItem("lastname",myJSON);
}  
    // create the div:
  var newdiv = `<div class="col-sm-12 col-md-12  col-lg-3 mission" id="${i}">`
    + "<button class='close' class='close' aria-label='Close'onclick='removemission()'>" + "<span aria-hidden='true' class='remove' >&times;</span>"
    + "</button>" + "<h1>" + "Mission" + "</h1>" + "<p>" + mission + "</p>" + "<span class='date_time'>" + date + "<br>" + time + "</span>"
    + "</div>";
  document.getElementById("missionsrow").innerHTML += newdiv;
  i++;
}
    // to load misions:
    function loadStorage(){
      var mission1=localStorage.getItem("lastname"); 
      objmissions1 = JSON.parse(mission1);
      console.log(objmissions1);
      for (let index = 0; index < objmissions1.length; index++) {
      var newdiv = `<div class="col-sm-12 col-md-12  col-lg-3 mission" id="${index}">`
      + "<button class='close' class='close' aria-label='Close'onclick='removemission()'>" + "<span aria-hidden='true' class='remove' >&times;</span>"
      + "</button>" + "<h1>" + "Mission" + "</h1>" + "<p>" + objmissions1[index].text + "</p>" + "<span class='date_time'>" +objmissions1[index].date + "<br>" + objmissions1[index].time + "</span>"
      + "</div>";
    document.getElementById("missionsrow").innerHTML += newdiv;
     }
    }
// function to deleate a div:
function removemission() {
  var d = event.target;
  var p = d.parentElement;
  var s = p.parentElement;
  s.parentElement.removeChild(s);
}

// function to create an array
// function newArray() {
//   var mission = document.getElementById('mission_text').value;
//   var date = document.getElementById('mission_date').value;
//   var time = document.getElementById('mission_time').value;
//     var ObjMissions = {text:mission, when:date, clock:time};
//     myJSON = JSON.stringify(ObjMissions);
//   ArrMissions.push(myJSON);
//   document.getElementById("heading").innerHTML = ArrMissions;
//   localStorage.setItem("lastname",ArrMissions);
// }
