class String {
  static isNullOrEmpty(inputString) {
    return !inputString || inputString === "";
  }
}

class Object {
  static isNullOrUndefined(inputObj) {
    return !inputObj;
  }
}
