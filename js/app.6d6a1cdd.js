(function (t) {
  console.log('0')
  function e(e) {
    for (var r, i, c = e[0], s = e[1], l = e[2], d = 0, h = []; d < c.length; d++)
      (i = c[d]), Object.prototype.hasOwnProperty.call(a, i) && a[i] && h.push(a[i][0]), (a[i] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
    u && u(e);
    while (h.length) h.shift()();
    return o.push.apply(o, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, c = 1; c < n.length; c++) {
        var s = n[c];
        0 !== a[s] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var r = {},
    a = { app: 0 },
    o = [];
  function i(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = r),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = '/');
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    s = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var l = 0; l < c.length; l++) e(c[l]);
  var u = s;
  o.push([0, 'chunk-vendors']), n();
})({
  0: function (t, e, n) {
    t.exports = n('cd49');
  },
  '006b': function (t, e, n) {
    'use strict';
    n('8da6');
  },
  '097c': function (t, e, n) {
    'use strict';
    n('a6cf');
  },
  '0b81': function (t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAGI0lEQVR4nO2be4hUVRzHP/femd3ZdR+ma7m+3QwfVD4qIjOtSCoK0worIygrKIoyECL/yaggMYxEqBRKIikrCMssVEqL0CyhB9o/6Ua6K8u6q/venb0zN86dM+VjH87MufPYfh8Ydpm593d+937v+f3O79xzEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEM7HMnVPWltbcnZ7rfIK3G2bcbesw6qeONjh04GFwFxgKlANlAI9QD1wBPgB2A38moofVeu3Z3QdilDGFgqDcuBBYDFwaz8eq2OqgCuBJfq774GtwMdAYzau1C6gm5ouD+mn/q0BxOiPG4AN+vynsuHsUBZEPe2fAu8DozK0Va6F+RqoMeRfnwxVQSYBB4B7DNtVPexnHdYCId9ziAPMA+YAo7W/J4HfgH1A879Hui54cfWfyup/AJGAfLoI+AWYCfxu2ni+CjIDeFw/4eP7OaZNh6SNwH6KI2DbKkx9E6AYSSw9EpumR2bGyMeQ9R5wCFgxgBjouP6I7ik7rTGTRuG6bxCP1WAZG80PhGr/S9NG80kQlSxVfH441RO9aM9CZ+rMo/Z1ty3z6mqD8a5vZgErTRrMF0GqtBhXpXV2VxcMKy8rWrnOtq+5Ga++FhzHuJP9sBYYa8pYvghyUCfL9LBtvJbT/qnhFWuxRk/Eazzhf58lHjPVTD4I8iIwIWMrvigtWCWlhJevgt4e6I0acfACGDKCqFHKamPWbAuvswN71lychUvxGuvJUoIfB9xuwlCuBXnSuEW31/9jz5yXECNRm5yBZ7xJzX0mjOS6DrneuEXLhriHXTMDa9yl0HYabAfv9EmIuYm8Eo+BE8YaPhIipRA/V7S0MFK951KQal2BG8fr6sQaUYU95QrcrRuwplyOs2AR1vgpWKEwXjyG9/efxA7uhfq/sC4eB06oj96UEpUmriOXgswy+T7mLFQPUJSUYc+eR/iZNdiTpp53mHP8KLFt7xL79jOsEZdAWWWiF6VHqQnXc/mCSo1MNplq/zwcB6+pAWvUGKxIBK+9PSGUn1c8P4xZZWX+WbE9n+NuXgPFxb6I/u+p01y1fvvITN3OZVIPdvjT24s1ZrKfK/waRYWj5IhLJ3v1vdcTJXTjIpy7lidql/QxkohyKciuQK2r5N3ZBt0d/ReI6vueLuLRXkJLHsWeMx/v5Il0h8qdGXrsk80cMlvXHSN0u5X6qcrt0Fvd/K4OKBru1y7xQz/p0JayW+0m3MmGIPcCzwNX9/FbYEVBSugeZI2tSSR3VeEXpTyDb2QaPkhB1Lh8PbBggGOyUkZfEOrRCBdBpATaTqVj4QsTbgQliFocsDevbviFoMJX+lMtW0y4EIQgqmd8F4DdYFE6nGrEqz3sV/p+TwkXY5WWQWTYYEXjh0CTCf9MCzJMLzArPFRBGI/j3HQ3VuVIvM42PCXQ8SP++xVVz/h5JVl0ns1GU9drWpBnDSy5yQleRzvWhMsIP/3qf83HPbyGY7g7PiC26xO/1/hJ/+xqXkWDPaZ8NlmpFwF1+u1fYZLMIX6lbvnzW1ZJYrQV+3E37qaX1etirKrqpChq+elkwK8oTSwlNVkDPFDQYiiUEGrmV/1VOcON4rW2+O9YQtfeQnjVO4mRWGtzMvk/kRTDFCYFWWzSsbxB3fiYS7ytDadmGuFlzxGvq8VrbljhtTRt9lqaSH5MYDKHTC/k+z4wibmveDSKPf9OQocPvB2vq33TKjt3xn2fiZbM0Nra0ljwIWswVDhTw+FQ0Ut0d6xWM8ZnUlGa+Qy8yZDVY9BWfuJPRnZDtGepqlF8Qc78GMBkyGowuT4pb1E5xY1W4vrRxfhcnMkeknkALRycoGapTRr9wKCtfEeF5z5L9kwxKch+vSfj/0Bg29tMdztzi97ym4+C8s60IF/pTZJDGdU7Xg/q+oJITPcP8QSf8naJVAjqfbbaA74jINu55IWgryvIBQZ36On4YwG2kS2O6+3VrwXdXjYWykX0fsEleouaWnUSNtVugLTqhQs7gVeA7sGaqqgwsppUEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEIRcA/wDoOOQV9MnNu8AAAAASUVORK5CYII=';
  },
  2021: function (t, e, n) {
    'use strict';
    n('e248');
  },
  2360: function (t, e, n) {
    'use strict';
    n('32b7');
  },
  '32b7': function (t, e, n) {},
  '49f4': function (t, e, n) {
    t.exports = { theme: '#1890ff' };
  },
  '8da6': function (t, e, n) {},
  '9bb8': function (t, e, n) {},
  a6cf: function (t, e, n) {},
  cd49: function (t, e, n) {
    'use strict';
    n.r(e);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var r = n('2b0e'),
      a = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          'div',
          { staticClass: 'container' },
          [
            n(
              'el-card',
              { staticClass: 'box-card', attrs: { shadow: 'always' } },
              [
                n(
                  'div',
                  { staticClass: 'clearfix header', attrs: { slot: 'header' }, slot: 'header' },
                  [
                    t.weatherData ? n('p', { staticClass: 'title' }, [t._v(t._s(t.weatherData.city || ''))]) : t._e(),
                    n('el-button', {
                      attrs: { type: 'primary', circle: '', icon: 'el-icon-s-tools' },
                      on: { click: t.openConfig },
                    }),
                  ],
                  1
                ),
                n('description', { attrs: { weatherData: t.weatherData } }),
              ],
              1
            ),
            n(
              'el-dialog',
              {
                attrs: {
                  title: 'Settings',
                  visible: t.isShowForm,
                  width: '30%',
                  'before-close': t.closeForm,
                  'close-on-press-escape': '',
                },
                on: {
                  'update:visible': function (e) {
                    t.isShowForm = e;
                  },
                },
              },
              [
                n('form-modal', {
                  attrs: { isShow: t.isShowForm, closeForm: t.closeForm, locations: t.locations },
                  on: {
                    'update:locations': function (e) {
                      t.locations = e;
                    },
                  },
                }),
              ],
              1
            ),
            n(
              'el-dialog',
              {
                attrs: {
                  title: 'Error',
                  visible: t.isShowErrModal,
                  width: '30%',
                  'before-close': t.closeErrModal,
                  'close-on-press-escape': '',
                },
                on: {
                  'update:visible': function (e) {
                    t.isShowErrModal = e;
                  },
                },
              },
              [n('error-modal', { attrs: { closeErrModal: t.closeErrModal, errMsg: t.errMsg } })],
              1
            ),
          ],
          1
        );
      },
      o = [],
      i = n('2909'),
      c = n('53ca'),
      s = n('1da1'),
      l = n('d4ec'),
      u = n('bee2'),
      d = n('262e'),
      h = n('2caf'),
      p = (n('99af'), n('d3b7'), n('b0c0'), n('fb6a'), n('96cf'), n('9ab4')),
      f = n('1b40'),
      v = 'WEATHER_WIDGET_DATA_HISTORY',
      y = 'city not found',
      m =
        "Something went wrong. Application can't get the weather data. Be sure, that you allowed navigation in browser.",
      b = 'Current place weather data will be loaded.',
      g = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          'div',
          { staticClass: 'container' },
          [
            n('p', { staticClass: 'history__title' }, [t._v('History')]),
            n(
              'draggable',
              { staticClass: 'history__list', attrs: { list: t.locations } },
              t._l(t.locations, function (e, r) {
                return n(
                  'div',
                  { key: r },
                  [
                    n('history-item', {
                      attrs: {
                        deleteItem: function () {
                          return t.deletePlace(r);
                        },
                        place: e,
                      },
                    }),
                  ],
                  1
                );
              }),
              0
            ),
            n(
              'form',
              { on: { submit: t.saveLocation } },
              [
                n(
                  'el-descriptions',
                  { attrs: { title: 'Type new city to search', direction: 'vertical', column: 2, border: '' } },
                  [
                    n('el-descriptions-item', { attrs: { label: 'City' } }, [
                      n(
                        'label',
                        { staticClass: 'label', attrs: { for: 'city' } },
                        [
                          n('el-input', {
                            attrs: { id: 'city', name: 'city', type: 'text', placeholder: 'city to search' },
                            on: {
                              input: function (e) {
                                return t.inputHandler('city', e);
                              },
                            },
                            model: {
                              value: t.city,
                              callback: function (e) {
                                t.city = e;
                              },
                              expression: 'city',
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    n('el-descriptions-item', { attrs: { label: 'Country *optional' } }, [
                      n(
                        'label',
                        { staticClass: 'label', attrs: { for: 'country' } },
                        [
                          n('el-input', {
                            attrs: { id: 'country', name: 'country', type: 'text', placeholder: 'country code' },
                            on: {
                              input: function (e) {
                                return t.inputHandler('country', e);
                              },
                            },
                            model: {
                              value: t.country,
                              callback: function (e) {
                                t.country = e;
                              },
                              expression: 'country',
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ],
                  1
                ),
                n(
                  'div',
                  { staticClass: 'footer' },
                  [
                    n('el-button', { on: { click: t.closeForm } }, [t._v('Cancel')]),
                    n(
                      'el-button',
                      { attrs: { type: 'primary', icon: 'el-icon-sunrise' }, on: { click: t.saveLocation } },
                      [t._v('Submit')]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      w = [],
      O = n('b76a'),
      E = n.n(O),
      j = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          'div',
          { staticClass: 'item' },
          [
            n('div', [
              n('i', { staticClass: 'el-icon-finished' }),
              n('span', [t._v(' ' + t._s(t.place.city))]),
              t.place.country ? n('span', [t._v(', ' + t._s(t.place.country) + ' ')]) : t._e(),
            ]),
            n('el-button', {
              attrs: { circle: '', icon: 'el-icon-delete', type: 'danger', size: 'small' },
              on: {
                click: function () {
                  return t.deleteItem(t.index);
                },
              },
            }),
          ],
          1
        );
      },
      A = [],
      C =
        (n('a9e3'),
        (function (t) {
          Object(d['a'])(n, t);
          var e = Object(h['a'])(n);
          function n() {
            return Object(l['a'])(this, n), e.apply(this, arguments);
          }
          return n;
        })(f['c']));
    C = Object(p['a'])([Object(f['a'])({ props: { index: Number, place: Object, deleteItem: Function } })], C);
    var S = C,
      k = S,
      x = (n('006b'), n('2877')),
      _ = Object(x['a'])(k, j, A, !1, null, 'b8f00506', null),
      R = _.exports,
      M = (function (t) {
        Object(d['a'])(n, t);
        var e = Object(h['a'])(n);
        function n() {
          var t;
          return Object(l['a'])(this, n), (t = e.apply(this, arguments)), (t.city = ''), (t.country = ''), t;
        }
        return (
          Object(u['a'])(n, [
            {
              key: 'inputHandler',
              value: function (t, e) {
                switch (t) {
                  case 'city':
                    this.city = e;
                    break;
                  case 'country':
                    this.country = e;
                    break;
                  default:
                    break;
                }
              },
            },
            {
              key: 'saveLocation',
              value: function () {
                var t = this.city ? { city: this.city, country: this.country } : void 0;
                this.closeForm(t), (this.city = ''), (this.country = '');
              },
            },
            {
              key: 'deletePlace',
              value: function (t) {
                var e = [].concat(
                  Object(i['a'])(this.locations.slice(0, t)),
                  Object(i['a'])(this.locations.slice(t + 1))
                );
                localStorage.setItem(v, JSON.stringify(e)), (this.locations = e);
              },
            },
          ]),
          n
        );
      })(f['c']);
    M = Object(p['a'])(
      [
        Object(f['a'])({
          components: { HistoryItem: R, Draggable: E.a },
          props: { isShow: Boolean, locations: Object, closeForm: Function },
        }),
      ],
      M
    );
    var B = M,
      F = B,
      D = (n('2021'), Object(x['a'])(F, g, w, !1, null, '51b0aa0c', null)),
      I = D.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n('div', { staticClass: 'container' }, [
          n('p', [t._v(t._s(t.errMsg))]),
          n(
            'div',
            { staticClass: 'footer', attrs: { slot: 'footer' }, slot: 'footer' },
            [
              n(
                'el-button',
                {
                  on: {
                    click: function (e) {
                      t.closeErrModal = !1;
                    },
                  },
                },
                [t._v('Close')]
              ),
            ],
            1
          ),
        ]);
      },
      W = [],
      V = (function (t) {
        Object(d['a'])(n, t);
        var e = Object(h['a'])(n);
        function n() {
          return Object(l['a'])(this, n), e.apply(this, arguments);
        }
        return n;
      })(f['c']);
    V = Object(p['a'])([Object(f['a'])({ props: { errMsg: String, closeErrModal: Function } })], V);
    var G = V,
      T = G,
      q = (n('e950'), Object(x['a'])(T, P, W, !1, null, '2e2950d9', null)),
      L = q.exports,
      Y = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      H = [
        function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r('div', { attrs: { id: 'icon-container' } }, [r('img', { attrs: { id: 'icon', src: n('0b81') } })]);
        },
      ],
      N = (function (t) {
        Object(d['a'])(n, t);
        var e = Object(h['a'])(n);
        function n() {
          var t;
          return Object(l['a'])(this, n), (t = e.apply(this, arguments)), (t.iconUrl = ''), t;
        }
        return (
          Object(u['a'])(n, [
            {
              key: 'mounted',
              value: (function () {
                var t = Object(s['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.iconName;
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
            {
              key: 'getIcon',
              value: (function () {
                var t = Object(s['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e, n, r, a;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), fetch('../assets/icons/01n.png');
                            case 3:
                              return (e = t.sent), (t.next = 6), e.arrayBuffer();
                            case 6:
                              (n = t.sent),
                                (r = document.querySelector('#icon-container')),
                                (a = document.createElement('img')),
                                null === r || void 0 === r || r.append(a),
                                console.log('iconContainer: ', r),
                                console.log('blob: ', n),
                                (t.next = 17);
                              break;
                            case 14:
                              (t.prev = 14), (t.t0 = t['catch'](0)), console.error(t.t0);
                            case 17:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 14]]
                    );
                  })
                );
                function e() {
                  return t.apply(this, arguments);
                }
                return e;
              })(),
            },
          ]),
          n
        );
      })(f['c']);
    Object(p['a'])([Object(f['b'])(String)], N.prototype, 'iconName', void 0), (N = Object(p['a'])([f['a']], N));
    var Q = N,
      K = Q,
      z = Object(x['a'])(K, Y, H, !1, null, '1d4ee4d3', null),
      X = z.exports,
      U = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.weatherData
          ? n(
              'div',
              [
                n(
                  'div',
                  { staticClass: 'weather__current' },
                  [
                    n('weather-icon', { staticClass: 'weather__icon', attrs: { iconName: t.weatherData.icon || '' } }),
                    n('div', [
                      n('span', [t._v(t._s(Math.round(t.weatherData.temperature, 0) || ''))]),
                      n('span', { staticClass: 'weather__current--sign' }, [t._v('°')]),
                    ]),
                  ],
                  1
                ),
                n(
                  'el-descriptions',
                  { staticClass: 'margin-top', attrs: { column: 1, size: 'default', border: '' } },
                  [
                    n(
                      'el-descriptions-item',
                      [
                        n('template', { slot: 'label' }, [
                          n('i', { staticClass: 'el-icon-user' }),
                          t._v(' Feels like '),
                        ]),
                        n('span', { staticClass: 'value' }, [
                          t._v(' ' + t._s(Math.round(t.weatherData.feelsLike, 0) || '') + '° '),
                        ]),
                      ],
                      2
                    ),
                    n(
                      'el-descriptions-item',
                      [
                        n('template', { slot: 'label' }, [n('i', { staticClass: 'el-icon-s-unfold' }), t._v(' Wind ')]),
                        n('span', { staticClass: 'value' }, [t._v(' ' + t._s(t.weatherData.windSpeed) + ' ')]),
                      ],
                      2
                    ),
                    n(
                      'el-descriptions-item',
                      [
                        n('template', { slot: 'label' }, [
                          n('i', { staticClass: 'el-icon-magic-stick' }),
                          t._v(' Humidity '),
                        ]),
                        n('span', { staticClass: 'value' }, [t._v(' ' + t._s(t.weatherData.humidity) + ' % ')]),
                      ],
                      2
                    ),
                    n(
                      'el-descriptions-item',
                      [
                        n('template', { slot: 'label' }, [
                          n('i', { staticClass: 'el-icon-attract' }),
                          t._v(' Pressure '),
                        ]),
                        n('span', { staticClass: 'value' }, [t._v(' ' + t._s(t.weatherData.pressure) + ' ')]),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      J = [],
      Z = f['c'].extend({ props: { weatherData: Object } }),
      $ = (function (t) {
        Object(d['a'])(n, t);
        var e = Object(h['a'])(n);
        function n() {
          return Object(l['a'])(this, n), e.apply(this, arguments);
        }
        return n;
      })(Z);
    $ = Object(p['a'])([f['a']], $);
    var tt = $,
      et = tt,
      nt = (n('2360'), Object(x['a'])(et, U, J, !1, null, '1881cd02', null)),
      rt = nt.exports,
      at =
        (n('f953'),
        (function (t) {
          Object(d['a'])(n, t);
          var e = Object(h['a'])(n);
          function n() {
            var t;
            return (
              Object(l['a'])(this, n),
              (t = e.apply(this, arguments)),
              (t.isLoading = !1),
              (t.weatherData = null),
              (t.location = null),
              (t.locations = []),
              (t.isShowForm = !1),
              (t.isShowErrModal = !1),
              (t.errMsg = ''),
              (t.icon = null),
              t
            );
          }
          return (
            Object(u['a'])(n, [
              {
                key: 'mounted',
                value: (function () {
                  var t = Object(s['a'])(
                    regeneratorRuntime.mark(function t() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((e = !this.isConfigFromLocalStorageExists()), !e)) {
                                  t.next = 6;
                                  break;
                                }
                                return (t.next = 4), this.getCurrentPlace();
                              case 4:
                                t.next = 7;
                                break;
                              case 6:
                                this.getWeatherData();
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: 'isConfigFromLocalStorageExists',
                value: function () {
                  var t = this.checkHistoryFromLS();
                  if (t) {
                    this.locations = t;
                    var e = t.length,
                      n = t[e - 1],
                      r = n.city,
                      a = n.latitude,
                      o = n.longitude,
                      i = n.country;
                    return (
                      (this.location = { city: r || 'Moscow', latitude: a, longitude: o, country: i }),
                      console.log(this.location),
                      !0
                    );
                  }
                  return !1;
                },
              },
              {
                key: 'checkHistoryFromLS',
                value: function () {
                  var t = localStorage.getItem(v);
                  if (t) {
                    var e = JSON.parse(t),
                      n = 'object' === Object(c['a'])(e) && e.length;
                    return n ? e : (localStorage.removeItem(v), (this.locations = []), !1);
                  }
                  return !1;
                },
              },
              {
                key: 'getCurrentPlace',
                value: (function () {
                  var t = Object(s['a'])(
                    regeneratorRuntime.mark(function t() {
                      var e = this;
                      return regeneratorRuntime.wrap(function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              navigator.geolocation.getCurrentPosition(
                                function (t) {
                                  var n = t.coords,
                                    r = n.latitude,
                                    a = n.longitude;
                                  (e.location = { latitude: r, longitude: a }), e.getWeatherData();
                                },
                                function (t) {
                                  console.error('error happened: ', t),
                                    (e.isShowErrModal = !0),
                                    (e.errMsg = m),
                                    setTimeout(function () {
                                      e.closeErrModal();
                                    }, 3e3);
                                },
                                { enableHighAccuracy: !0, timeout: 6e4 }
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: 'getWeatherData',
                value: function () {
                  var t, e, n;
                  if (null !== (t = this.location) && void 0 !== t && t.city) {
                    var r,
                      a,
                      o =
                        null !== (r = this.location) && void 0 !== r && r.state ? ','.concat(this.location.state) : '',
                      i =
                        null !== (a = this.location) && void 0 !== a && a.country
                          ? ','.concat(this.location.country)
                          : '',
                      c = this.location.city + o + i;
                    this.fetchWeatherData('q='.concat(c));
                  } else
                    null !== (e = this.location) &&
                      void 0 !== e &&
                      e.latitude &&
                      null !== (n = this.location) &&
                      void 0 !== n &&
                      n.longitude &&
                      this.fetchWeatherData(
                        'lat='.concat(this.location.latitude, '&lon=').concat(this.location.longitude)
                      );
                },
              },
              {
                key: 'fetchWeatherData',
                value: (function () {
                  var t = Object(s['a'])(
                    regeneratorRuntime.mark(function t(e, n) {
                      var r, a, o;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (this.isLoading = !0),
                                  (t.next = 4),
                                  fetch(
                                    'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?'
                                      .concat(e, '&appid=641f6065a678dd5a0d804a9e7a8d6d58')
                                      .concat('&units=metric'),
                                    {
                                      method: 'GET',
                                      mode: 'cors',
                                      credentials: 'same-origin',
                                      headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Credentials': 'true',
                                        'Access-Control-Allow-Headers': '*',
                                        'Content-Type': 'json',
                                        'X-Requested-With': 'WebView',
                                      },
                                      referrerPolicy: 'no-referrer',
                                    }
                                  )
                                );
                              case 4:
                                return (r = t.sent), (t.next = 7), r.json();
                              case 7:
                                (a = t.sent),
                                  console.log(r.status),
                                  200 !== r.status
                                    ? this.handleError(a.message)
                                    : ((this.weatherData = {
                                        city: a.name || '',
                                        temperature: a.main.temp,
                                        feelsLike: a.main.feels_like,
                                        humidity: a.main.humidity,
                                        windSpeed: a.wind.speed,
                                        pressure: 12,
                                        icon:
                                          null !== (o = a.weather) && void 0 !== o && o.length
                                            ? a.weather[0].icon
                                            : void 0,
                                      }),
                                      n && n.isFromForm && this.addCityToLS(n.newLocation)),
                                  (t.next = 15);
                                break;
                              case 12:
                                (t.prev = 12), (t.t0 = t['catch'](0)), console.error(t.t0);
                              case 15:
                                return (t.prev = 15), (this.isLoading = !1), t.finish(15);
                              case 18:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 12, 15, 18]]
                      );
                    })
                  );
                  function e(e, n) {
                    return t.apply(this, arguments);
                  }
                  return e;
                })(),
              },
              {
                key: 'handleError',
                value: function (t) {
                  var e,
                    n = this;
                  if (
                    ((this.isShowErrModal = !0),
                    setTimeout(function () {
                      n.closeErrModal();
                    }, 3e3),
                    t === y)
                  )
                    return (
                      (this.errMsg = ''.concat(t, '.\n').concat(b)),
                      this.deleteLastRowFromHistory(),
                      void this.getCurrentPlace()
                    );
                  this.errMsg =
                    t ||
                    'Something went wrong.\nMaybe city "'.concat(
                      null === (e = this.location) || void 0 === e ? void 0 : e.city,
                      ' doesn\'t exists."'
                    );
                },
              },
              {
                key: 'closeErrModal',
                value: function () {
                  (this.isShowErrModal = !1), (this.errMsg = '');
                },
              },
              {
                key: 'openConfig',
                value: function () {
                  this.isShowForm = !0;
                },
              },
              {
                key: 'closeForm',
                value: function (t) {
                  if (((this.isShowForm = !1), t)) {
                    console.log('newLocation: ', t);
                    var e = t.city,
                      n = t.country;
                    this.fetchWeatherData('q='.concat(e).concat(n ? ','.concat(n) : ''), {
                      isFromForm: !0,
                      newLocation: t,
                    });
                  }
                },
              },
              {
                key: 'deleteLastRowFromHistory',
                value: function () {
                  var t = this.checkHistoryFromLS();
                  t && ((this.locations = t.slice(0, -1)), localStorage.setItem(v, JSON.stringify(this.locations)));
                },
              },
              {
                key: 'addCityToLS',
                value: function (t) {
                  (this.locations = [].concat(Object(i['a'])(this.locations), [t])),
                    localStorage.setItem(v, JSON.stringify(this.locations));
                },
              },
            ]),
            n
          );
        })(f['c']));
    at = Object(p['a'])(
      [Object(f['a'])({ components: { FormModal: I, WeatherIcon: X, Description: rt, ErrorModal: L } })],
      at
    );
    var ot = at,
      it = ot,
      ct = (n('097c'), Object(x['a'])(it, a, o, !1, null, '94b8ae9c', null)),
      st = ct.exports,
      lt = n('5c96'),
      ut = n.n(lt);
    n('49f4');
    (r['default'].config.productionTip = !1),
      r['default'].use(ut.a, { size: 'medium', locale: n('dccd') }),
      new r['default']({
        render: function (t) {
          return t(st);
        },
      }).$mount('#app');
  },
  e248: function (t, e, n) {},
  e950: function (t, e, n) {
    'use strict';
    n('9bb8');
  },
  f953: function (t) {
    t.exports = JSON.parse(
      '{"coord":{"lon":82.6759,"lat":51.7936},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":6.11,"feels_like":2.25,"temp_min":6.11,"temp_max":6.11,"pressure":1021,"humidity":54,"sea_level":1021,"grnd_level":977},"visibility":10000,"wind":{"speed":6.15,"deg":49,"gust":7.08},"clouds":{"all":17},"dt":1632724444,"sys":{"country":"RU","sunrise":1632702190,"sunset":1632745047},"timezone":25200,"id":1502066,"name":"Krasnoshchekovo","cod":200}'
    );
  },
});
//# sourceMappingURL=app.6d6a1cdd.js.map
