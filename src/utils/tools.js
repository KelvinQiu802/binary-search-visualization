export function strToArr(arrStr) {
  return arrStr.split(',');
}

export function getOffsetByIndex(index) {
  const elem = document.getElementById(index);
  const offset = elem.offsetLeft;
  return offset;
}
