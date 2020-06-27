function palindrome(str) {

    var reg = /[\W_]/g;
    var smallStr = str.toLowerCase().replace(reg, "");
    var reserved = smallStr.split("").reverse().join("");
    if (reserved === smallStr) {
      return true;
    } else {
      return false;
    }
}

  