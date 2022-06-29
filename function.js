function compareArr(arr) {
  return arr.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
}

module.exports = {
  compareArr,
};
