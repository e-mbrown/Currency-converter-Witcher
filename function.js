//Object with conversion rates
const mutagens = [
{
  name:'Lesser Red',
  rate: 0.25,
},
{
  name:'Lesser Blue',
  rate: 0.25,
},
{
  name:'Lesser Green',
  rate: 0.25,
},
{
  name:'Red',
  rate: 1,
},
{
  name:'Blue',
  rate: 1,
},
{
  name:'Green',
  rate: 1,
},
{
  name:'Greater Red',
  rate: 1.45,
},
{
  name:'Greater Blue',
  rate: 1.45,
},
{
  name:'Greater Green',
  rate: 1.45,
}
];
//abilities array
//const baseMutations = ['Deadly counter', 'Bloodbath', 'Magic Sensibilities', 'Piercing Cold', 'Toxic Blood', 'Euphoria', 'Adrenaline Rush', 'Conductors of Magic', 'Second life', 'Cat eyes', 'Mutated Skin', 'Metamorphosis']

//holds results of loop
let base = [];

function mutagenSelector() {
   //chooses index 3-5 and 6-8
   let x = Math.floor(Math.random()* 3+3);
  let y = Math.floor(Math.random()* 3+6);
  let add = Math.floor(Math.random()* 15+5);
//assign numbers
  for (i = 0; i < mutagens.length; i++) {
   let amount1 = Math.floor(Math.random() * 5+5);
   //adds to index 0-2
   if (i <=2) {
      amount1 = amount1 + add;
    } else {
   //excludes better mutagens randomly  
    if (i === x) {
     amount1 = 0;
      }else if (i === y ) {
       amount1 = 0;
        }  
   }   
    //let results = [`${mutagens[i]}: ${amount1}`];
   //console.log(`${mutagens[i]}: ${amount1}`)
    base.push(Number(`${amount1}`));

    }
    //puts results onto the page
  document.getElementById('a').value = base[0];
  document.getElementById('b').value = base[1];
  document.getElementById('c').value = base[2];
  document.getElementById('d').value = base[3];
  document.getElementById('e').value = base[4];
  document.getElementById('f').value = base[5];
  document.getElementById('g').value = base[6];
  document.getElementById('h').value = base[7];
  document.getElementById('i').value = base[8];
 document.getElementById('main').style.backgroundImage = "url('assets/placemat1.jpg')";
};  
