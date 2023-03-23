export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  /* eslint-disable no-undef */
  /* eslint-disable no-restricted-globals */
  set code(value) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = name;
  }
  /* eslint-disable no-restricted-globals */
  /* eslint-disable no-undef */

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
