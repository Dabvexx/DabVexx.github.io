---
title: "Image to Ascii"
layout: post
post-image: 
description: In this post, I will be discuss how I built an image to ascii converter
tags:
- for fun
- networking
- learning
---

WIP as I cant get the embed to work. Will update as soon as I refactor the code to handle embeding javascript into the posts.

<script src="ImgToAscii.js">ImgToAscii.js</script>

The way it works is basically to take the image, change it to gray scale, and use a lookup table to determine which character to use to represent that value. This can also be parameterized, but I have not done it yet as I cant get it to embed (currently!)

The lookup table uses a very common set of characters ($@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.) to go from bright to dark. The user will be able to specify look up tables, as well as chose from a list of pre determined lookup tables

Below is a gigantic image i made to show off the ascii conversion (I ran it through an ascii to image as it would be very choppy with the standard paragraph breaks) (also this took forever due to the massive size of the image at 10k by 18k)

<div align="center">
    <img src="..\assets\images\AsciiStatue.png" alt="Proxmox Screenshot" width = "100%">
</div>

THIS WHOLE POST IS VERY SUBJECT TO CHANGE!!!!
WIP!!!

---