# IS 120, Homework 9 - James Day

The first thing I did was make a quick sketch of where I wanted everything to go. That really helped me decide how to lay things out and wether to pick flex or grid for specific elements. Getting all the HTML elements down and laid out correctly really helped me focus on the JavaScript next, since I just had to manipulate the things that were already there.

It was a bit hard to know where to start with the JS, and I think that was probably one of the hardest parts. To get going, I do what I usually do in C++ and start writing comments that describe the structure of my program, almost like a really loose pseudocode. That helped me figure out that I would first capture the DOM elements as variables, then define the update function, and finally add the update function as an event listener to the corresponding elements and events.

Once the JS was mostly dialed in, I went back to the styling to finalize it. I changed some things as I was working, the first being wrapping the three main sections of the calculator in `div` elements to make the layout nicer. Originally, that was because I wanted the radio buttons in a 2x2 grid and the wrappers made that easier. However, I later decided they would look better as just a column of buttons, so the `div` wrappers ended up being unnecessary. To make it nice, I changed the `size` attribute of the inputs so they would be shorter, added some padding so that things weren't so cramped, and then added a neumorphism style to the calculator body because I like neumorphism a lot.

### TL; DR:

I did basic styling first, then JS, then went back to fine-tuning styling again, then JS again.

Another problem I had was that I wanted to make it so that "NaN" wouldn't appear on the calculator when the radio buttons would update without an input value, or when the inputs were erased. At first, I just set the code to check if the math results were equal to `NaN`:

```
if (tipResult == NaN || totalResult == NaN) {
    // Code goes here
    // I checked both just in case
    // Also learned the OR "||" operator, which (fun fact) is the same as in C++
}
```

But it wasn't working. So I asked Claude why, and I learned that `NaN` isn't equal to anything, including `NaN`.

That's annoying.

However, it was just a simple matter of googling "how to check for `NaN` in JavaScript" to learn about `Number.isNaN()`, and then it worked perfectly.

As for future features I would add, they mostly have to do with styling. I'm proud that I figured out how to add a custom percentage option and that I thought to add a tip _and_ total amount to make math easier on the user.

I think making this into a copy/paste-able card element would be useful, then I could add it to other websites as needed. Also, figuring out how to make radio buttons look like the other link buttons I've made would be nice, that way there could be hover effects and it could have similar styling to when you pay at a Square thing at a restaurant (or whatever thing has you pick a tip amount and give a signature, you know what I'm talking about??) so that it's a similar experience and hopefully more intuitive for users.

Otherwise, I'm actually pretty happy with what I've managed to make.
