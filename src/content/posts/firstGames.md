
---
title: "First video games"
author: "Antonio Cocan"
pubDatetime: 2026-11-19T22:04:45+02:00
modDatetime: 2026-11-19T23:05:07+02:00
description: "My first games with C++ and Raylib."
tags:
  - game-programming
  - C++
  - Raylib
  - games
featured: false
draft: false
---

This blog post is about the first few games that I programmed using C++ and Raylib.

## Some remarks

A few things before we get started. This is not a tutorial on how to program these games. This is also not a tutorial on Raylib. Things like how to open a window or basic character movement are easily found on [Raylib](https://www.raylib.com/).

In graphics programming, the y-axis is inverted to what we are used to from mathematics. This means that if we start at the origin on the y-axis, then moving down means that our values are positive and moving up means that our values are negative. Opposite to how the y-axis works in mathematics. This is important to keep in mind.

## Setting up a project template

I like to use object oriented programming (OOP) with C++ and to separate tasks. For small projects like these this is not really needed, but I like to keep good practice. With that in mind, my `main()` function is going to be very minimal. All game related functionalities will be in a separate *class* called `Game`.

## Opening a window

The first milestone is to open a window using Raylib.

```C++
InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
```

## First game

For my first game I decided to do something very simple. I want to have a two-dimensional character which is cube shaped and can be controlled by WASD to move around the plane. I wanted the character to not be able to move out of the window bounds. Then I wanted a static (meaning not moving) disc shaped object. Upon collision with this object, the player wins the game. Very simple. Here is the result:



## Second game

