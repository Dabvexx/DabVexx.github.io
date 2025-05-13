---
title: "Project: Vexxed Renderer"
layout: post
post-image: ../assets/images/3DVexxPlane.png
description: In this blog post, I will be showing off a custom 3D renderer written in C++ using OpenGL.
tags:
- project
- c++
- opengl
- 3d
---

This project was only possible with <a href="https://www.youtube.com/playlist?list=PLPaoO-vpZnumdcb4tZc4x5Q-v7CkrQ6M-">this tutorial playlist</a> by <a href="https://www.youtube.com/@VictorGordan">Victor Gordon</a> on youtube.

# Project overview

This project is 3D renderer in C++ and OpenGL that renders a skybox and glTF model files through a custom importer. You can move the camera wherever you want to view the models from all angels, as well as use included shaders like vertex normals shaders and outline / stencil shaders.

---

# Reason for choosing this project

I was inspired by Victor Gordon to make my own 3D renderer as a way to learn C++ and OpenGL. I wanted to expand my programming skills as I spent most of my time working with C# and wanted to learn other C languages. This has also inspired me to try making a program in rust to see which one I like the feel of better.

I was also really motivated to learn graphics programming after watching videos by Acerola that go over intermediate graphics programming concepts, and thought it was very interested (check out his sum of sins video for a really interesting water shader.)

---

# Things I learned

I learned quite a lot during this process. The main things I learned was C++ and graphics programming. Graphics programming has always been an interest of mine, and writing all the code to render something from scratch has been really interestin, and given me alot of insight for how graphics programming works, suck as the graphics rendering pipeline with rasterization and frame buffers. C++ was also really cool to learn, and should be a quite useful skill to add to my belt as it is a very powerful language.

I found making my own glTF parser very fun and interesting, as I could for the most part reverse engineer how the file was laid out. I have been really interested in reverse engineering, but have always found it very intimidating to use gihidra or read bytes in a hex editor for hours, so this was like an interesting way to dip my toes in the proverbial water.

The way the camera moves is also very interesting once you wrap your head around why. You would intuitivly thing the camera moves around the world, but really the camera stays still as the world moves around the camera. This is much easier way as warping a mesh is much easier than warping a view point.

---

# Examples in action
<div align="center">
    <video width="640" height="480" controls>
    <source src="../assets/videos/2023-09-30 21-20-26.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
    <video width="640" height="480" controls>
    <source src="../assets/videos/2025-02-23 20-10-25.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
</div>

Seeing this work was one of the coolest moments to me, and really made me see the magic in it. The first video is funny for the texture, but it is the first 3d mesh that i got to render during the process of making the renderer, and was the moment i knew i had to see it through. The second video is the first mesh that was imported via glTF, and rendered with a skybox.

---

# Funny issues along the way
<div align="center">
    <video width="640" height="480" controls>
    <source src="../assets/videos/2025-02-23 20-14-26.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
    <video width="640" height="480" controls>
    <source src="../assets/videos/WHATHAPPENED.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> 
</div>

These issues have been a real pain to fix, and very persistant. I know that these issues are due to the GLTF importer I made but im unsure what part exactly is going wrong

On the left is a 3D model I made for a different project that renders incorrectly as its transform is deformed and the textures are all the same.

On the right is a chess set with a million verts, this shows the engine is fairly powerful, but textures and objects are misplaced in the world.

I am still trying to iron out all the issues, and will post an update once fixed, but im still happy how it turned out


---