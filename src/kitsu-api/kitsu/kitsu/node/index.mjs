/* eslint-disable */
import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _asyncToGenerator from 'babel-runtime/helpers/asyncToGenerator';
import axios from 'axios';
import {
  camel,
  deserialise,
  error,
  kebab,
  query,
  serialise,
  snake,
} from 'kitsu-core/node';
class Kitsu {
  constructor(a = {}) {
    (this.fetch = this.get),
      (this.update = this.patch),
      (this.create = this.post),
      (this.camel = !1 === a.camelCaseTypes ? a => a : camel),
      (this.resCase =
        'none' === a.resourceCase
          ? a => a
          : 'snake' === a.resourceCase ? snake : kebab),
      (this.plural = !1 === a.pluralize ? a => a : require('pluralize')),
      (this.headers = Object.assign({}, a.headers, {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      })),
      (this.axios = axios.create({
        baseURL: a.baseURL || 'https://kitsu.io/api/edge',
        timeout: a.timeout || 3e4,
      }));
  }
  get(a, b = {}, c = {}) {
    var d = this;
    return _asyncToGenerator(function*() {
      try {
        var e = a.split('/'),
          f = _slicedToArray(e, 3);
        let h = f[0],
          i = f[1],
          j = f[2],
          k = d.plural(d.resCase(h));
        i && (k += `/${i}`), j && (k += `/${d.resCase(j)}`);
        var g = yield d.axios.get(k, {
          params: b,
          paramsSerializer: function(a) {
            return query(a);
          },
          headers: Object.assign(d.headers, c),
        });
        const l = g.data;
        return deserialise(l);
      } catch (a) {
        throw error(a);
      }
    })();
  }
  patch(a, b, c = {}) {
    var d = this;
    return _asyncToGenerator(function*() {
      try {
        const f = yield serialise.apply(d, [a, b, 'PATCH']),
          g = d.plural(d.resCase(a)) + '/' + b.id;
        var e = yield d.axios.patch(g, f, {
          headers: Object.assign(d.headers, c),
        });
        const h = e.data;
        return h;
      } catch (a) {
        throw error(a);
      }
    })();
  }
  post(a, b, c = {}) {
    var d = this;
    return _asyncToGenerator(function*() {
      try {
        const f = d.plural(d.resCase(a));
        var e = yield d.axios.post(f, yield serialise.apply(d, [a, b]), {
          headers: Object.assign(d.headers, c),
        });
        const g = e.data;
        return g;
      } catch (a) {
        throw error(a);
      }
    })();
  }
  remove(a, b, c = {}) {
    var d = this;
    return _asyncToGenerator(function*() {
      try {
        const f = d.plural(d.resCase(a)) + '/' + b;
        var e = yield d.axios.delete(f, {
          data: yield serialise.apply(d, [a, { id: b }, 'DELETE']),
          headers: Object.assign(d.headers, c),
        });
        const g = e.data;
        return g;
      } catch (a) {
        throw error(a);
      }
    })();
  }
  self(a = {}, b = {}) {
    var c = this;
    return _asyncToGenerator(function*() {
      try {
        const d = yield c.get(
          'users',
          Object.assign({ filter: { self: !0 } }, a),
          b,
        );
        return d.data[0];
      } catch (a) {
        throw error(a);
      }
    })();
  }
}
export default Kitsu;
//# sourceMappingURL=index.mjs.map
