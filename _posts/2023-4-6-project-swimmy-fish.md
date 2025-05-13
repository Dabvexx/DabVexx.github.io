---
title: "Project: Swimmy Fish"
layout: post
post-image: ../assets/images/SwimmyFishPreview.png
description: In this blog post, I will be showing off my CITA 212 final, Swimmy Fishy.
tags:
- project
- gaming
- cita
---

This is a project that I made long ago, hence the date, that I would like to finish now. For the moment this is still VERY WIP. should be done within a few days.

# About this project

This is the project I made for my CITA 212 class made in unity. For that class I made a (rip off) flappy bird inspired game where you press space to jump, and you dodge the pipes that travel towards you. I (uncreativly) changed it to be a fish underwater and called it swimmy fishy. The fish rapidly spinnging started as a bug, but was pretty funny and was told by other classmates I should keep it to make it a btit funnier, so rapidly spinning fish and a feature of the game.

---

# How the pipes are always possible

The way I spawn the pipes might be one of the most elegant algorithems I have written. It takes the middle pipe position, and creates a random offset clamped on how far away this set of pipes is from the one that was just spawned, and how high you can jump in that amount of time, as well as how low you could fall in that amount of time. as time goes on the gap between pipes is also closed tighter and tighter, but is always clamped between how high you jump plus a couple units of headroom to hopefully make you lose, but it is still possible to go on forever.

<div align="center">
    <video width="640" height="480" controls>
    <source src="../assets/videos/SwimmyFishEasy.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
    <video width="640" height="480" controls>
    <source src="../assets/videos/SwimmyFishHard.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
</div>

---
