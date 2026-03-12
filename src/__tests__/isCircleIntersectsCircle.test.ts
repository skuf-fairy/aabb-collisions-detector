import {describe, expect, it} from 'vitest';
import {isCircleIntersectsCircle} from '../detectors/isCircleIntersectsCircle';

describe('isCircleIntersectsCircle', () => {
  it('Two circles intersect', () => {
    const circleA = {x: 100, y: 100, radius: 100};
    const circleB = {x: 75, y: 75, radius: 150};

    expect(
      isCircleIntersectsCircle(circleA.x, circleA.y, circleA.radius, circleB.x, circleB.y, circleB.radius),
    ).toEqual(true);
    expect(
      isCircleIntersectsCircle(circleB.x, circleB.y, circleB.radius, circleA.x, circleA.y, circleA.radius),
    ).toEqual(true);
  });

  it('Two non-circles intersect', () => {
    const circleA = {x: 150, y: 150, radius: 25};
    const circleB = {x: 50, y: 50, radius: 50};

    expect(
      isCircleIntersectsCircle(circleA.x, circleA.y, circleA.radius, circleB.x, circleB.y, circleB.radius),
    ).toEqual(false);
    expect(
      isCircleIntersectsCircle(circleB.x, circleB.y, circleB.radius, circleA.x, circleA.y, circleA.radius),
    ).toEqual(false);
  });
});
