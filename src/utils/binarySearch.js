const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = {
  arr,
  target: 3,
  lo: 0,
  hi: arr.length - 1,
  mid: null,
  loArr: [],
  hiArr: [],
  midArr: [],
  result: null,
};

export function binarySearch(data) {
  if (data.lo > data.hi) {
    data.result = -1;
    return data;
  }
  data.mid = data.lo + Math.floor((data.hi - data.lo) / 2);
  data.loArr.push(data.lo);
  data.hiArr.push(data.hi);
  data.midArr.push(data.mid);
  if (data.target < data.arr[data.mid]) {
    data.hi = data.mid - 1;
    return binarySearch(data);
  } else if (data.target > data.arr[data.mid]) {
    data.lo = data.mid + 1;
    return binarySearch(data);
  } else {
    data.result = data.mid;
    return data;
  }
}
