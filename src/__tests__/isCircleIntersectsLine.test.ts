import {describe, expect, it} from 'vitest';
import {isCircleIntersectsLine} from '../isCircleIntersectsLine';
import {CollisionsCircle, CollisionsLine} from '../collisions.types';

describe('isCircleIntersectsLine', () => {
  it('The line intersects with the circle', () => {
    const circle: CollisionsCircle = {x: 100, y: 100, radius: 100};
    const line: CollisionsLine = {p1: {x: 75, y: 75}, p2: {x: 75, y: 200}};

    expect(isCircleIntersectsLine(circle, line)).toEqual(true);
    expect(isCircleIntersectsLine(circle, line)).toEqual(true);
  });

  it('The line does not intersect with the circle', () => {
    const circle: CollisionsCircle = {x: 100, y: 100, radius: 100};
    const line: CollisionsLine = {p1: {x: 75, y: 75}, p2: {x: 200, y: 75}};

    expect(isCircleIntersectsLine(circle, line)).toEqual(true);
    expect(isCircleIntersectsLine(circle, line)).toEqual(true);
  });
});
