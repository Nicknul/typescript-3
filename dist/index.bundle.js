(() => {
  'use strict';
  function t(n) {
    return (
      (t =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      t(n)
    );
  }
  function n(t, n) {
    for (var o = 0; o < n.length; o++) {
      var r = n[o];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, e(r.key), r);
    }
  }
  function o(t, o, e) {
    return o && n(t.prototype, o), e && n(t, e), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
  }
  function e(n) {
    var o = (function (n, o) {
      if ('object' != t(n) || !n) return n;
      var e = n[Symbol.toPrimitive];
      if (void 0 !== e) {
        var r = e.call(n, 'string');
        if ('object' != t(r)) return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(n);
    })(n);
    return 'symbol' == t(o) ? o : o + '';
  }
  var r = o(function t(n, o, e) {
    !(function (t, n) {
      if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
    })(this, t),
      (this.name = n),
      (this.age = o),
      (this.job = e);
  });
  [new r('정호연', 27, '학생'), new r('이연승', 30, '직장인'), new r('겨울이', 4, '학생')].forEach(function (t) {
    console.log('이름 : '.concat(t.name, ', 나이 : ').concat(t.age, ', 직업 : ').concat(t.job));
  });
})();
