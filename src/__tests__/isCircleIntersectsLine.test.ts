import {describe, expect, it} from 'vitest';
import {isCircleIntersectsLine} from '../detectors/isCircleIntersectsLine';

describe('isCircleIntersectsLine', () => {
  it('The line intersects with the circle', () => {
    const circle = {x: 100, y: 100, radius: 100};
    const line = {p1: {x: 75, y: 75}, p2: {x: 75, y: 200}};

    expect(
      isCircleIntersectsLine(circle.x, circle.y, circle.radius, line.p1.x, line.p1.y, line.p2.x, line.p2.y),
    ).toEqual(true);
    expect(
      isCircleIntersectsLine(circle.x, circle.y, circle.radius, line.p1.x, line.p1.y, line.p2.x, line.p2.y),
    ).toEqual(true);
  });

  it('The line does not intersect with the circle', () => {
    const circle = {x: 100, y: 100, radius: 100};
    const line = {p1: {x: 75, y: 75}, p2: {x: 200, y: 75}};

    expect(
      isCircleIntersectsLine(circle.x, circle.y, circle.radius, line.p1.x, line.p1.y, line.p2.x, line.p2.y),
    ).toEqual(false);
    expect(
      isCircleIntersectsLine(circle.x, circle.y, circle.radius, line.p1.x, line.p1.y, line.p2.x, line.p2.y),
    ).toEqual(false);
  });
});
