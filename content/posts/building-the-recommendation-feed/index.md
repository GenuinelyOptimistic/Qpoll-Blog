---
title: "How We Built the 'For You' Feed"
date: "2026-04-24"
description: "Designing a recommendation algorithm for polls is surprisingly different from content feeds. Here's the thinking behind Knoli's weighted scoring system."
tags: ["Engineering", "Product"]
author: "Knoli Team"
---

Most recommendation systems optimize for engagement — time on platform, clicks, shares. That works for social media, where the goal is to keep you scrolling. But it's terrible for polls.

If a poll recommendation system optimizes purely for engagement, you'll see the same inflammatory topics over and over. Outrage drives clicks. But outrage polls don't produce useful data.

We wanted something better.

## The signals we use

Our "For You" feed scores each unvoted poll against seven weighted signals:

**Recency** — newer polls score higher. A poll asked six months ago is usually less relevant than one asked today.

**Engagement** — a poll with many responses signals it resonates with people. But raw vote count can be gamed, so we weight this carefully.

**Interest match** — we track which categories you've engaged with and boost polls in those areas. If you've voted on technology polls frequently, you'll see more of them.

**Novelty** — you shouldn't see the same topic phrased five different ways. We actively suppress near-duplicates.

**Diversity** — left unchecked, interest matching creates a filter bubble. We intentionally surface polls outside your usual categories on a regular basis.

**Social** — polls that people in your network have interacted with get a modest boost.

**Exploration** — a small random factor keeps the feed from calcifying. New topics get a chance to find their audience.

## The hard part: calibrating the weights

The algorithm is straightforward to describe. The hard part is calibrating how much each signal contributes to the final score.

Too much recency weight → older quality polls never surface  
Too much engagement weight → viral content dominates everything  
Too little diversity → users only see what they already like  

We've been tuning this by looking at response rates and completion rates across cohorts. A well-calibrated feed should produce high completion rates (people who start a poll finish it) *and* diversity in what people see.

We're still learning. The weights we ship with beta will almost certainly change.

## What we're not optimizing for

We're explicitly *not* optimizing for time on platform. We want you to see the polls that matter to you, answer them, and get on with your day. 

A feed that respects your attention is a feed you'll keep coming back to.
