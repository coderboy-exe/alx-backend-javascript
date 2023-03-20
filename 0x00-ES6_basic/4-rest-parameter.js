export default function returnHowManyArguments(...args) {
  let num = 0;
  for (const arg of args) num += 1;
  return num;
}
