class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log(this.name);
  }
}
