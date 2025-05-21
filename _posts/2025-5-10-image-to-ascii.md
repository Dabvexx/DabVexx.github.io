---
title: "(WIP) Image to Ascii"
layout: post
post-image: 
description: In this post, I will be discuss how I built an image to ascii converter
tags:
- for fun
- project
- javascript
---

WIP as I cant get the embed to work. Will update as soon as I refactor the code to handle embeding javascript into the posts.

---

# How it works

The way it works is to take the image, change it to gray scale, and use a lookup table to determine which character to use to represent that value. This can also be parameterized and let to user change many values, such as the lookup table

The lookup table uses a very common set of characters alot of image to ascii projects use. ($@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.) to go from bright to dark. The user will be able to specify look up tables, as well as chose from a list of pre determined lookup tables to find their best fit. You will also be able to adjust the scale, as it currently breaks down the image in a set of 8 by 8 pixels to a character, the average of a 8 by 8 area will be replaced with a character. But by changing a scale you could eventually make each pixel into a color

Below is a gigantic image I made to show off the ascii conversion (I ran it through an ascii to image as it would be very choppy with the standard paragraph breaks) (also this took forever due to the massive size of the image at 10k by 18k)

---

<div align="center">
    <img src="..\assets\images\AsciiStatue.jpg" alt="Giant ascii image" width = "100%">
</div>

---

You may need to open this in a new tab to see the ascii due to the massive scale of the image.

Once i have a couple hundred bucks laying around, I think this would be an image to get a massive print of this to put in my room, as it looks amazing.

---

# Where to go from here

I would like to add several parameters that can be changed, such as contrast thresholds, inverting the color scale, increasing resolution, etc.
It would also be very interesting to still color the image the original pixel color, just with no brightness maybe as to keep the ascii brightness feel.
I would also like this to accept gifs and video, so you could maybe even stream in camera data and have it convert to ascii in real time (though this may be better as its own APK app).

---
