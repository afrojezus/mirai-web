/* eslint-disable */
import _regeneratorRuntime from 'babel-runtime/regenerator';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
var deattribute = (function() {
  var a = _asyncToGenerator(
    _regeneratorRuntime.mark(function a(b) {
      var c = this;
      return _regeneratorRuntime.wrap(
        function(a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if ('object' != typeof b || null === b) {
                  a.next = 7;
                  break;
                }
                if (!Array.isArray(b)) {
                  a.next = 6;
                  break;
                }
                return (
                  (a.next = 4),
                  b.map(
                    (function() {
                      var a = _asyncToGenerator(
                        _regeneratorRuntime.mark(function a(b) {
                          return _regeneratorRuntime.wrap(
                            function(a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    return a.abrupt('return', deattribute(b));
                                  case 1:
                                  case 'end':
                                    return a.stop();
                                }
                            },
                            a,
                            c,
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
                b.attributes &&
                  b.attributes.constructor === Object &&
                  (Object.keys(b.attributes).forEach(function(a) {
                    b[a] = b.attributes[a];
                  }),
                  delete b.attributes);
              case 7:
                return a.abrupt('return', b);
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
})();
function error(a) {
  if (a.response) {
    var b = a.response.data;
    b && b.errors && (a.errors = b.errors);
  }
  throw a;
}
var filterIncludes = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b, c) {
        var d,
          e = c.id,
          f = c.type;
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (d = b.filter(function(a) {
                      return a.id === e && a.type === f;
                    })[0] || { id: e, type: f }),
                    a.abrupt('return', Object.assign({}, d))
                  );
                case 5:
                  (a.prev = 5), (a.t0 = a['catch'](0)), error(a.t0);
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
  link = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b, c) {
        var d,
          e = b.id,
          f = b.type,
          g = b.meta;
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), filterIncludes(c, { id: e, type: f });
                case 2:
                  if (((d = a.sent), !d.relationships)) {
                    a.next = 6;
                    break;
                  }
                  return (a.next = 6), linkRelationships(d, c);
                case 6:
                  return g && (d.meta = g), a.abrupt('return', deattribute(d));
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
  linkArray = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b, c, d) {
        var e, f, g, h, i, j;
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (b[d] = []),
                    (e = !0),
                    (f = !1),
                    (g = void 0),
                    (a.prev = 4),
                    (a.next = 7),
                    b.relationships[d].data
                  );
                case 7:
                  (a.t0 = Symbol.iterator), (h = a.sent[a.t0]());
                case 9:
                  if ((e = (i = h.next()).done)) {
                    a.next = 19;
                    break;
                  }
                  return (
                    (j = i.value), (a.t1 = b[d]), (a.next = 14), link(j, c)
                  );
                case 14:
                  (a.t2 = a.sent), a.t1.push.call(a.t1, a.t2);
                case 16:
                  (e = !0), (a.next = 9);
                  break;
                case 19:
                  a.next = 25;
                  break;
                case 21:
                  (a.prev = 21), (a.t3 = a['catch'](4)), (f = !0), (g = a.t3);
                case 25:
                  (a.prev = 25), (a.prev = 26), !e && h.return && h.return();
                case 28:
                  if (((a.prev = 28), !f)) {
                    a.next = 31;
                    break;
                  }
                  throw g;
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
  linkObject = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b, c, d) {
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), link(b.relationships[d].data, c);
                case 2:
                  (b[d] = a.sent), delete b[d].relationships;
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
  linkRelationships = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b, c) {
        var d, e, f;
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (d = b.relationships), (e = !1), (a.next = 4), d;
                case 4:
                  a.t0 = _regeneratorRuntime.keys(a.sent);
                case 5:
                  if ((a.t1 = a.t0()).done) {
                    a.next = 19;
                    break;
                  }
                  if (
                    ((f = a.t1.value), !(d[f].data && Array.isArray(d[f].data)))
                  ) {
                    a.next = 13;
                    break;
                  }
                  return (a.next = 10), linkArray(b, c, f);
                case 10:
                  (e = !0), (a.next = 17);
                  break;
                case 13:
                  if (!d[f].data) {
                    a.next = 17;
                    break;
                  }
                  return (a.next = 16), linkObject(b, c, f);
                case 16:
                  e = !0;
                case 17:
                  a.next = 5;
                  break;
                case 19:
                  return e && delete b.relationships, a.abrupt('return', b);
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
  deserialiseArray = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b) {
        var c, d, e, f, g, h;
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (c = !0),
                    (d = !1),
                    (e = void 0),
                    (a.prev = 3),
                    (a.next = 6),
                    b.data
                  );
                case 6:
                  (a.t0 = Symbol.iterator), (f = a.sent[a.t0]());
                case 8:
                  if ((c = (g = f.next()).done)) {
                    a.next = 22;
                    break;
                  }
                  if (((h = g.value), !b.included)) {
                    a.next = 14;
                    break;
                  }
                  return (a.next = 13), linkRelationships(h, b.included);
                case 13:
                  h = a.sent;
                case 14:
                  if (!h.attributes) {
                    a.next = 18;
                    break;
                  }
                  return (a.next = 17), deattribute(h);
                case 17:
                  h = a.sent;
                case 18:
                  b.data[b.data.indexOf(h)] = h;
                case 19:
                  (c = !0), (a.next = 8);
                  break;
                case 22:
                  a.next = 28;
                  break;
                case 24:
                  (a.prev = 24), (a.t1 = a['catch'](3)), (d = !0), (e = a.t1);
                case 28:
                  (a.prev = 28), (a.prev = 29), !c && f.return && f.return();
                case 31:
                  if (((a.prev = 31), !d)) {
                    a.next = 34;
                    break;
                  }
                  throw e;
                case 34:
                  return a.finish(31);
                case 35:
                  return a.finish(28);
                case 36:
                  return a.abrupt('return', b);
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
  deserialise = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b) {
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  if (!(b.data && b.data.constructor === Array)) {
                    a.next = 6;
                    break;
                  }
                  return (a.next = 3), deserialiseArray(b);
                case 3:
                  (b = a.sent), (a.next = 10);
                  break;
                case 6:
                  if (!b.included) {
                    a.next = 10;
                    break;
                  }
                  return (a.next = 9), linkRelationships(b.data, b.included);
                case 9:
                  b.data = a.sent;
                case 10:
                  if ((delete b.included, !(b.data && b.data.attributes))) {
                    a.next = 15;
                    break;
                  }
                  return (a.next = 14), deattribute(b.data);
                case 14:
                  b.data = a.sent;
                case 15:
                  return a.abrupt('return', b);
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
  })();
function deObject(a, b) {
  var c = '';
  for (var d in a) {
    var e = a[d];
    b && (c += `&${b}`),
      (c += 'object' == typeof e ? `[${d}]${deObject(e)}` : `[${d}]=${e}`);
  }
  return c;
}
function query(a) {
  var b = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
    c = '';
  for (var d in a) {
    var e = a[d];
    c += 'object' == typeof e ? deObject(e, d) : `&${d}=${e}`;
  }
  return (c = encodeURI(c.slice(1))), a ? (b ? `?${c}` : c) : '';
}
var requiresID = function(a, b) {
    return `${a} requires an ID for the ${b} relationships`;
  },
  serialise = (function() {
    var a = _asyncToGenerator(
      _regeneratorRuntime.mark(function a(b) {
        var c,
          d,
          e,
          f,
          g = this,
          h =
            1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
          i =
            2 < arguments.length && arguments[2] !== void 0
              ? arguments[2]
              : 'POST';
        return _regeneratorRuntime.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  if (
                    ((a.prev = 0),
                    h.constructor === Object && 0 !== Object.keys(h).length)
                  ) {
                    a.next = 3;
                    break;
                  }
                  throw new Error(`${i} requires a JSON object body`);
                case 3:
                  if (
                    ((c = this.plural(this.camel(b))),
                    (d = { type: c }),
                    'POST' === i || h.id)
                  ) {
                    a.next = 7;
                    break;
                  }
                  throw new Error(`${i} requires an ID for the ${c} type`);
                case 7:
                  for (f in ('POST' !== i && (d.id = h.id.toString()),
                  (e = function(a) {
                    if (null !== h[a] && h[a].constructor === Object) {
                      if ('string' == typeof h[a].id)
                        d.relationships || (d.relationships = {}),
                          h[a].type || (h[a].type = g.plural(g.camel(a))),
                          (d.relationships[a] = { data: Object.assign(h[a]) });
                      else throw new Error(requiresID(i, a));
                    } else if (null !== h[a] && Array.isArray(h[a])) {
                      var b = g.plural(g.camel(a));
                      d.relationships || (d.relationships = {}),
                        (d.relationships[a] = {
                          data: h[a].map(function(c) {
                            if (!c.id) throw new Error(requiresID(i, a));
                            return { id: c.id, type: c.type || b };
                          }),
                        });
                    } else
                      'id' !== a &&
                        'type' !== a &&
                        (d.attributes || (d.attributes = {}),
                        (d.attributes[a] = h[a]));
                  }),
                  h))
                    e(f);
                  return a.abrupt('return', { data: d });
                case 13:
                  throw ((a.prev = 13), (a.t0 = a['catch'](0)), error(a.t0));
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
  })(),
  index = function(a) {
    return a.replace(/[-_][a-z\u00E0-\u00F6\u00F8-\u00FE]/g, function(a) {
      return a.slice(1).toUpperCase();
    });
  },
  index$1 = function(a) {
    return (
      a.charAt(0).toLowerCase() +
      a.slice(1).replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(a) {
        return '-' + a.toLowerCase();
      })
    );
  },
  index$2 = function(a) {
    return (
      a.charAt(0).toLowerCase() +
      a.slice(1).replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(a) {
        return '_' + a.toLowerCase();
      })
    );
  };
export {
  index as camel,
  index$1 as kebab,
  index$2 as snake,
  deattribute,
  deserialise,
  error,
  filterIncludes,
  linkRelationships,
  query,
  serialise,
};
//# sourceMappingURL=index.mjs.map
