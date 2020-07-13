//give exchange options
function start(x) {
    document.querySelector('.transfer').style.display = 'none';
    document.getElementById('ls').style.display = 'block';
    document.getElementById('sg').style.display = 'block';
    document.getElementById('gs').style.display = 'block';
}
//reveal the popup
function revealForm(x) {
   if (x === 1) {
    document.getElementById('lesser').style.display ='block';
   }
   else if (x === 2) {
    document.getElementById('standard').style.display ='block';
   }
   else {
    document.getElementById('greater').style.display ='block';
   }
};
//hide popup
function hideForm(x) {
    //stops code restarting page
    event.preventDefault()
    if (x === 0) {
        document.getElementById('lesser').style.display ='none';
       }
       else if (x === 1) {
        document.getElementById('standard').style.display ='none';
       }
       else {
        document.getElementById('greater').style.display ='none';
       }
    };

/*Compares all currencies against Blue
let baseCurrency = mutagens[7].rate;
let baseCurrencyAmount = 0;
*/

//exchanges in the lesser to standard popup
 function less(){
   //stops code from auto closing window.
    event.preventDefault();
   //take input of left side inout and start conversion
    let changeRed = document.getElementById("0").value
    let changeBlue = document.getElementById("2").value
    let changeGreen = document.getElementById("4").value
    let red = Math.floor(changeRed * mutagens[0].rate);
    let blue = Math.floor(changeBlue * mutagens[1].rate);
    let green = Math.floor(changeGreen * mutagens[2].rate);
   //give value to right side inputs 
    document.getElementById("1").value = red;
    document.getElementById("3").value = blue;
    document.getElementById("5").value = green;
    //update side inputs lesser
    let originalRed = base[0] - changeRed;
    let originalBlue = base[1] - changeBlue;
    let originalGreen = base[2] - changeGreen;
    //adjust values
    document.getElementById("a").value = originalRed 
    document.getElementById("b").value = originalBlue
    document.getElementById("c").value = originalGreen
 
   //update side inputs standard 
   let origRed= base[3] + red;
   let origBlue= base[4] + blue;
   let origGreen= base[5] + green;
  
  
    document.getElementById("d").value = origRed;
    document.getElementById("e").value = origBlue;
    document.getElementById("f").value = origGreen;
   
}
 //exchanges in the standard to lesser popup
 function stan(){
 //stops code from auto closing window.
 event.preventDefault();
 //take input of left side inputs
  let x = document.getElementById('6').value;
  let y = document.getElementById('9').value;
  let z = document.getElementById('11').value;
 //conversion 
  let changeRed = document.getElementById("6").value
  let changeBlue = document.getElementById("9").value
  let changeGreen = document.getElementById("11").value
  let red = Math.floor(changeRed * mutagens[3].rate);
  let blue = Math.floor(changeBlue * mutagens[4].rate);
  let green = Math.floor(changeGreen * mutagens[5].rate);
 //give value to right side inputs 
  document.getElementById("7").value = red;
  document.getElementById("10").value = blue;
  document.getElementById("12").value = green;
  //update side inputs lesser
  let originalRed = base[3] - changeRed;
  let originalBlue = base[4] - changeBlue;
  let originalGreen = base[5] - changeGreen;
  //adjust values
  document.getElementById("d").value = originalRed 
  document.getElementById("e").value = originalBlue
  document.getElementById("f").value = originalGreen

 //update side inputs standard 
 let origRed= base[3] + red;
 let origBlue= base[4] + blue;
 let origGreen= base[5] + green;


  document.getElementById("g").value = origRed;
  document.getElementById("h").value = origBlue;
  document.getElementById("i").value = origGreen;
 
 };
//exchange in the greater to lesser popup
function great(){
       //stops code from auto closing window.
 event.preventDefault();
//conversion
  let changeRed = document.getElementById("13").value
  let changeBlue = document.getElementById("15").value
  let changeGreen = document.getElementById("17").value
  let red = Math.floor(changeRed * mutagens[6].rate);
  let blue = Math.floor(changeBlue * mutagens[7].rate);
  let green = Math.floor(changeGreen * mutagens[8].rate);
 //give value to right side inputs 
  document.getElementById("14").value = red;
  document.getElementById("16").value = blue;
  document.getElementById("18").value = green;
  //update side inputs lesser
  let originalRed = base[6] - changeRed;
  let originalBlue = base[7] - changeBlue;
  let originalGreen = base[8] - changeGreen;
  //adjust values
  document.getElementById("g").value = originalRed 
  document.getElementById("h").value = originalBlue
  document.getElementById("i").value = originalGreen

 //update side inputs standard 
 let origRed= base[6] + red;
 let origBlue= base[7] + blue;
 let origGreen= base[8] + green;

  document.getElementById("a").value = origRed;
  document.getElementById("b").value = origBlue;
  document.getElementById("c").value = origGreen;
 
     };

//Character constructor? Take abilities and let user make a witcher?
/*function Witcher(firstName, lastName, alias, school, abilities) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.alias = alias;
    this.school = school;
    this.mentor = mentor;
    this.abilities = abilities;
  };

  let changeRed = base[0] - x;
    let changeBlue = base[1] - y;
    let changeGreen = base[2] - z;
  */