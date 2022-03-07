declare let jQuery: (params: string) => void;
declare var foo: number;
declare const fool1: number = 123;
declare function greet(greeting: string): void;

declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}
