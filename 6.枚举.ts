//枚举类型,如果不赋值,值就是索引值
enum Flag {
  fail = 0,
  success = 1,
}

let f: Flag = Flag.fail;
console.log(f); //0
