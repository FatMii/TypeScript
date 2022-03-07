"use strict";
var myAdd = function (x, y) {
    return x + y;
};
//1.可选参数 2.默认参数 3.剩余参数
//多参数传递
function getResultInfo() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    console.log(result);
}
getResultInfo(1, 2, 3, 4, 5);
//函数重载
/* function getName(name: string);
  
  function getName(name: string, id: number);
  
  getName("2", 1);
   */
//this指向
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        console.log(this);
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
