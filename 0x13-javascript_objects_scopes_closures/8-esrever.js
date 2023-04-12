#!/usr/bin/node
exports.esrever = function (list) {
  return list.sort(function(a, b) {
    return list.indexOf(b) - list.indexOf(a);
  });
}

