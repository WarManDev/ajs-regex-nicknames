export default class Validator {
  static validateUsername(userName) {
    return /^[a-z]+[a-z-_\d]*[a-z]$/i.test(userName) && !/\d{4}/.test(userName);
  }
}
