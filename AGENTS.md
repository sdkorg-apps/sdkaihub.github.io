# Agent Instructions — sdkaihub.github.io

Instructions for ANY AI agent in ANY tool (cross-tool `AGENTS.md`
convention). **This repo is PUBLIC** — it serves https://sdkaihub.com via
GitHub Pages. That fact drives every rule below.

## What this is

**SDK AI Hub** (a brand of SDK Equipment LLC) builds privacy-first apps —
currently Orgora Charts, a local-first org-chart app for iOS/macOS. This
repo is the public website: the homepage, and per-app privacy policy and
support pages (`orgora-charts/`). `CNAME` binds the custom domain and the
`google*.html` file is Google site verification — never delete or rename
either. Plain static HTML by design; no build step, no frameworks.

The business is operated by a solo founder plus AI agents. The operating
rules, decision history, and recovery runbooks live in the account's
**private ops hub repo** — agents with access to the private repos should
read that hub's `AGENTS.md` first. This public file intentionally names no
private repos, people, hosts, or paths.

## Rules for this repo (strict — it is public)

1. **Identity firewall.** Nothing committed here may contain a personal
   name, personal email, private repo names, internal hostnames, or local
   machine paths. Brand identity only. Check diffs before committing.
2. **No secrets, ever.** Not even "harmless" tokens or IDs beyond what a
   public webpage already exposes.
3. **Draft-first.** Public wording changes (especially privacy policy and
   support pages) are drafted for Founder approval before pushing —
   privacy-policy text has legal and App Store review weight.
4. **Don't break live URLs.** App Store listings and OAuth consent screens
   link to these pages; moving/renaming a page needs a redirect or Founder
   sign-off.
5. **Log consequential changes** to the private hub's audit log, and pull
   before pushing.

## THE CONTINUITY RULE (non-negotiable)

If you introduce a new credential, external service, automation, scheduled
job, or infrastructure dependency while working here (e.g. a new DNS
record, analytics service, or deploy step), you MUST in the same session:
(a) route any secret through the encrypted-vault + password-manager flow,
(b) update the recovery/continuity inventories in the private ops hub —
including who OWNS the new piece (founder / employer / third party), so
audits can see what dies with an employer account, (c) append a line to
its audit log. An out-of-date recovery doc is a broken build.
