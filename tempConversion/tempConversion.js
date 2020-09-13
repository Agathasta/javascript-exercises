/*  Fahrenheit to Celsius - ftoc: [°C] = ([°F] − 32) × ​5⁄9
    Celsius to Fahrenheit - ctof [°F] = [°C] × ​9⁄5 + 32 */




const ftoc = function (f) {
  let c = (f - 32) * (5 / 9);
  c = (Math.round(c * 10)) / 10;
  return c;
}

const ctof = function (c) {
  let f = (c * (9 / 5)) + 32;
  f = (Math.round(f * 10)) / 10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
