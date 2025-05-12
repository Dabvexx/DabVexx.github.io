---
title: "Project: Vexxed Renderer"
layout: post
post-image: 
description: In this blog post, I will be showing off a custom 3D renderer written in C++ using OpenGL.
tags:
- project
- c++
- opengl
- 3d
---

This project was only possible with <a href="https://www.youtube.com/playlist?list=PLPaoO-vpZnumdcb4tZc4x5Q-v7CkrQ6M-">this tutorial playlist</a> by <a href="https://www.youtube.com/@VictorGordan">Victor Gordon</a> on youtube.

# Project overview

This project is 3D renderer in C++ and OpenGL that renders a skybox and glTF model files through a custom importer. You can move the camera wherever you want to view the models from all angels, as well as shaders like vertex normals shaders.

---

# Reason for the project

I was inspired by Victor Gordon to make my own 3D renderer as a way to learn C++ and OpenGL. I wanted to expand my programming skills as I spent most of my time working with C++ 

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

---