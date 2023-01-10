function left_digit(strParam) {
  let a = [...strParam];
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (isNaN(+a[i]) === false) {
      res = +a[i];
      break;
    }
  }
  return res;
}
console.log(left_digit("Welcome2back"));
