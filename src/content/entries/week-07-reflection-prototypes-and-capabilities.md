---
title: "Week 7 Reflection: A Working Demo Is Not a Better Tool"
date: 2026-10-20T12:00:00
week: 7
summary: Victor asks whether an interface amplifies what hands and bodies can already do. Houde and Hill ask which question a prototype is actually answering. A polished demo can pass as both and settle neither.
tags: [Reflection, Interaction Design, Prototyping]
draft: false
---

## Takeaway

Read together, the two pieces ask one question from opposite ends. Victor asks whether we have aimed the interaction at the right human ability. Houde and Hill ask how we would know. Victor's definition of a tool is plain: it meets a human need by amplifying a human capability. Needs and technical possibilities get most of the attention. The third term, what a person can already perceive and do, is the one future videos keep dropping. He names the dominant picture Pictures Under Glass. The image changes. The finger meets a smooth pane. A hand can feel weight, texture, edge, temperature, and resistance, and it can grasp, turn, squeeze, and reassemble a thing in space. On the glass, that range is squeezed into tap, swipe, and pinch. His examples are ordinary and hard to argue with. You know how much water is in a glass because of the weight and because the liquid shifts as you tilt it. You know where you are in a book because of the thickness on either side of the page. He clarified later that this is not a dismissal of the iPad. It is a useful step, and a poor final target. Swapping the glass for speech does not repair the loss, because speech gives the hand even less to do. What he wants is a dynamic medium a person can see, feel, and manipulate, with the arm, the balance, and the room in the loop. The practical shift is away from making the computer easier to operate, and toward making a kind of work possible that was not possible before.

Houde and Hill give that claim a way to be tested. They are tired of prototypes being named by their material or their polish: paper, code, high fidelity. A prototype is any representation that answers a design question, including a found object used on purpose. They split the questions into three, and they draw the triangle askew so that none of them outranks the others. Role: what job does this play in someone's life? Look and feel: what do they see, hear, and touch, and what does the action feel like? Implementation: what components make it actually work? A prototype can sit near one corner and barely touch the other two. The audience has to be told which corner it is, because resolution lies. Apple's Knowledge Navigator video shows a professor talking to an agent named Phil who understands him as a human assistant would. It looks like a product. It was a role story for a wide public. The conversation, the timing, and the screen were placeholders for design work that had not been done.

## Connection to a Real-World Example

Their 3D space-planning project is the method in one room. The aim was a spatial application that nontechnical people could use on an ordinary personal computer, with an ordinary mouse, to try furniture in a room. Early on, the design lived mostly as a shared hunch, and three people built three prototypes at the same time.

The role piece was an interactive slideshow. The designer clicked through a rough interface: pick a piece from an online catalog, try it in an approximation of your own room. The belief that virtual space-planning was a useful task had already come from user studies. This prototype's job was to show the team and the organization what the artifact was for. It sketched a few interface elements and stopped there.

The look-and-feel piece started with a foam-core model, which told them the manipulations that mattered were sliding, lifting, and turning. They then built, in Macromedia Director, a single chair made of images pre-drawn at many angles. One click brought up a "handle box," with hand-shaped controls for lifting and turning, and a drag anywhere on the box slid the chair across the floor. People were given tasks that made them move the chair around a virtual room. The code existed only so that test could happen. It was not an exploration of how the final system would be built.

The implementation piece, by Chen, asked a narrower question: how much real-time 3D the fastest Macintosh of the moment, the IIfx, could actually render. Several objects could be manipulated, and the view of the room could move to any perspective. The controls along the side of the screen were the programmer's own levers for the demo. They were not a proposal for the future interface. The team used it to decide what complexity of scene it was reasonable to design for.

The three answers constrained one another. Rendering performance limited how many objects, and of what detail, the role was allowed to promise, and how fine the handles in the interface could be. The role, in turn, needed only a small set of manipulations, which kept the interface and the renderer from having to support everything a general 3D tool might do. Only after those separate questions had answers did the rendering prototype start to grow into an integrated one, with the handle-box interface built into it. A finished program on day one would have blurred which uncertainty had actually been reduced.

That is also how I would test Victor's claim. If the hypothesis is that moving a physical object, and feeling the result, lets a learner grasp a relation that a swipe cannot, then the look-and-feel prototype has to put that action in the hand. A sensor that reports an angle, or a screen that animates a correct answer, sits in a different corner of the triangle. It can be worth building. It does not yet show that a human capability got larger.

## Burning Question

I do not take Victor to mean that more body is always a better interface. Search, rewriting a sentence, and working with someone who is not in the room can all be worse when the hand is busy with an object. The match is between the task, the capability, and the situation. This course keeps pulling toward tangibles, and a working circuit is easy to mistake for the claim. I can already picture a demo in which a light answers a hand and the story about learning is told alongside it. On Houde and Hill's triangle that demo sits near implementation, with the role narrated from outside. What would I have to put in a learner's hands, and what would I have to admit the prototype does not show, before I could say it did something Pictures Under Glass could not?

## Readings

- Victor, B. — *A Brief Rant on the Future of Interaction Design* (2011), and the follow-up responses clarifying the iPad — [worrydream.com](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/)
- Houde, S. & Hill, C. — *What Do Prototypes Prototype?*, in *Handbook of Human-Computer Interaction* (2nd ed.), 1997 — [PDF](https://hci.stanford.edu/courses/cs247/2012/readings/WhatDoPrototypesPrototype.pdf)
