# AABB Collisions Detector

It is a library for detecting collisions between simple geometric shapes such as rectangles, circles, points and lines. It uses typescript and has no dependencies. Easy to use, compatible with both canvas and any rendering libraries such as pixi.js , phaser.js and others.

[Interactive example](https://codepen.io/vladosina/pen/zYgGXbm)

## Installation

npm

```shell
npm i --save aabb-collisions-detector
```

yarn

```shell
yarn add aabb-collisions-detector
```

## API

| Detector                                       | Description                                                 |
| ---------------------------------------------- | ----------------------------------------------------------- |
| isRectIntersectsRect(rectA, rectB)             | Determines whether two rectangles intersect                 |
| isRectIntersectsCircle(rect, circle)           | Determines whether the rectangle intersects with the circle |
| isCircleIntersectsCircle(circleA, circleB)     | Determines whether two circles intersect                    |
| isPointIntersectsCircle(point, circle)         | Determines whether a point is inside a circle               |
| isCircleIntersectsLine(circle, line)           | Determines whether the line intersects with the circle      |
| isRectInsideRect(innerRect, outerRect)         | Is the rectangle inside another rectangle                   |
| isCircleInsideCircle(innerCircle, outerCircle) | Is the circle inside another circle                         |
| isRectInsideCircle(innerRect, outerCircle)     | Is the rectangle inside another circle                      |
| isCircleInsideRect(innerCircle, outerRect)     | Is the circle inside another rectangle                      |

## Code Example

```typescript
import {
  isRectIntersectsRect,
  isRectIntersectsCircle,
  isCircleIntersectsCircle,
  isPointIntersectsCircle,
  isCircleIntersectsLine,
  isRectInsideRect,
  isCircleInsideCircle,
  isRectInsideCircle,
  isCircleInsideRect
} from 'aabb-collisions-detector';

const rectA = {x: 0, y: 0, width: 100, height: 50};
const rectB = {x: 50, y: 50, width: 50, height: 25};
const circleA = {x: 25, y: 25, radius: 10};
const circleB = {x: 0, 100, radius: 10};
const point = {p1: {x: 0, y: 0}, p2: {x: 100, y: 100}};
const line = {p1: {x: 75, y: 75}, p2: {x: 200, y: 75}};

isRectIntersectsRect(rectA.x, rectA.x, rectA.width, rectA.height,rectB.x, rectB.y, rectB.width, rectB.height);
isRectIntersectsCircle(rectA.x, rectA.y, rectA.width, rectA.height, circle.x, circle.y, circle.radius);
isCircleIntersectsCircle(circleA.x, circleA.y, circleA.radius, rectB.x, rectB.y, rectB.width, rectB.height);
isPointIntersectsCircle(point.p1.x, point.p1.y, point.p2.x, point.p2.y, circleA.x, circleA.y, circleA.radius);
isCircleIntersectsLine(circleA.x, circleA.y, circleA.radius, line.p1.x, line.p1.y, line.p2.x, line.p2.y);
isRectInsideRect(rectA.x, rectA.y, rectA.width, rectA.height, rectB.x, rectB.y, rectB.width, rectB.height);
isCircleInsideCircle(circleA.x, circleA.y, circleA.radius, circleB.x, circleB.y, circleB.radius);
isRectInsideCircle(rectA.x, rectA.y, rectA.width, rectA.height, circleA.x, circleA.y, circleA.radius);
isCircleInsideRect(circleA.x, circleA.y, circleA.radius, rectA.x, rectA.y, rectA.width, rectA.height);
```
