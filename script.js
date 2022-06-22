const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

// Eseguire console.log() di ogni elemento di array
(function () {
  
  actionFn = (element) => {
    console.log(element);
  };

  const elementList = array1.forEach(actionFn);
  
  elementList;
})();

// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index
function funct() {
  let timer = 0;

  array1.forEach((element) => {
    setTimeout(() => {
      console.log(`Dopo ${element - 1} secondi stampo in console:`, array1[element - 1]);
    }, timer);

    timer = timer + 1000;
  });
};
console.log(funct());

// Tenere dentro l'array solo i numeri pari
(function () {

  showEvenNumbers = (element) => element % 2 === 0;
  const evenNumbers = array1.filter(showEvenNumbers);
  console.log(evenNumbers);

})();

// Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], usare utility come Array.includes oppure Array.indexOf.
(function () {
  const array2 = [10, 1, 2, 5, 6];

  commonNumbers = (element) => array1.includes(element);

  console.log(array2.filter(commonNumbers))
})();



