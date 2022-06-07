import "./style.css";
class Greeter {
  constructor(public message: string) {
    this.message = message;
  }
  greet() {
    return "hello, " + " " + this.message;
  }
}

let greeter = new Greeter("world");
alert(greeter.greet());
