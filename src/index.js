import "./style.css";
document.addEventListener("click", async () => {
  const func = (await import(/* webpackPrefetch: true */ "./click.js")).default;
  func();
});
console.log(123);
