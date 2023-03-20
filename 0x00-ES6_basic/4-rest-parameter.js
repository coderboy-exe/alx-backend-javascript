export default function returnHowManyArguments(...args) {
  let num = 0;
  for (let arg of args) num += 1;
  return num;
}
