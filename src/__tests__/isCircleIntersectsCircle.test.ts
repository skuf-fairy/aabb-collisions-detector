import {describe, expect, it} from 'vitest';
import {isCircleIntersectsCircle} from '../isCircleIntersectsCircle';
import {CollisionsCircle} from '../collisions.types';

describe('isCircleIntersectsCircle', () => {
  it('Two circles intersect', () => {
    const circleA: CollisionsCircle = {x: 100, y: 100, radius: 100};
    const circleB: CollisionsCircle = {x: 75, y: 75, radius: 150};

    expect(isCircleIntersectsCircle(circleA, circleB)).toEqual(true);
    expect(isCircleIntersectsCircle(circleB, circleA)).toEqual(true);
  });

  it('Two non-circles intersect', () => {
    const circleA: CollisionsCircle = {x: 150, y: 150, radius: 25};
    const circleB: CollisionsCircle = {x: 50, y: 50, radius: 50};

    expect(isCircleIntersectsCircle(circleA, circleB)).toEqual(false);
    expect(isCircleIntersectsCircle(circleB, circleA)).toEqual(false);
  });
});
