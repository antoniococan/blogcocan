
---
title: "First video games"
author: "Antonio Cocan"
pubDatetime: 2026-11-19T22:04:45+02:00
modDatetime: 2026-11-19T23:04:49+02:00
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

## Setting up a project template

## Opening a window

The first milestone is to open a window using Raylib.

```C++
InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
```

## First game

For my first game I decided to do something very simple. I want to have a two-dimensional character which is cube shaped and can be controlled by WASD to move around the plane. I wanted the character to not be able to move out of the window bounds. Then I wanted a static (meaning not moving) disc shaped object. Upon collision with this object, the player wins the game. Very simple. Here is the result:

## Second game

