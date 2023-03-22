export default function returnHowManyArguments(...args) {
  let num = 0;
  /* eslint-disable no-unused-vars */
  for (const arg of args) num += 1;
  /* eslint-disable no-unused-vars */
  return num;
}
