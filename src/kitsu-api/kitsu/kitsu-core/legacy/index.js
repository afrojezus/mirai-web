/* eslint-disable */
(function(a, b) {
  'object' == typeof exports && 'undefined' != typeof module
    ? b(
        exports,
        require('babel-runtime/regenerator'),
        require('babel-runtime/helpers/typeof'),
        require('babel-runtime/helpers/asyncToGenerator'),
      )
    : 'function' == typeof define && define.amd
      ? define([
          'exports',
          'babel-runtime/regenerator',
          'babel-runtime/helpers/typeof',
          'babel-runtime/helpers/asyncToGenerator',
        ], b)
      : b(
          (a.Kitsu = {}),
          a._regeneratorRuntime,
          a._typeof,
          a._asyncToGenerator,
        );
})(this, function(a, b, c, d) {
  'use strict';
  function e(a) {
    if (a.response) {
      var b = a.response.data;
      b && b.errors && (a.errors = b.errors);
    }
    throw a;
  }
  function f(a, b) {
    var d = '';
    for (var e in a) {
      var g = a[e];
      b && (d += '&' + b),
        (d +=
          'object' === ('undefined' == typeof g ? 'undefined' : c(g))
            ? '[' + e + ']' + f(g)
            : '[' + e + ']=' + g);
    }
    return d;
  }
  function g(a) {
    var b = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
      d = '';
    for (var e in a) {
      var g = a[e];
      d +=
        'object' === ('undefined' == typeof g ? 'undefined' : c(g))
          ? f(g, e)
          : '&' + e + '=' + g;
    }
    return (d = encodeURI(d.slice(1))), a ? (b ? '?' + d : d) : '';
  }
  (b = b && b.hasOwnProperty('default') ? b['default'] : b),
    (c = c && c.hasOwnProperty('default') ? c['default'] : c),
    (d = d && d.hasOwnProperty('default') ? d['default'] : d);
  var h = (function() {
      var a = d(
        b.mark(function a(e) {
          var f = this;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    if (
                      'object' !==
                        ('undefined' == typeof e ? 'undefined' : c(e)) ||
                      null === e
                    ) {
                      a.next = 7;
                      break;
                    }
                    if (!Array.isArray(e)) {
                      a.next = 6;
                      break;
                    }
                    return (
                      (a.next = 4),
                      e.map(
                        (function() {
                          var a = d(
                            b.mark(function a(c) {
                              return b.wrap(
                                function(a) {
                                  for (;;)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        return a.abrupt('return', h(c));
                                      case 1:
                                      case 'end':
                                        return a.stop();
                                    }
                                },
                                a,
                                f,
                              );
                            }),
                          );
                          return function() {
                            return a.apply(this, arguments);
                          };
                        })(),
                      )
                    );
                  case 4:
                    a.next = 7;
                    break;
                  case 6:
                    e.attributes &&
                      e.attributes.constructor === Object &&
                      (Object.keys(e.attributes).forEach(function(a) {
                        e[a] = e.attributes[a];
                      }),
                      delete e.attributes);
                  case 7:
                    return a.abrupt('return', e);
                  case 8:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    i = (function() {
      var a = d(
        b.mark(function a(c, d) {
          var f,
            g = d.id,
            h = d.type;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.prev = 0),
                      (f = c.filter(function(a) {
                        return a.id === g && a.type === h;
                      })[0] || { id: g, type: h }),
                      a.abrupt('return', Object.assign({}, f))
                    );
                  case 5:
                    (a.prev = 5), (a.t0 = a['catch'](0)), e(a.t0);
                  case 8:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
            [[0, 5]],
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    j = (function() {
      var a = d(
        b.mark(function a(c, d) {
          var e,
            f = c.id,
            g = c.type,
            j = c.meta;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), i(d, { id: f, type: g });
                  case 2:
                    if (((e = a.sent), !e.relationships)) {
                      a.next = 6;
                      break;
                    }
                    return (a.next = 6), m(e, d);
                  case 6:
                    return j && (e.meta = j), a.abrupt('return', h(e));
                  case 8:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    k = (function() {
      var a = d(
        b.mark(function a(c, d, e) {
          var f, g, h, i, k, l;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (c[e] = []),
                      (f = !0),
                      (g = !1),
                      (h = void 0),
                      (a.prev = 4),
                      (a.next = 7),
                      c.relationships[e].data
                    );
                  case 7:
                    (a.t0 = Symbol.iterator), (i = a.sent[a.t0]());
                  case 9:
                    if ((f = (k = i.next()).done)) {
                      a.next = 19;
                      break;
                    }
                    return (l = k.value), (a.t1 = c[e]), (a.next = 14), j(l, d);
                  case 14:
                    (a.t2 = a.sent), a.t1.push.call(a.t1, a.t2);
                  case 16:
                    (f = !0), (a.next = 9);
                    break;
                  case 19:
                    a.next = 25;
                    break;
                  case 21:
                    (a.prev = 21), (a.t3 = a['catch'](4)), (g = !0), (h = a.t3);
                  case 25:
                    (a.prev = 25), (a.prev = 26), !f && i.return && i.return();
                  case 28:
                    if (((a.prev = 28), !g)) {
                      a.next = 31;
                      break;
                    }
                    throw h;
                  case 31:
                    return a.finish(28);
                  case 32:
                    return a.finish(25);
                  case 33:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
            [[4, 21, 25, 33], [26, , 28, 32]],
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    l = (function() {
      var a = d(
        b.mark(function a(c, d, e) {
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (a.next = 2), j(c.relationships[e].data, d);
                  case 2:
                    (c[e] = a.sent), delete c[e].relationships;
                  case 4:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    m = (function() {
      var a = d(
        b.mark(function a(c, d) {
          var e, f, g;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (e = c.relationships), (f = !1), (a.next = 4), e;
                  case 4:
                    a.t0 = b.keys(a.sent);
                  case 5:
                    if ((a.t1 = a.t0()).done) {
                      a.next = 19;
                      break;
                    }
                    if (
                      ((g = a.t1.value),
                      !(e[g].data && Array.isArray(e[g].data)))
                    ) {
                      a.next = 13;
                      break;
                    }
                    return (a.next = 10), k(c, d, g);
                  case 10:
                    (f = !0), (a.next = 17);
                    break;
                  case 13:
                    if (!e[g].data) {
                      a.next = 17;
                      break;
                    }
                    return (a.next = 16), l(c, d, g);
                  case 16:
                    f = !0;
                  case 17:
                    a.next = 5;
                    break;
                  case 19:
                    return f && delete c.relationships, a.abrupt('return', c);
                  case 21:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    n = (function() {
      var a = d(
        b.mark(function a(c) {
          var d, e, f, g, i, j;
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (d = !0),
                      (e = !1),
                      (f = void 0),
                      (a.prev = 3),
                      (a.next = 6),
                      c.data
                    );
                  case 6:
                    (a.t0 = Symbol.iterator), (g = a.sent[a.t0]());
                  case 8:
                    if ((d = (i = g.next()).done)) {
                      a.next = 22;
                      break;
                    }
                    if (((j = i.value), !c.included)) {
                      a.next = 14;
                      break;
                    }
                    return (a.next = 13), m(j, c.included);
                  case 13:
                    j = a.sent;
                  case 14:
                    if (!j.attributes) {
                      a.next = 18;
                      break;
                    }
                    return (a.next = 17), h(j);
                  case 17:
                    j = a.sent;
                  case 18:
                    c.data[c.data.indexOf(j)] = j;
                  case 19:
                    (d = !0), (a.next = 8);
                    break;
                  case 22:
                    a.next = 28;
                    break;
                  case 24:
                    (a.prev = 24), (a.t1 = a['catch'](3)), (e = !0), (f = a.t1);
                  case 28:
                    (a.prev = 28), (a.prev = 29), !d && g.return && g.return();
                  case 31:
                    if (((a.prev = 31), !e)) {
                      a.next = 34;
                      break;
                    }
                    throw f;
                  case 34:
                    return a.finish(31);
                  case 35:
                    return a.finish(28);
                  case 36:
                    return a.abrupt('return', c);
                  case 37:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
            [[3, 24, 28, 36], [29, , 31, 35]],
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    o = (function() {
      var a = d(
        b.mark(function a(c) {
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    if (!(c.data && c.data.constructor === Array)) {
                      a.next = 6;
                      break;
                    }
                    return (a.next = 3), n(c);
                  case 3:
                    (c = a.sent), (a.next = 10);
                    break;
                  case 6:
                    if (!c.included) {
                      a.next = 10;
                      break;
                    }
                    return (a.next = 9), m(c.data, c.included);
                  case 9:
                    c.data = a.sent;
                  case 10:
                    if ((delete c.included, !(c.data && c.data.attributes))) {
                      a.next = 15;
                      break;
                    }
                    return (a.next = 14), h(c.data);
                  case 14:
                    c.data = a.sent;
                  case 15:
                    return a.abrupt('return', c);
                  case 16:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })(),
    p = function(a, b) {
      return a + ' requires an ID for the ' + b + ' relationships';
    },
    q = (function() {
      var a = d(
        b.mark(function a(c) {
          var d,
            f,
            g,
            h,
            i = this,
            j =
              1 < arguments.length && arguments[1] !== void 0
                ? arguments[1]
                : {},
            k =
              2 < arguments.length && arguments[2] !== void 0
                ? arguments[2]
                : 'POST';
          return b.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    if (
                      ((a.prev = 0),
                      j.constructor === Object && 0 !== Object.keys(j).length)
                    ) {
                      a.next = 3;
                      break;
                    }
                    throw new Error(k + ' requires a JSON object body');
                  case 3:
                    if (
                      ((d = this.plural(this.camel(c))),
                      (f = { type: d }),
                      'POST' === k || j.id)
                    ) {
                      a.next = 7;
                      break;
                    }
                    throw new Error(
                      k + ' requires an ID for the ' + d + ' type',
                    );
                  case 7:
                    for (h in ('POST' !== k && (f.id = j.id.toString()),
                    (g = function(a) {
                      if (null !== j[a] && j[a].constructor === Object) {
                        if ('string' == typeof j[a].id)
                          f.relationships || (f.relationships = {}),
                            j[a].type || (j[a].type = i.plural(i.camel(a))),
                            (f.relationships[a] = {
                              data: Object.assign(j[a]),
                            });
                        else throw new Error(p(k, a));
                      } else if (null !== j[a] && Array.isArray(j[a])) {
                        var b = i.plural(i.camel(a));
                        f.relationships || (f.relationships = {}),
                          (f.relationships[a] = {
                            data: j[a].map(function(c) {
                              if (!c.id) throw new Error(p(k, a));
                              return { id: c.id, type: c.type || b };
                            }),
                          });
                      } else
                        'id' !== a &&
                          'type' !== a &&
                          (f.attributes || (f.attributes = {}),
                          (f.attributes[a] = j[a]));
                    }),
                    j))
                      g(h);
                    return a.abrupt('return', { data: f });
                  case 13:
                    throw ((a.prev = 13), (a.t0 = a['catch'](0)), e(a.t0));
                  case 16:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            this,
            [[0, 13]],
          );
        }),
      );
      return function() {
        return a.apply(this, arguments);
      };
    })();
  (a.camel = function(a) {
    return a.replace(/[-_][a-z\u00E0-\u00F6\u00F8-\u00FE]/g, function(a) {
      return a.slice(1).toUpperCase();
    });
  }),
    (a.kebab = function(a) {
      return (
        a.charAt(0).toLowerCase() +
        a.slice(1).replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(a) {
          return '-' + a.toLowerCase();
        })
      );
    }),
    (a.snake = function(a) {
      return (
        a.charAt(0).toLowerCase() +
        a.slice(1).replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(a) {
          return '_' + a.toLowerCase();
        })
      );
    }),
    (a.deattribute = h),
    (a.deserialise = o),
    (a.error = e),
    (a.filterIncludes = i),
    (a.linkRelationships = m),
    (a.query = g),
    (a.serialise = q),
    Object.defineProperty(a, '__esModule', { value: !0 });
});
//# sourceMappingURL=index.js.map
