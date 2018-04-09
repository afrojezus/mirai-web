/* eslint-disable */
'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
function _interopDefault(a) {
  return a && 'object' == typeof a && 'default' in a ? a['default'] : a;
}
var _asyncToGenerator = _interopDefault(
  require('babel-runtime/helpers/asyncToGenerator'),
);
let deattribute = (() => {
  var a = _asyncToGenerator(function*(a) {
    return (
      'object' == typeof a &&
        null !== a &&
        (Array.isArray(a)
          ? yield a.map(
              (() => {
                var a = _asyncToGenerator(function*(a) {
                  return deattribute(a);
                });
                return function() {
                  return a.apply(this, arguments);
                };
              })(),
            )
          : a.attributes &&
            a.attributes.constructor === Object &&
            (Object.keys(a.attributes).forEach(function(b) {
              a[b] = a.attributes[b];
            }),
            delete a.attributes)),
      a
    );
  });
  return function() {
    return a.apply(this, arguments);
  };
})();
function error(a) {
  if (a.response) {
    const b = a.response.data;
    b && b.errors && (a.errors = b.errors);
  }
  throw a;
}
let filterIncludes = (() => {
    var a = _asyncToGenerator(function*(a, { id: b, type: c }) {
      try {
        const d = a.filter(function(a) {
          return a.id === b && a.type === c;
        })[0] || { id: b, type: c };
        return Object.assign({}, d);
      } catch (a) {
        error(a);
      }
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  link = (() => {
    var a = _asyncToGenerator(function*({ id: a, type: b, meta: c }, d) {
      const e = yield filterIncludes(d, { id: a, type: b });
      return (
        e.relationships && (yield linkRelationships(e, d)),
        c && (e.meta = c),
        deattribute(e)
      );
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  linkArray = (() => {
    var a = _asyncToGenerator(function*(a, b, c) {
      a[c] = [];
      var d,
        e = !0,
        f = !1;
      try {
        for (
          var g, h = (yield a.relationships[c].data)[Symbol.iterator]();
          !(e = (g = h.next()).done);
          e = !0
        ) {
          let d = g.value;
          a[c].push(yield link(d, b));
        }
      } catch (a) {
        (f = !0), (d = a);
      } finally {
        try {
          !e && h.return && h.return();
        } finally {
          if (f) throw d;
        }
      }
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  linkObject = (() => {
    var a = _asyncToGenerator(function*(a, b, c) {
      (a[c] = yield link(a.relationships[c].data, b)),
        delete a[c].relationships;
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  linkRelationships = (() => {
    var a = _asyncToGenerator(function*(a, b) {
      const c = a.relationships;
      let d = !1;
      for (let e in yield c)
        c[e].data && Array.isArray(c[e].data)
          ? (yield linkArray(a, b, e), (d = !0))
          : c[e].data && (yield linkObject(a, b, e), (d = !0));
      return d && delete a.relationships, a;
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  deserialiseArray = (() => {
    var a = _asyncToGenerator(function*(a) {
      var b,
        c = !0,
        d = !1;
      try {
        for (
          var e, f = (yield a.data)[Symbol.iterator]();
          !(c = (e = f.next()).done);
          c = !0
        ) {
          let b = e.value;
          a.included && (b = yield linkRelationships(b, a.included)),
            b.attributes && (b = yield deattribute(b)),
            (a.data[a.data.indexOf(b)] = b);
        }
      } catch (a) {
        (d = !0), (b = a);
      } finally {
        try {
          !c && f.return && f.return();
        } finally {
          if (d) throw b;
        }
      }
      return a;
    });
    return function() {
      return a.apply(this, arguments);
    };
  })(),
  deserialise = (() => {
    var a = _asyncToGenerator(function*(a) {
      return (
        a.data && a.data.constructor === Array
          ? (a = yield deserialiseArray(a))
          : a.included &&
            (a.data = yield linkRelationships(a.data, a.included)),
        delete a.included,
        a.data && a.data.attributes && (a.data = yield deattribute(a.data)),
        a
      );
    });
    return function() {
      return a.apply(this, arguments);
    };
  })();
function deObject(a, b) {
  let c = '';
  for (let d in a) {
    let e = a[d];
    b && (c += `&${b}`),
      (c += 'object' == typeof e ? `[${d}]${deObject(e)}` : `[${d}]=${e}`);
  }
  return c;
}
function query(a, b = !1) {
  let c = '';
  for (let d in a) {
    let b = a[d];
    c += 'object' == typeof b ? deObject(b, d) : `&${d}=${b}`;
  }
  return (c = encodeURI(c.slice(1))), a ? (b ? `?${c}` : c) : '';
}
const requiresID = (a, b) => `${a} requires an ID for the ${b} relationships`;
let serialise = (() => {
  var a = _asyncToGenerator(function*(a, b = {}, c = 'POST') {
    try {
      if (b.constructor !== Object || 0 === Object.keys(b).length)
        throw new Error(`${c} requires a JSON object body`);
      const d = this.plural(this.camel(a)),
        e = { type: d };
      if ('POST' !== c && !b.id)
        throw new Error(`${c} requires an ID for the ${d} type`);
      for (let a in ('POST' !== c && (e.id = b.id.toString()), b))
        if (null !== b[a] && b[a].constructor === Object) {
          if ('string' == typeof b[a].id)
            e.relationships || (e.relationships = {}),
              b[a].type || (b[a].type = this.plural(this.camel(a))),
              (e.relationships[a] = { data: Object.assign(b[a]) });
          else throw new Error(requiresID(c, a));
        } else if (null !== b[a] && Array.isArray(b[a])) {
          const d = this.plural(this.camel(a));
          e.relationships || (e.relationships = {}),
            (e.relationships[a] = {
              data: b[a].map(function(b) {
                if (!b.id) throw new Error(requiresID(c, a));
                return { id: b.id, type: b.type || d };
              }),
            });
        } else
          'id' !== a &&
            'type' !== a &&
            (e.attributes || (e.attributes = {}), (e.attributes[a] = b[a]));
      return { data: e };
    } catch (a) {
      throw error(a);
    }
  });
  return function() {
    return a.apply(this, arguments);
  };
})();
var index = a =>
    a.replace(/[-_][a-z\u00E0-\u00F6\u00F8-\u00FE]/g, a =>
      a.slice(1).toUpperCase(),
    ),
  index$1 = a =>
    a.charAt(0).toLowerCase() +
    a
      .slice(1)
      .replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, a => '-' + a.toLowerCase()),
  index$2 = a =>
    a.charAt(0).toLowerCase() +
    a
      .slice(1)
      .replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, a => '_' + a.toLowerCase());
(exports.camel = index),
  (exports.kebab = index$1),
  (exports.snake = index$2),
  (exports.deattribute = deattribute),
  (exports.deserialise = deserialise),
  (exports.error = error),
  (exports.filterIncludes = filterIncludes),
  (exports.linkRelationships = linkRelationships),
  (exports.query = query),
  (exports.serialise = serialise);
//# sourceMappingURL=index.js.map
