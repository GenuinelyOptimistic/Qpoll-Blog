---
title: "Rounding Errors"
date: "2026-04-01"
description: "Already running into some interesting challenges with response calculations in what initially felt like a simple poll app. It's a small detail, but one that can have a real impact on how data is interpreted and presented."
tags: ["Product"]
author: "Knoli Team"
---

Already running into some interesting challenges with response calculations in what initially felt like a "simple" poll app. It's a small detail, a rounding error, but one that can have a real impact on how data is interpreted and presented.

That said, this is exactly what I enjoy about building something new. Every challenge is a reminder that the details matter.

If you're like me and didn't know what a rounding error was until today:

A rounding error occurs when a number is simplified (rounded) to fit a certain number of decimal places or digits, and in doing so, loses a bit of precision.

For example, if you have percentages like 33% + 33% + 33%, they only add up to 99%, not 100%. That missing 1% is a rounding error.

Individually, these differences are small, but at scale or in user-facing analytics they can impact user experience, perceived accuracy, and trust. In the poll below, this is what happened when I asked ChatGPT to calculate response percentages — it didn't quite know what to do with the extra 1%. Which is how I ended up discovering the error. Simply assigning that missing 1% to the first option arbitrarily is definitely not the "right solution" though.
