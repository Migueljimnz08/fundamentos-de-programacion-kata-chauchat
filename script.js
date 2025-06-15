//Ametralladora 
const cargador = ['pium!','pium!','pium!','pium!','pium!','pium!','pium!'];
let chauchat = (arr) => {
    let ramita = Math.floor(Math.random() * 101);
    let j = 3;
    if(ramita <= 80) {
        console.log('Illo, me he quedao pillá!');
    } else {
        for(let i= 0; i< arr.length; i++){
    if(i == j) {
         j += 3;
         console.log(' ');
         i--;
    } else {
     console.log(arr[i]);
    }
  }    
 }
}
console.log(chauchat(cargador));



//return arr.forEach(bul => {
  //      console.log(bul);
   // });}
    //for(i=0; i < arr.lenght; i+3){
      //  console.log(' ');
    //}