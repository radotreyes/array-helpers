/* eslint-disable */
module.exports = (function() {
  Array.fromRange = function fromRange(lower, upper) {
    return Array.from(Array(upper - lower + 1).keys()).map(key => key + lower);
  }

  Array.prototype.instancesOf = function instancesOf(member) {
    var deepEqual = function(a, b) {
      if (a === b) {
        return true;
      } else if (
        typeof a == 'object' &&
        a != null &&
        (typeof b == 'object' && b != null);
      ) {
        if (Object.keys(a).length != Object.keys(b).length) return false;

        for (var prop in a) {
          if (b.hasOwnProperty(prop)) {
            if (!deepEqual(a[prop], b[prop])) return false;
          } else return false;
        }

        return true;
      } else return false;
    }
    return this.filter(element => deepEqual(element, member)).length;
  }

  Array.prototype.isPure = function isPure() {
    var type;
    var impure = 0;
    var arr = Array.from(this);
    for (var index in arr) {
      if (!index) type = typeof b;
      impure += typeof arr[index] == type;
    }
    return !impure ? true : false;
  }

  Array.prototype.rotateLeft = function rotateLeft(count = 1) {
    var arr = Array.from(this);
    for (var i = 0; i < count; i++) {
      arr.push(arr.shift());
    }

    return arr;
  }

  Array.prototype.rotateRight = function rotateRight(count = 1) {
    var arr = Array.from(this);
    for (var i = 0; i < count; i++) {
      arr.unshift(arr.pop());
    }

    return arr;
  }
})()
