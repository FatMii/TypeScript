//多参数传递
function get(...result: number[]): void {
  console.log(result);
}

get(1, 2, 3, 4, 5);

//函数重载
function getName(name: string);

function getName(name: string, id: number);

getName("2", 1);
