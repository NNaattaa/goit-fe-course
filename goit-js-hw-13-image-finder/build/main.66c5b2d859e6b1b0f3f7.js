(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '9ZfZ': function (n, e, t) {
      var a = t('mp5j');
      n.exports = (a.default || a).template({
        1: function (n, e, t, a, l) {
          n.propertyIsEnumerable;
          var o,
            s = null != e ? e : n.nullContext || {},
            i = n.hooks.helperMissing,
            c = 'function',
            r = n.escapeExpression;
          return (
            '<li>\n  <div class="photo-card">\n    <img class="photo-card__image" src="' +
            r(
              typeof (o =
                null != (o = t.webformatURL || (null != e ? e.webformatURL : e))
                  ? o
                  : i) === c
                ? o.call(s, {
                    name: 'webformatURL',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 4, column: 40 },
                      end: { line: 4, column: 56 },
                    },
                  })
                : o,
            ) +
            '" alt="" width="100%" data-src="' +
            r(
              typeof (o =
                null !=
                (o = t.largeImageURL || (null != e ? e.largeImageURL : e))
                  ? o
                  : i) === c
                ? o.call(s, {
                    name: 'largeImageURL',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 4, column: 88 },
                      end: { line: 4, column: 105 },
                    },
                  })
                : o,
            ) +
            '" />\n\n    <div class="stats">\n      <p class="stats-item">\n        <i class="material-icons">thumb_up</i>\n        ' +
            r(
              typeof (o =
                null != (o = t.likes || (null != e ? e.likes : e)) ? o : i) ===
                c
                ? o.call(s, {
                    name: 'likes',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 9, column: 8 },
                      end: { line: 9, column: 17 },
                    },
                  })
                : o,
            ) +
            '\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">visibility</i>\n        ' +
            r(
              typeof (o =
                null != (o = t.views || (null != e ? e.views : e)) ? o : i) ===
                c
                ? o.call(s, {
                    name: 'views',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 13, column: 8 },
                      end: { line: 13, column: 17 },
                    },
                  })
                : o,
            ) +
            '\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">comment</i>\n        ' +
            r(
              typeof (o =
                null != (o = t.comments || (null != e ? e.comments : e))
                  ? o
                  : i) === c
                ? o.call(s, {
                    name: 'comments',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 17, column: 8 },
                      end: { line: 17, column: 20 },
                    },
                  })
                : o,
            ) +
            '\n      </p>\n      <p class="stats-item">\n        <i class="material-icons">cloud_download</i>\n        ' +
            r(
              typeof (o =
                null != (o = t.downloads || (null != e ? e.downloads : e))
                  ? o
                  : i) === c
                ? o.call(s, {
                    name: 'downloads',
                    hash: {},
                    data: l,
                    loc: {
                      start: { line: 21, column: 8 },
                      end: { line: 21, column: 21 },
                    },
                  })
                : o,
            ) +
            '\n      </p>\n    </div>\n  </div>\n</li>\n'
          );
        },
        compiler: [8, '>= 4.3.0'],
        main: function (n, e, t, a, l) {
          var o;
          return null !=
            (o = t.each.call(null != e ? e : n.nullContext || {}, e, {
              name: 'each',
              hash: {},
              fn: n.program(1, l, 0),
              inverse: n.noop,
              data: l,
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 26, column: 9 },
              },
            }))
            ? o
            : '';
        },
        useData: !0,
      });
    },
    L1EO: function (n, e, t) {},
    QfWi: function (n, e, t) {
      'use strict';
      t.r(e);
      t('L1EO'), t('PzF0'), t('JBxO'), t('FdtR');
      var a,
        l = {
          key: '14212485-deb8165618a2af4ef4a847a14',
          searchByName: function (n, e) {
            var t =
              '?image_type=photo&orientation=horizontal&q=' +
              n +
              '&page=' +
              e +
              '&per_page=12&key=' +
              this.key;
            return fetch('https://pixabay.com/api/' + t).then(function (n) {
              return n.json();
            });
          },
        },
        o = t('9ZfZ'),
        s = t.n(o),
        i = (t('vOC0'), t('dIfx')),
        c = t('dcBu'),
        r = document.querySelector('input[name=query]'),
        u = document.querySelector('#search-form'),
        m = document.querySelector('button[data-action=load-more]'),
        d = document.querySelector('.gallery');
      function h(n) {
        var e = s()(n);
        return d.insertAdjacentHTML('beforeend', e);
      }
      u.addEventListener('submit', function (n) {
        n.preventDefault(),
          (d.innerHTML = ''),
          m.classList.add('is-hidden'),
          (a = 1);
        var e = r.value;
        e.length > 2
          ? l.searchByName(e, a).then(function (n) {
              n.hits.length >= 1
                ? (h(n.hits), m.classList.remove('is-hidden'))
                : i.a.alert("Seems we don't know word " + e);
            })
          : i.a.error(
              'Sorry, but your word is very short and result will be unpredictable',
            );
      }),
        m.addEventListener('click', function () {
          a++;
          var n = r.value;
          l.searchByName(n, a).then(function (n) {
            h(n.hits),
              window.scrollTo({ top: d.scrollHeight, behavior: 'smooth' });
          });
        }),
        (document.querySelector('.gallery').onclick = function (n) {
          null != n.target.dataset.src &&
            c
              .create('\n\t\t<img src="' + n.target.dataset.src + '">\n\t')
              .show();
        });
    },
  },
  [['QfWi', 1, 2]],
]);
//# sourceMappingURL=main.66c5b2d859e6b1b0f3f7.js.map
