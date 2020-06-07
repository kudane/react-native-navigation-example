class String {
  static isNullOrEmpty(inputString) {
    return !inputString || inputString === "" ? true : false;
  }
}

class Object {
  static isNullOrUndefined(inputObj) {
    return !inputObj ? true : false;
  }
}
