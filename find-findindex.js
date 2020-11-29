function findUserByUsername(arr, key) {
  return arr.find(function (obj) {
    return obj.username === key;
  });
}

function removeUser(arr, key) {
  let remove = arr.findIndex(function (obj) {
    return obj.username === key;
  });
  if (remove !== -1) {
    return arr.splice(remove, 1)[0];
  }
}
