if (!self.define) {
  let e,
    t = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    t[i] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = t), document.head.appendChild(e);
        } else (e = i), importScripts(i), t();
      }).then(() => {
        let e = t[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, o) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[r]) return;
    let s = {};
    const c = (e) => i(e, r),
      l = { module: { uri: r }, exports: s, require: c };
    t[r] = Promise.all(n.map((e) => l[e] || c(e))).then((e) => (o(...e), s));
  };
}
define(["./workbox-071b4188"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "3bfd9608.js", revision: "76e76c3d59bc0dc07214dab599713ecb" },
        { url: "index.html", revision: "fce8e6b45864f15fc40d48ea2b9da602" },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))
    ),
    e.registerRoute("polyfills/*.js", new e.CacheFirst(), "GET");
});
//# sourceMappingURL=sw.js.map
