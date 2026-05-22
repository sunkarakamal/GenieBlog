---
title: "Why I built CloudGenie"
description: "After 20 years stitching together cloud platforms, I got tired of paying for the same problems over and over. So I built the console I wished existed."
pubDate: 2026-05-21
heroEmoji: "⚡"
tags: ["cloudgenie", "finops", "platform-engineering"]
---

For the last twenty years, I've been building cloud and platform infrastructure
for other people. Banks. Pharma. Government. The kind of organisations where a
mis-tagged EC2 instance can leak six figures a quarter and nobody notices until
finance kicks the door in.

The pattern was always the same.

A new project would spin up. We'd reach for the same tools — Terraform, Helm,
Argo CD, CloudWatch, Cost Explorer, a couple of homegrown Python scripts duct-
taped together — and we'd rebuild the same dashboards, the same FinOps reports,
the same governance guardrails. Every. Single. Time.

Six months later, the same questions would land in my inbox:

> "Why is our AWS bill up 23% this month?"
> "Which of our Kubernetes clusters is bleeding money?"
> "Can you generate Terraform for this new VPC by Friday?"
> "Are we actually compliant with our own tagging policy?"

I'd spend a week stitching together answers from five disconnected tools.
By the time I had a clean dashboard, the numbers had already moved.

## The "this should already exist" feeling

I kept getting the same itch. Not the *"there's no tool for this"* itch —
there are dozens. The itch was: **why are these tools so disconnected?**

- Cost Explorer tells you what you spent. It doesn't tell you what to do about it.
- Terraform Cloud generates infrastructure. It doesn't tell you if it's the cheapest place to run it.
- CloudWatch alerts on metrics. It doesn't correlate them to your bill.
- Compliance scanners flag drift. They don't help you fix it.

Every platform team ends up writing the same glue code to bridge these worlds.
That glue code becomes tribal knowledge. The engineer who wrote it leaves.
The dashboards rot. The cycle repeats.

I wanted one console where:

1. I can see my entire multi-cloud estate — AWS, Azure, GCP — in one view.
2. I can ask *"why did spend jump yesterday?"* and get a real answer, not a chart.
3. I can generate Terraform / Pulumi / Helm from a topology diagram in the UI.
4. I can spot waste, anomalies and risk **before** finance asks.
5. Every team gets their own tenant. No data crosses between them.

So I built it. That's CloudGenie.

## What's in v1

**Multi-cloud intelligence** — AWS, Azure, GCP unified. Inventory, costs,
security findings, incidents, all in one place.

**FinOps Cloud Panel** — KPI strip, opportunity board, savings pipeline,
anomaly detection. The screen I always wanted on a wall in the platform-team
room.

**Cross-Cloud Optimization Matrix** — for each resource type, which cloud is
cheapest *right now*? Move recommendations included.

**InfraBlueprint Designer** — draw your topology, get Terraform / Pulumi /
Helm / Argo CD manifests out. 6 IaC generators, 8+ starter templates.

**AI Copilot** (Claude Sonnet under the hood) — ask questions in plain
English. *"Why did my S3 bill jump 40% last week?"* gets you a real
investigation, not a generic chart.

**Multi-tenant from day one** — every team gets isolated data. Your admin
still sees the whole picture.

## What I learnt building it

A few things I didn't expect:

- **Data isolation is harder than security.** Every endpoint that touches
  cloud data has to route through one tenant-scoping function, or you'll leak
  one customer's resources into another's dashboard. I learnt this the
  embarrassing way — by leaking my own real AWS data into a test user's
  view, three iterations in a row, before I finally consolidated the gate.

- **Mock data is dangerous if you're not careful.** Guest users should see
  curated demo data so the product looks alive. Signed-in users should never
  see mock data. The difference is one boolean and one migration script.

- **AI tools speed up everything except the last 10%.** They write the
  initial scaffold in an afternoon. The last 10% — auth, multi-tenancy,
  observability, the weird edge cases — still takes weeks. That's actually
  the work that matters.

- **Visual verification beats unit tests.** I'd ship "fixes" that passed
  curl and broke the UI. Playwright sweeps across every sidebar page caught
  bugs that no API test would have surfaced. That's now baked into our
  release process.

## What's next

- **CloudGenie Agent (v1.1, ~4 weeks out)** — a CLI / Helm chart / Terraform
  module customers can install in their own infrastructure. Same dashboards,
  no IAM keys shared with us.

- **PagerDuty & OpsGenie bidirectional sync** — incidents flow both ways.

- **ClickHouse + Neo4j backends** — for analytics-scale queries and infra
  dependency graphs.

If any of this sounds useful, you can try it free for 7 days, no card:
<a href="https://cloudgenie.co" target="_blank" rel="noopener">cloudgenie.co</a>.
I'd genuinely love to hear what's missing — drop me a line on
<a href="https://www.linkedin.com/in/kamal-nadh-b1156b75/" target="_blank" rel="noopener">LinkedIn</a>
or hit the feedback button inside the app.

This is the first post in what I'm planning to make a regular writeup of
the build journey — the architecture decisions, the FinOps patterns, the
bugs I'd rather forget. Subscribe to the [RSS feed](/genieblog/rss.xml) if
that sounds interesting.

— Kamal
