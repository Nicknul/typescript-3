'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
var JeongHoyeon = /*#__PURE__*/ _createClass(function JeongHoyeon(name, age, job) {
  _classCallCheck(this, JeongHoyeon);
  this.name = name;
  this.age = age;
  this.job = job;
});
var JeongHoyeonArray = [
  new JeongHoyeon('정호연', 27, '학생'),
  new JeongHoyeon('이연승', 30, '직장인'),
  new JeongHoyeon('겨울이', 4, '학생'),
];
var printJeongHoyeonArray = function printJeongHoyeonArray(array) {
  array.forEach(function (person) {
    console.log(
      '\uC774\uB984 : '
        .concat(person.name, ', \uB098\uC774 : ')
        .concat(person.age, ', \uC9C1\uC5C5 : ')
        .concat(person.job)
    );
  });
};
printJeongHoyeonArray(JeongHoyeonArray);
