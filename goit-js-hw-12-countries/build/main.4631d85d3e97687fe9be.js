(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    L1EO: function (n, e, t) {},
    QfWi: function (n, e, t) {
      'use strict';
      t.r(e);
      t('L1EO'), t('lmye'), t('D/wG'), t('JBxO'), t('FdtR');
      var i = t('jffb'),
        a = t.n(i),
        r = t('dIfx'),
        o = document.querySelector('.js-input'),
        u = document.querySelector('.js-list'),
        c = document.querySelector('.js-country');
      o.addEventListener(
        'input',
        a()(function (n) {
          return l(n);
        }, 500),
      );
      var l = function (n) {
          var e = n.target.value;
          e &&
            fetch('https://restcountries.eu/rest/v2/name/' + e)
              .then(function (n) {
                return n.json();
              })
              .then(function (n) {
                return console.log(n), n;
              })
              .then(function (n) {
                return s(n);
              });
        },
        s = function (n) {
          var e = n.length;
          if (
            ((u.innerHTML = ''), (c.innerHTML = ''), r.a.closeAll(), 1 === e)
          ) {
            var t = n[0],
              i = t.name,
              a = t.capital,
              o = t.population,
              l = t.languages,
              s = t.flag;
            c.innerHTML =
              '\n      <div class="titlecountry">\n        <h1 class="name">' +
              i +
              '</h1>\n      </div>\n      <div class="container">\n        <div class="info">\n          <p>Capital: ' +
              a +
              '</p>\n          <p>Population: ' +
              o +
              '</p>\n          <ul>Languages: ' +
              l.map(function (n) {
                return '<li>' + n.nativeName + '</li>';
              }) +
              '</ul>\n        </div>\n        <div class="flag">\n          <object id="svg-object" data="' +
              s +
              '" type="image/svg+xml"></object>\n        </div>\n      </div>';
          }
          if (e >= 2 && e <= 10) {
            var f = n.map(function (n) {
              return '<li>' + n.name + '</li>';
            });
            u.innerHTML = f;
          }
          e > 10 &&
            r.a.alert(
              'Too many matches found. Please enter a more specific query!',
            );
        };
    },
  },
  [['QfWi', 1, 2]],
]);
