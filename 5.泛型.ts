console.log("泛型:");
//1.泛型函数
function getInfo<T>(value: T): T {
  console.log(value);
  return value;
}

getInfo<number>(123);
getInfo<string>("1234");

//2.泛型类
class MinClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num);
  }

  min(): T {
    var minNum = this.list[0];
    this.list.forEach((element) => {
      if (minNum > element) {
        minNum = element;
      }
    });
    return minNum;
  }
}
var m = new MinClass<number>();
m.add(231);
m.add(131);
m.add(252);

console.log(m.min());

//3.泛型接口
interface Config {
  <T>(value1: T): T;
}

var setData: Config = function <T>(value1: T): T {
  return value1;
};

setData<number>(123);
setData<string>("123");

//4.将类作为参数类型的泛型类
class User {
  username: string | undefined;
  password: string | undefined;
}

class Article {
  title: string | undefined;
  desc: string | undefined;
}

class mysqlDB<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
}

var u1 = new User();
u1.username = "owllai";
u1.password = "123456";


var db = new mysqlDB<User>();
db.add(u1);
