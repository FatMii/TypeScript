//多参数传递
function getInfo(...result: number[]): void {
  console.log(result);
}

getInfo(1, 2, 3, 4, 5);

//函数重载
/* function getName(name: string);

function getName(name: string, id: number);

getName("2", 1);
 */