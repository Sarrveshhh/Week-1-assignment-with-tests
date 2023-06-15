function isAnagram(str1, str2) {
  const n1 = str1.length;
  const n2 = str2.length;

  if(str1 === null && str2 === null){
    return true;
  }

  if (n1 !== n2) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < n1; i++) {
    let char = str1[i];
    if (!obj1[char]) {
      obj1[char] = 1;
    } else {
      let v = obj1[char];
      obj1[char] = v + 1;
    }
  }

  for (let i = 0; i < n2; i++) {
    let char = str2[i];
    if (!obj2[char]) {
      obj2[char] = 1;
    } else {
      let v = obj2[char];
      obj2[char] = v + 1;
    }
  }

  return compareObjects(obj1, obj2);
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
