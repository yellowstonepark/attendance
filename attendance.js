//Javascript code for taking attendance
"use strict";

function attendance () {
  //let peopleInZoom = prompt('Enter names');
  let peopleInZoom = document.getElementById("txtKids").value; //getting value of textarea
  let area = document.getElementById("pplInClass"); //getting value of textarea 2
let classmates = area.value.replace(/\r\n/g,"\n").split("\n").filter(line => line);

classmates.forEach(fixCase);

function fixCase(item, index, arr) {

  //making 2 or more space equal only 1 space
  item = item.replace(/[ ]{2,}/gi," ");

  //creating an array named "name"
  let name = [];

  //spliting input by spaces
  let nameParts = item.split(" ");
  //for each name part...
  nameParts.forEach((part, p) => {
    //make the first letter uppercase and letters after that lowercase
    part = part[0].toUpperCase() + part.toLowerCase().slice(1);
    //push the part of the name (fist name, last name, etc.) to the array called name
    name.push(part);
  });

  //joining the first name, last name, etc. in the area together to create the name (item)
  item = name.join(" ");

  //finalizing the classmates' name in the array
  arr[index] = item;

}



  let present = [];
  let absent = [];

  for (let i = 0; i < classmates.length; i++) {
   let toSearch = new RegExp(classmates[i], "i");
    if ((peopleInZoom.search(toSearch)) == -1) {
        absent.push(classmates[i]);
    }
    else
      present.push(classmates[i]);
  }

    //alert(`These people are absent: ${absent.join(" * ")}`);
    //alert(`These people are present: ${present.join(" * ")}`);

  document.getElementById("whoIsPresent").innerHTML = present.join(" * ");
  document.getElementById("whoIsAbsent").innerHTML = absent.join(" * ");
}

function forMyClass () {

  //let arrclassmates_Of_8G1 = ["AARON","ALLISON","AMBER","AMELIE","ARTHUR","AYAH","BRYSTON","CHRISTOPHER","CLAIRE","DANIEL","Diyora","DOMINIC","ERROL","ETHAN","GABRIEL","HAILEY","HAYDEN","HELENA","ILSA","ISABELLA",
//  "JACOB","JOYCE","LAYLA","MINA","MORNA","NICHOLAS","OTZAR","OWEN","PARKER","RUBY","SOFIA","UMA","ZEPHAN"];
//
/*let classmates = toString(arrclassmates_Of_8G1);
classmates = classmates.split(",");

for (let i = 0; i < classmates.length; i++) {
  classmates[i] = classmates[i] + ",";
}

classmates = classmates.join("");

alert(classmates);

*/

let theclassmates = `HAILEY A
RUBY B
AYAH B
ALLISON C
ARTHUR C
LAYLA C
Diyorabonu E
PARKER F
HAYDEN G
DOMINIC J
BRYSTON J
ETHAN L
ZEPHAN M
AMELIE M
AMBER M
GABRIEL N
SOFIA P
UMA P
ERROL S
DANIEL S
JACOB S
CLAIRE S
NICHOLAS W
ILSA W
MORNA W
CHRISTOPHER W
JOYCE W
ISABELLA W
OWEN Y
HELENA Y
MINA Y
AARON Y`;

document.getElementById("pplInClass").innerHTML = theclassmates;
}
