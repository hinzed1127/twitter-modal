# Twitter Autocomplete mentions

### Prerequisites

Assuming that

1. npm is installed
2. The server-side API is running at <http://localhost:3001>

Run the following commands:

```
npm install
npm start
```

This should automatically open a browser window serving the files. If not, navigate to <http://localhost:9000>

### UI/UX

I tried to model the look of the page after the screenshot included in the spec:

![alt text](./md-assets/screenshot.png)

For UX, I tried to follow how twitter's UI behaves, such as the character countdown for tweets, which turns red as you meet or exceed the 140 character maximum.

### Implementation Notes

One of the first major things I needed to decide in building this was how to structure the box in which the actual tweet was being typed. I was conflicted between using a `<textarea>` element or a `<div>` with `contentEditable="true"`. In researching this, it was interesting to note that Facebook had the same issues in the years before React was open-sourced ([here's a talk discussing this from last year's React Conf](https://www.youtube.com/watch?v=feUYwoLhE_4)). Given the complexities introduced by a `div` for such a small app, I chose to take the `textarea` for a solution that worked well for the small features I needed to provided for this challenge. For scalability, a better long-term choice would be the `div` route (or better yet, FB's open-sourced [solution](https://facebook.github.io/draft-js/)).

#### Edge cases and Things to improve

* If the last word is a mention and you want to get rid of the space inserted after a mention, the suggestions will pop up again, which are probably not be the user's intentions
* Last word assumption in general is flawed. Should be changed to using the `textarea` API and suggest mentions based on cursor position
* Could use some more stylistic improvements (E.g., blue highlighting of mentions and red highlighting of characters over the maximum (like how Twitter's UI does it)
* Performance - rendering of suggestions sometimes isn't up-to-date with the latest tweet text if a user types fast
