/* eslint-disable */
'use strict';
function _interopDefault(a) {
  return a && 'object' == typeof a && 'default' in a ? a['default'] : a;
}
var _regeneratorRuntime = _interopDefault(require('babel-runtime/regenerator')),
  _slicedToArray = _interopDefault(
    require('babel-runtime/helpers/slicedToArray'),
  ),
  _asyncToGenerator = _interopDefault(
    require('babel-runtime/helpers/asyncToGenerator'),
  ),
  _classCallCheck = _interopDefault(
    require('babel-runtime/helpers/classCallCheck'),
  ),
  _createClass = _interopDefault(require('babel-runtime/helpers/createClass')),
  axios = _interopDefault(require('axios')),
  kitsuCore = require('kitsu-core'),
  Kitsu = (function() {
    function a() {
      var b =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      _classCallCheck(this, a),
        (this.fetch = this.get),
        (this.update = this.patch),
        (this.create = this.post),
        (this.camel =
          !1 === b.camelCaseTypes
            ? function(a) {
                return a;
              }
            : kitsuCore.camel),
        (this.resCase =
          'none' === b.resourceCase
            ? function(a) {
                return a;
              }
            : 'snake' === b.resourceCase ? kitsuCore.snake : kitsuCore.kebab),
        (this.plural =
          !1 === b.pluralize
            ? function(a) {
                return a;
              }
            : require('pluralize')),
        (this.headers = Object.assign({}, b.headers, {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        })),
        (this.axios = axios.create({
          baseURL: b.baseURL || 'https://kitsu.io/api/edge',
          timeout: b.timeout || 3e4,
        }));
    }
    return (
      _createClass(a, [
        {
          key: 'get',
          value: (function() {
            var a = _asyncToGenerator(
              _regeneratorRuntime.mark(function a(b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  l =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return _regeneratorRuntime.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (c = b.split('/')),
                            (d = _slicedToArray(c, 3)),
                            (e = d[0]),
                            (f = d[1]),
                            (g = d[2]),
                            (h = this.plural(this.resCase(e))),
                            f && (h += `/${f}`),
                            g && (h += `/${this.resCase(g)}`),
                            (a.next = 7),
                            this.axios.get(h, {
                              params: k,
                              paramsSerializer: function(a) {
                                return kitsuCore.query(a);
                              },
                              headers: Object.assign(this.headers, l),
                            })
                          );
                        case 7:
                          return (
                            (i = a.sent),
                            (j = i.data),
                            a.abrupt('return', kitsuCore.deserialise(j))
                          );
                        case 12:
                          throw ((a.prev = 12),
                          (a.t0 = a['catch'](0)),
                          kitsuCore.error(a.t0));
                        case 15:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 12]],
                );
              }),
            );
            return function() {
              return a.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'patch',
          value: (function() {
            var a = _asyncToGenerator(
              _regeneratorRuntime.mark(function a(b, c) {
                var d,
                  e,
                  f,
                  g,
                  h =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return _regeneratorRuntime.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            kitsuCore.serialise.apply(this, [b, c, 'PATCH'])
                          );
                        case 3:
                          return (
                            (d = a.sent),
                            (e = this.plural(this.resCase(b)) + '/' + c.id),
                            (a.next = 7),
                            this.axios.patch(e, d, {
                              headers: Object.assign(this.headers, h),
                            })
                          );
                        case 7:
                          return (
                            (f = a.sent), (g = f.data), a.abrupt('return', g)
                          );
                        case 12:
                          throw ((a.prev = 12),
                          (a.t0 = a['catch'](0)),
                          kitsuCore.error(a.t0));
                        case 15:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 12]],
                );
              }),
            );
            return function() {
              return a.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'post',
          value: (function() {
            var a = _asyncToGenerator(
              _regeneratorRuntime.mark(function a(b, c) {
                var d,
                  e,
                  f,
                  g =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return _regeneratorRuntime.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (d = this.plural(this.resCase(b))),
                            (a.t0 = this.axios),
                            (a.t1 = d),
                            (a.next = 6),
                            kitsuCore.serialise.apply(this, [b, c])
                          );
                        case 6:
                          return (
                            (a.t2 = a.sent),
                            (a.t3 = {
                              headers: Object.assign(this.headers, g),
                            }),
                            (a.next = 10),
                            a.t0.post.call(a.t0, a.t1, a.t2, a.t3)
                          );
                        case 10:
                          return (
                            (e = a.sent), (f = e.data), a.abrupt('return', f)
                          );
                        case 15:
                          throw ((a.prev = 15),
                          (a.t4 = a['catch'](0)),
                          kitsuCore.error(a.t4));
                        case 18:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 15]],
                );
              }),
            );
            return function() {
              return a.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'remove',
          value: (function() {
            var a = _asyncToGenerator(
              _regeneratorRuntime.mark(function a(b, c) {
                var d,
                  e,
                  f,
                  g =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                return _regeneratorRuntime.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (d = this.plural(this.resCase(b)) + '/' + c),
                            (a.t0 = this.axios),
                            (a.t1 = d),
                            (a.next = 6),
                            kitsuCore.serialise.apply(this, [
                              b,
                              { id: c },
                              'DELETE',
                            ])
                          );
                        case 6:
                          return (
                            (a.t2 = a.sent),
                            (a.t3 = Object.assign(this.headers, g)),
                            (a.t4 = { data: a.t2, headers: a.t3 }),
                            (a.next = 11),
                            a.t0.delete.call(a.t0, a.t1, a.t4)
                          );
                        case 11:
                          return (
                            (e = a.sent), (f = e.data), a.abrupt('return', f)
                          );
                        case 16:
                          throw ((a.prev = 16),
                          (a.t5 = a['catch'](0)),
                          kitsuCore.error(a.t5));
                        case 19:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 16]],
                );
              }),
            );
            return function() {
              return a.apply(this, arguments);
            };
          })(),
        },
        {
          key: 'self',
          value: (function() {
            var a = _asyncToGenerator(
              _regeneratorRuntime.mark(function a() {
                var b,
                  c =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  d =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return _regeneratorRuntime.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            this.get(
                              'users',
                              Object.assign({ filter: { self: !0 } }, c),
                              d,
                            )
                          );
                        case 3:
                          return (b = a.sent), a.abrupt('return', b.data[0]);
                        case 7:
                          throw ((a.prev = 7),
                          (a.t0 = a['catch'](0)),
                          kitsuCore.error(a.t0));
                        case 10:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 7]],
                );
              }),
            );
            return function() {
              return a.apply(this, arguments);
            };
          })(),
        },
      ]),
      a
    );
  })();
module.exports = Kitsu;
//# sourceMappingURL=index.js.map
