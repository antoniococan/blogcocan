
---
title: "First video games"
author: "Antonio Cocan"
pubDatetime: 2026-11-19T04:45:00+02:00
modDatetime: 2026-11-19T16:19:00+02:00
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

## Setting up a project template & opening a window

I like to use object oriented programming (OOP) with C++ and to separate tasks. For small projects like these this is not really needed, but I like to keep good practice. With that in mind, my `main()` function is going to be very minimal. All game related functionalities will be in a separate *class* called `Game`. The basic folder structure will look like this:

```text
gameTemplate/
├── assets/
├── source/
│   ├── main.cpp
│   └── core/
│       ├── game.cpp
│       └── game.hpp
├── CMakeLists.txt
└── readMe.txt
```

Then `main.cpp` is very simple:

```C++
#include "core/game.hpp"

int main()
{
  Game game;

  game.run();

  return 0;
}
```
The first milestone is to open a window using Raylib. The `game.hpp` contains the class `Game` with variables for the window width, window height, and the targeted frames per second (FPS). We then have the constructor and destructor and functions that have several different responsibilities:

- `void initialize()` is a function whose purpose is to initialize OpenGL context and set initial values for variables or similar functionalities.
- `void update(float deltaTime)` is a function whose purpose is to update anything that is dependent on time, e.g. character movement, enemy movement, shooting.
- `void draw()` is a function that simply draws to the screen, e.g. drawing character shapes or models, etc.
- `void loop()` is the main game loop where all the functions come together in a sequential way.
- `void run()` simply initializes, loops, and closes the game.
- `void close()` is a function whose purpose is to close the window, close other resources, de-allocate resources, etc.

Altogether the `game.hpp` file looks like this:

```C++
class Game
{
    private:

        int m_windowWidth;
        int m_windowHeight;
        int m_targetFPS;

    protected:

    public:

        Game();
        ~Game();

        void initialize();
        void update(float deltaTime);
        void draw();
        void loop();
        void run();
        void close();

};
```
The `game.cpp` file looks like this:

```C++
#include "game.hpp"

#include <print>
#include "raylib.h"

Game::Game()
    : m_windowWidth {1200}
    , m_windowHeight {1000}
    , m_targetFPS {60}
{
    std::println("Game created.");
}

Game::~Game()
{
    std::println("Game destroyed.");
}

void Game::initialize()
{
    InitWindow(m_windowWidth, m_windowHeight, "Basic Window");
    SetTargetFPS(m_targetFPS);
}

void Game::update(float deltaTime)
{
}

void Game::draw()
{
    DrawText("BasicTemplate", 10.0f, 10.0f, 20.0f, MAROON);

    const char *fpsText = 0;
    fpsText = TextFormat("FPS: %i", GetFPS());
    DrawText(fpsText, 10.0f, 40.0f, 20, MAROON);
}

void Game::loop()
{
    while(!WindowShouldClose())
    {
        float time = GetFrameTime();

        update(time);

        BeginDrawing();

            ClearBackground(SKYBLUE);

            draw();

        EndDrawing();
    }
}

void Game::run()
{
    std::println("Game running.");

    initialize();

    loop();

    close();
}

void Game::close()
{
    CloseWindow();
}
```

## First game

For my first game I decided to do something very simple. I want to have a two-dimensional character which is cube shaped and can be controlled by WASD to move around the plane. I wanted the character to not be able to move out of the window bounds. Then I wanted a static (meaning not moving) disc shaped object. Upon collision with this object, the player wins the game. Very simple. Here is the result:



## Second game

## 

It is a good idea to do error handling. One can use the C++ standard library to print to the console using `<iostream>`. Or I could go on a side quest and program my own error handling. But instead of doing that, I'm going to use `spdlog` for error handling which is a fast C++ logging library. It can be found on Github [here](https://github.com/gabime/spdlog).
