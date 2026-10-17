/**
 * Homepage app hub. Add a new object to `SDK_APPS` to ship another card.
 * Orgora keeps its full store links and media; Roadster is the arcade entry.
 */
(function () {
  var SDK_APPS = [
    {
      id: "orgora",
      eyebrowLive: "Live",
      eyebrow: "Org charts",
      name: "Orgora Charts",
      mark: "/assets/orgora_mark.png",
      markAlt: "Orgora mark",
      markClass: "orgora-mark",
      pitch:
        "Map the buying committee — not just the org chart. Tag Economic Buyers and Champions, run MEDDIC on the tree, and keep the map in your Drive. iPhone, iPad, Mac, and the web. Free to start.",
      primary: {
        href: "/orgora/",
        label: "Open in the browser",
        note: "Log in with Google or Microsoft",
      },
      features: [
        {
          brands: [
            { src: "/assets/logo-google.svg", alt: "Google" },
            { src: "/assets/logo-onedrive.svg", alt: "Microsoft OneDrive" },
          ],
          title: "Your Drive or OneDrive",
          body: "Continue with Google or Microsoft so charts save in cloud storage you already own. We never host your files.",
        },
        {
          brands: [{ src: "/assets/logo-linkedin.svg", alt: "LinkedIn" }],
          title: "Clip from LinkedIn",
          body: "Safari Clipper ships in the app. Chrome Clipper is on the Chrome Web Store. Nothing is sent to us.",
        },
      ],
      storeBadges: [
        {
          href: "https://apps.apple.com/us/app/orgora-charts/id6792418699",
          aria: "Download on the App Store",
          img: "/assets/download-on-the-app-store.svg",
          className: "app-store-badge",
          width: 120,
          height: 40,
          alt: "Download on the App Store",
        },
        {
          href: "https://apps.apple.com/us/app/orgora-charts/id6792418699?mt=12",
          aria: "Download on the Mac App Store",
          img: "/assets/download-on-the-mac-app-store.svg",
          className: "app-store-badge",
          width: 156,
          height: 40,
          alt: "Download on the Mac App Store",
        },
        {
          href: "https://chromewebstore.google.com/detail/orgora-clipper/knhanhbopbmibdlepnieiindfilicjba",
          aria: "Available in the Chrome Web Store",
          img: "/assets/available-in-chrome-web-store.png",
          className: "cws-badge",
          width: 206,
          height: 58,
          alt: "Available in the Chrome Web Store",
        },
      ],
      links: [
        { href: "/orgora-charts/clipper.html", label: "Safari and Chrome setup" },
        { href: "/orgora-charts/", label: "Support" },
        { href: "/orgora-charts/privacy.html", label: "Privacy policy" },
      ],
      media: "orgora",
    },
    {
      id: "roadster",
      eyebrowLive: "BETA",
      eyebrow: "",
      name: "Roadster Rally",
      mark: null,
      pitch: "",
      primary: {
        href: "/roadster-rally/play/?map=classic",
        label: "Play",
        note: "Classic BETA in the browser",
      },
      links: [],
      // Reviewed plate only — no baked BETA, no gameplay strip.
      hero: {
        src: "/assets/roadster-rally-crop.png",
        width: 880,
        height: 720,
        alt: "Roadster Rally Classic. Photoreal Roadster mid-jump on a wet night track.",
        href: "/roadster-rally/play/?map=classic",
      },
      accent: "rally",
    },
  ];

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "className") node.className = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function renderOrgoraMedia() {
    var shots = el("div", { className: "shots" });
    var reel = el("div", { className: "reel", "data-reel": "" });
    var frame = el("div", { className: "reel-frame" });
    frame.appendChild(
      el("img", {
        className: "is-on",
        src: "/assets/orgora-shot-orgora-wide.jpg",
        width: "1792",
        height: "1008",
        alt: "Orgora Charts. A chart with Economic Buyer, Champion, and Gatekeeper.",
        "data-label": "Orgora",
        "data-caption": "Orgora. Economic Buyer, Champion, and Gatekeeper on the chart.",
      })
    );
    frame.appendChild(
      el("img", {
        src: "/assets/orgora-shot-devices-wide.jpg",
        width: "1792",
        height: "1008",
        alt: "Orgora Charts on an iPad, with the person sheet on an iPhone.",
        "data-label": "iPhone and iPad",
        "data-caption": "The chart on iPad, and a person on iPhone.",
        "aria-hidden": "true",
      })
    );
    frame.appendChild(
      el("img", {
        src: "/assets/orgora-shot-meeting.jpg",
        width: "1792",
        height: "1008",
        alt: "A meeting with the Orgora sample chart on the screen.",
        "data-label": "The chart",
        "data-caption": "The same chart, up on the screen.",
        "aria-hidden": "true",
      })
    );
    reel.appendChild(frame);
    reel.appendChild(
      el("div", { className: "reel-bar" }, [
        el("button", { type: "button", className: "reel-nav", "data-reel-prev": "", "aria-label": "Previous screen", text: "‹" }),
        el("p", { className: "reel-caption" }),
        el("button", { type: "button", className: "reel-nav", "data-reel-next": "", "aria-label": "Next screen", text: "›" }),
      ])
    );
    reel.appendChild(el("div", { className: "reel-dots", role: "tablist", "aria-label": "Product screens" }));
    shots.appendChild(reel);

    var fig = el("figure", { className: "tour", id: "tour" });
    var video = el("video", { controls: "", playsinline: "", preload: "none", poster: "/assets/orgora-tour.jpg" });
    video.appendChild(el("source", { src: "/assets/orgora-tour.mp4", type: "video/mp4" }));
    fig.appendChild(video);
    fig.appendChild(el("figcaption", { text: "Watch a short tour of Orgora Charts. Created with Grok." }));
    shots.appendChild(fig);

    shots.appendChild(
      el("div", { className: "feature feature-shot" }, [
        el("strong", { text: "Import contacts from your inbox" }),
        el("p", {
          text: "On iPhone and Mac, connect Microsoft or Gmail and Find people — scan your own mail for work domains and start a new org chart from a company. Credentials stay on the device. LinkedIn clips land the same way: a person on the chart, not a file we host.",
        }),
      ])
    );
    return shots;
  }

  function renderCard(app) {
    var card = el("article", {
      className: "app-card" + (app.accent ? " app-card--" + app.accent : ""),
      id: "app-" + app.id,
    });
    var body = el("div", { className: "card-body" });

    var eyebrowKids = [el("span", { className: "live", text: app.eyebrowLive })];
    if (app.eyebrow) eyebrowKids.push(document.createTextNode(" " + app.eyebrow));
    body.appendChild(el("div", { className: "eyebrow" }, eyebrowKids));

    var titleRow = el("div", { className: "app-title" });
    var titleLeft = el("div", { className: "app-title-left" });
    if (app.mark) {
      titleLeft.appendChild(
        el("img", {
          className: "app-mark " + (app.markClass || ""),
          src: app.mark,
          width: "44",
          height: "44",
          alt: app.markAlt || "",
        })
      );
    }
    titleLeft.appendChild(el("h2", { text: app.name }));
    titleRow.appendChild(titleLeft);

    // Rally: Play sits under the media (no empty stretch band). Orgora keeps title CTA.
    if (app.primary && app.accent !== "rally") {
      var cta = el("a", { className: "open-cta", href: app.primary.href });
      cta.appendChild(el("span", { className: "btn primary", text: app.primary.label }));
      if (app.primary.note) cta.appendChild(el("span", { className: "open-note", text: app.primary.note }));
      titleRow.appendChild(cta);
    }
    body.appendChild(titleRow);
    if (app.pitch) {
      body.appendChild(el("p", { className: "app-pitch", text: app.pitch }));
    }

    // Hero art sits under the pitch so it stays visible without equal-height stretch.
    if (app.hero) {
      var heroWrap = el("div", { className: "card-media card-media--inline" });
      var heroLink = el("a", {
        className: "card-hero",
        href: app.hero.href || (app.primary && app.primary.href) || "#",
        "aria-label": app.name + " — open",
      });
      heroLink.appendChild(
        el("img", {
          src: app.hero.src,
          width: String(app.hero.width),
          height: String(app.hero.height),
          alt: app.hero.alt,
        })
      );
      heroWrap.appendChild(heroLink);
      body.appendChild(heroWrap);
    }

    if (app.accent === "rally" && app.primary) {
      body.appendChild(
        el("div", { className: "rally-play" }, [
          el("a", {
            className: "btn primary",
            href: app.primary.href,
            text: app.primary.label,
          }),
        ])
      );
    }

    if (app.features && app.features.length) {
      var features = el("div", { className: "features" });
      app.features.forEach(function (f) {
        var box = el("div", { className: "feature" });
        if (f.brands && f.brands.length) {
          var brands = el("div", { className: "feature-brands" });
          f.brands.forEach(function (b) {
            brands.appendChild(el("img", { src: b.src, width: "28", height: "28", alt: b.alt }));
          });
          box.appendChild(brands);
        }
        box.appendChild(el("strong", { text: f.title }));
        box.appendChild(el("p", { text: f.body }));
        features.appendChild(box);
      });
      body.appendChild(features);
    }

    if (app.storeBadges && app.storeBadges.length) {
      var badges = el("div", { className: "store-badges", "aria-label": "Get " + app.name });
      app.storeBadges.forEach(function (b) {
        var a = el("a", { href: b.href, "aria-label": b.aria });
        a.appendChild(
          el("img", {
            className: b.className,
            src: b.img,
            width: String(b.width),
            height: String(b.height),
            alt: b.alt,
          })
        );
        badges.appendChild(a);
      });
      body.appendChild(badges);
    }

    if (app.links && app.links.length) {
      var links = el("p", { className: "links" });
      app.links.forEach(function (link, idx) {
        if (idx) links.appendChild(document.createTextNode(" · "));
        links.appendChild(el("a", { href: link.href, text: link.label }));
      });
      body.appendChild(links);
    }

    card.appendChild(body);

    if (app.media === "orgora") {
      card.appendChild(renderOrgoraMedia());
    }

    return card;
  }

  function bindReels(root) {
    var reels = root.querySelectorAll("[data-reel]");
    Array.prototype.forEach.call(reels, function (reel) {
      var slides = Array.prototype.slice.call(reel.querySelectorAll(".reel-frame img"));
      var caption = reel.querySelector(".reel-caption");
      var dots = reel.querySelector(".reel-dots");
      var i = 0;
      var timer = 0;
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function show(n) {
        i = (n + slides.length) % slides.length;
        slides.forEach(function (img, idx) {
          var on = idx === i;
          img.classList.toggle("is-on", on);
          img.setAttribute("aria-hidden", on ? "false" : "true");
        });
        if (caption) caption.textContent = slides[i].getAttribute("data-caption") || "";
        Array.prototype.forEach.call(dots.children, function (button, idx) {
          button.setAttribute("aria-current", idx === i ? "true" : "false");
        });
      }
      function arm() {
        clearInterval(timer);
        if (reduce || document.hidden) return;
        timer = setInterval(function () {
          show(i + 1);
        }, 5000);
      }
      slides.forEach(function (img, idx) {
        var button = document.createElement("button");
        button.type = "button";
        button.setAttribute("role", "tab");
        button.setAttribute("aria-label", img.getAttribute("data-label") || "Screen " + (idx + 1));
        button.addEventListener("click", function () {
          show(idx);
          arm();
        });
        dots.appendChild(button);
      });
      var prev = reel.querySelector("[data-reel-prev]");
      var next = reel.querySelector("[data-reel-next]");
      if (prev) prev.addEventListener("click", function () { show(i - 1); arm(); });
      if (next) next.addEventListener("click", function () { show(i + 1); arm(); });
      reel.addEventListener("mouseenter", function () { clearInterval(timer); });
      reel.addEventListener("mouseleave", arm);
      reel.addEventListener("focusin", function () { clearInterval(timer); });
      reel.addEventListener("focusout", function (event) {
        if (!reel.contains(event.relatedTarget)) arm();
      });
      document.addEventListener("visibilitychange", arm);
      show(0);
      arm();
    });
  }

  var hub = document.querySelector("[data-app-hub]");
  if (!hub) return;
  SDK_APPS.forEach(function (app) {
    hub.appendChild(renderCard(app));
  });
  bindReels(hub);
  window.SDK_APPS = SDK_APPS;
})();
