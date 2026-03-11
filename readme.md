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
| isRectInsideRect(innerRect, outerRect)         | Determines whether rectangle inside another rect angle      |
| isCircleInsideCircle(innerCircle, outerCircle) | Determines whether circle inside another circle             |
| isRectInsideCircle(innerRect, outerCircle)     | Determines whether rectangle inside circle                  |
| isCircleInsideRect(innerCircle, outerRect)     | Determines whether circle inside rect                       |

## Code Example

```typescript
import {
  // types
  CollisionsRectangle,
  CollisionsCircle,
  CollisionsLine,
  Point2d,

  // detectors
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

const rectA: CollisionsRectangle = {x: 0, y: 0, width: 100, height: 50};
const rectB: CollisionsRectangle = {x: 50, y: 50, width: 50, height: 25};
const circleA: CollisionsCircle = {x: 25, y: 25, radius: 10};
const circleB: CollisionsCircle = {x: 0, 100, radius: 10};
const point: CollisionsLine = {p1: {x: 0, y: 0}, p2: {x: 100, y: 100}};

isRectIntersectsRect(rectA, rectB);
isRectIntersectsCircle(rectA, circle);
isCircleIntersectsCircle(circleA, rectB);
isPointIntersectsCircle(point, circleA);
isCircleIntersectsLine(circleA, line);
isRectInsideRect(rectA, rectB);
isCircleInsideCircle(circleA, circleB);
isRectInsideCircle(rectA, circleA);
isCircleInsideRect(circleA, rectA);
```
