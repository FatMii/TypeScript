let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//1.可选参数 2.默认参数 3.剩余参数
//多参数传递
function getResultInfo(...result: number[]): void {
  console.log(result);
}

getResultInfo(1, 2, 3, 4, 5);

//函数重载
/* function getName(name: string);
  
  function getName(name: string, id: number);
  
  getName("2", 1);
   */

//this指向

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     console.log(this);
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
     
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
