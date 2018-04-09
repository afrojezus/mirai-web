/* eslint-disable */
(function(a, b) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = b(
        require('babel-runtime/regenerator'),
        require('babel-runtime/helpers/slicedToArray'),
        require('babel-runtime/helpers/asyncToGenerator'),
        require('babel-runtime/helpers/classCallCheck'),
        require('babel-runtime/helpers/createClass'),
        require('axios'),
        require('kitsu-core/legacy'),
      ))
    : 'function' == typeof define && define.amd
      ? define([
          'babel-runtime/regenerator',
          'babel-runtime/helpers/slicedToArray',
          'babel-runtime/helpers/asyncToGenerator',
          'babel-runtime/helpers/classCallCheck',
          'babel-runtime/helpers/createClass',
          'axios',
          'kitsu-core',
        ], b)
      : (a.Kitsu = b(
          a._regeneratorRuntime,
          a._slicedToArray,
          a._asyncToGenerator,
          a._classCallCheck,
          a._createClass,
          a.axios,
          a.kitsuCore,
        ));
})(this, function(a, b, c, d, e, f, g) {
  'use strict';
  (a = a && a.hasOwnProperty('default') ? a['default'] : a),
    (b = b && b.hasOwnProperty('default') ? b['default'] : b),
    (c = c && c.hasOwnProperty('default') ? c['default'] : c),
    (d = d && d.hasOwnProperty('default') ? d['default'] : d),
    (e = e && e.hasOwnProperty('default') ? e['default'] : e),
    (f = f && f.hasOwnProperty('default') ? f['default'] : f);
  var h = (function() {
    function h() {
      var a =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      d(this, h),
        (this.fetch = this.get),
        (this.update = this.patch),
        (this.create = this.post),
        (this.camel =
          !1 === a.camelCaseTypes
            ? function(a) {
                return a;
              }
            : g.camel),
        (this.resCase =
          'none' === a.resourceCase
            ? function(a) {
                return a;
              }
            : 'snake' === a.resourceCase ? g.snake : g.kebab),
        (this.plural =
          !1 === a.pluralize
            ? function(a) {
                return a;
              }
            : require('pluralize')),
        (this.headers = Object.assign({}, a.headers, {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        })),
        (this.axios = f.create({
          baseURL: a.baseURL || 'https://kitsu.io/api/edge',
          timeout: a.timeout || 3e4,
        }));
    }
    return (
      e(h, [
        {
          key: 'get',
          value: (function() {
            var d = c(
              a.mark(function c(d) {
                var e,
                  f,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (e = d.split('/')),
                            (f = b(e, 3)),
                            (h = f[0]),
                            (i = f[1]),
                            (j = f[2]),
                            (k = this.plural(this.resCase(h))),
                            i && (k += '/' + i),
                            j && (k += '/' + this.resCase(j)),
                            (a.next = 7),
                            this.axios.get(k, {
                              params: n,
                              paramsSerializer: function(a) {
                                return g.query(a);
                              },
                              headers: Object.assign(this.headers, o),
                            })
                          );
                        case 7:
                          return (
                            (l = a.sent),
                            (m = l.data),
                            a.abrupt('return', g.deserialise(m))
                          );
                        case 12:
                          throw ((a.prev = 12),
                          (a.t0 = a['catch'](0)),
                          g.error(a.t0));
                        case 15:
                        case 'end':
                          return a.stop();
                      }
                  },
                  c,
                  this,
                  [[0, 12]],
                );
              }),
            );
            return function() {
              return d.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'patch',
          value: (function() {
            var b = c(
              a.mark(function b(c, d) {
                var e,
                  f,
                  h,
                  i,
                  j =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            g.serialise.apply(this, [c, d, 'PATCH'])
                          );
                        case 3:
                          return (
                            (e = a.sent),
                            (f = this.plural(this.resCase(c)) + '/' + d.id),
                            (a.next = 7),
                            this.axios.patch(f, e, {
                              headers: Object.assign(this.headers, j),
                            })
                          );
                        case 7:
                          return (
                            (h = a.sent), (i = h.data), a.abrupt('return', i)
                          );
                        case 12:
                          throw ((a.prev = 12),
                          (a.t0 = a['catch'](0)),
                          g.error(a.t0));
                        case 15:
                        case 'end':
                          return a.stop();
                      }
                  },
                  b,
                  this,
                  [[0, 12]],
                );
              }),
            );
            return function() {
              return b.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'post',
          value: (function() {
            var b = c(
              a.mark(function b(c, d) {
                var e,
                  f,
                  h,
                  i =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (e = this.plural(this.resCase(c))),
                            (a.t0 = this.axios),
                            (a.t1 = e),
                            (a.next = 6),
                            g.serialise.apply(this, [c, d])
                          );
                        case 6:
                          return (
                            (a.t2 = a.sent),
                            (a.t3 = {
                              headers: Object.assign(this.headers, i),
                            }),
                            (a.next = 10),
                            a.t0.post.call(a.t0, a.t1, a.t2, a.t3)
                          );
                        case 10:
                          return (
                            (f = a.sent), (h = f.data), a.abrupt('return', h)
                          );
                        case 15:
                          throw ((a.prev = 15),
                          (a.t4 = a['catch'](0)),
                          g.error(a.t4));
                        case 18:
                        case 'end':
                          return a.stop();
                      }
                  },
                  b,
                  this,
                  [[0, 15]],
                );
              }),
            );
            return function() {
              return b.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'remove',
          value: (function() {
            var b = c(
              a.mark(function b(c, d) {
                var e,
                  f,
                  h,
                  i =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (e = this.plural(this.resCase(c)) + '/' + d),
                            (a.t0 = this.axios),
                            (a.t1 = e),
                            (a.next = 6),
                            g.serialise.apply(this, [c, { id: d }, 'DELETE'])
                          );
                        case 6:
                          return (
                            (a.t2 = a.sent),
                            (a.t3 = Object.assign(this.headers, i)),
                            (a.t4 = { data: a.t2, headers: a.t3 }),
                            (a.next = 11),
                            a.t0.delete.call(a.t0, a.t1, a.t4)
                          );
                        case 11:
                          return (
                            (f = a.sent), (h = f.data), a.abrupt('return', h)
                          );
                        case 16:
                          throw ((a.prev = 16),
                          (a.t5 = a['catch'](0)),
                          g.error(a.t5));
                        case 19:
                        case 'end':
                          return a.stop();
                      }
                  },
                  b,
                  this,
                  [[0, 16]],
                );
              }),
            );
            return function() {
              return b.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'self',
          value: (function() {
            var b = c(
              a.mark(function b() {
                var c,
                  d =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            this.get(
                              'users',
                              Object.assign({ filter: { self: !0 } }, d),
                              e,
                            )
                          );
                        case 3:
                          return (c = a.sent), a.abrupt('return', c.data[0]);
                        case 7:
                          throw ((a.prev = 7),
                          (a.t0 = a['catch'](0)),
                          g.error(a.t0));
                        case 10:
                        case 'end':
                          return a.stop();
                      }
                  },
                  b,
                  this,
                  [[0, 7]],
                );
              }),
            );
            return function() {
              return b.apply(this, arguments);
            };
          })(),
        },
      ]),
      h
    );
  })();
  return h;
});
//# sourceMappingURL=index.js.map
