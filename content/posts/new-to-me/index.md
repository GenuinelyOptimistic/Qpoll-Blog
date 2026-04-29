---
title: "New to Me"
date: "2026-04-08"
description: "We rebuilt the feed for the third time. We'll do it a fourth time if we have to. Here's what went wrong and what we did about it."
tags: ["Poll Feed"]
author: "Knoli Team"
---

We are extremely grateful for all the feedback we get, so when feedback about our feed kept coming up again and again, it broke our hearts a little.

> "Why are old polls staying at the top for days?"
> "Can I see polls that are new to me?"
> "Why is my poll that I just posted already 3rd in the list?"

We really sat with this feedback for a while and examined the solution we had built, and the only thing we could do to fix the problem was to rebuild the entire feed again for the third time, and honestly? We'll do it a fourth time if we have to. It's still not perfect.

So what was the problem? The problem was that we built a solution for scale when we were only ever going to have a few users at the start.

On paper, building a "smart" feed sounds straightforward. You add some algorithmic rules:

- Creator diversity (don't show too much from the same person)
- Impression fatigue (don't over-show the same poll)
- Cold-start boosts (help new polls get visibility)

All of these are _good ideas._ In fact, they're the same kinds of signals used in large-scale platforms. We didn't want to reinvent the wheel, but the truth is those systems assume **millions of users and tons of content**. Right now, we're closer to a tight group of 10–15 active users.

Creator diversity: the logic in place to reduce how often the same creator shows up in your feed started penalizing our most active users for posting polls. Sending the poll they posted to the bottom of the feed, an action that should have otherwise been rewarded. The same thing happened when new users came on and posted poll after poll to test the app's functionality.

Impression fatigue, instead of _just_ reducing the visibility of a poll based on how much it's viewed, kept pushing the polls at the top, right down to the bottom, which meant the old polls show up at the top, which got pushed back down again, which really turns the list upside down over and over again.

Cold-start boost, which should have really given a user who hasn't gotten many views a chance to shine. Sounded like an excellent algorithmic weighted value, but was useless when it boils down to a group of 10–15 people.

When they talk about over-engineering a solution, this is what they're talking about. We fell into the trap again… we're engineers, we love to engineer.

## The Solution

We removed all the noise and kept things simple. Instead of hardcoding those fancy indicators into the feed logic (diversity, impressions, boosts) we'll pull it out into its own configurable layer. We could play with the configuration as much as we would like, as the app scales. The perfect mix of hot and cold, if you like… depending on who was taking a shower.

But we weren't done. We took it a step further, keeping simplicity in mind, and the question "how do I see polls that I haven't voted on?"… To answer that question, we added a new feature.

The answer is simple now.

Just tap "For you," that's it.
