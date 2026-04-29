---
title: "But does it scale?"
date: "2026-04-15"
description: "I built a recommendation feed designed for millions. It fell apart with fifteen users. Here's exactly what went wrong."
tags: ["Poll Feed"]
author: "Knoli Team"
---

I built a solution for scale when I was only ever going to have a few users at the start. I recently started onboarding a few users into a close beta to test my app.

On paper, building a "smart" feed sounds straightforward. You add some algorithmic rules:

- Creator diversity (don't show too much from the same person)
- Impression fatigue (don't over-show the same poll)
- Cold-start boosts (help new polls get visibility)

All of these are good ideas. In fact, they're the same kinds of signals used in large-scale platforms. I didn't want to reinvent the wheel, but the truth is those systems assume millions of users and tons of content. Right now, I'm closer to a tight group of 10–15 active users.

Creator diversity: the logic in place to reduce how often the same creator shows up in your feed. Started penalizing my most active users for posting polls, sending the poll they posted to the bottom of the feed, an action that should have otherwise been rewarded. The same thing happened when new users came on and posted poll after poll to test the app's functionality.

Impression fatigue, instead of just reducing the visibility of a poll based on how much it's viewed, kept pushing the polls at the top, right down to the bottom, which meant the old polls show up at the top, which got pushed back down again, which really turns the list upside down over and over again.

Cold-start boost, which should have really given a user who hasn't gotten many views a chance to shine. Sounded like an excellent algorithmic weighted value, but was useless when it boils down to a group of 10–15 people.

When they talk about over-engineering a solution, this is what they're talking about. I fell into the trap again… we're engineers, we love to engineer.
