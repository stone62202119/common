;(function(m, o, d, u, l, a, r) {
  if(m[d]) return;
  function f(n, t) { return function() { r.push(n, arguments); return t } }
  m[d] = a = { args: (r = []), config: f(0, a), use: f(1, a) };
  m.define = f(2);
  u = o.createElement('script');
  u.id = d + 'node';
  var scripts = document.getElementsByTagName('script'),
  currentScript = scripts[scripts.length - 1],
  src = currentScript.src,
  path = src.substring(0, src.lastIndexOf('/') + 1);
  console.log(currentScript.getAttribute('seed'));
  u.src = path+'sea.js';
  l = o.getElementsByTagName('head')[0];
  a = o.getElementsByTagName('base')[0];
  a ? l.insertBefore(u, a) : l.appendChild(u);
})(window, document, 'seajs');
/*吃亏了，好不容易写好的文件丢了*/