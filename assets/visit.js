(function () {
  var end = "https://visits.sdkaihub.com/collect";
  try {
    var visitor = localStorage.getItem("sdk_visit");
    if (!visitor) {
      visitor = crypto.randomUUID();
      localStorage.setItem("sdk_visit", visitor);
    }
    var session = sessionStorage.getItem("sdk_session");
    if (!session) {
      session = crypto.randomUUID();
      sessionStorage.setItem("sdk_session", session);
    }
    var started = Date.now();
    var path = location.pathname || "/";
    var referrer = document.referrer || "";
    function send(kind) {
      var body = JSON.stringify({
        visitor: visitor,
        session: session,
        path: path,
        referrer: referrer,
        seconds: Math.round((Date.now() - started) / 1000),
        kind: kind
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(end, new Blob([body], { type: "text/plain" }));
      }
    }
    send("start");
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") send("end");
    });
    window.addEventListener("pagehide", function () { send("end"); });
  } catch (e) {}
})();
