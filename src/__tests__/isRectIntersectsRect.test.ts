import {describe, expect, it} from 'vitest';
import {isRectIntersectsRect} from '../detectors/isRectIntersectsRect';

describe('isRectIntersectsRect', () => {
  it('Two rectangles intersect', () => {
    const squareA = {x: 100, y: 100, width: 100, height: 50};
    const squareB = {x: 50, y: 50, width: 150, height: 150};

    expect(
      isRectIntersectsRect(
        squareA.x,
        squareA.y,
        squareA.width,
        squareA.height,
        squareB.x,
        squareB.y,
        squareB.width,
        squareB.height,
      ),
    ).toEqual(true);
    expect(
      isRectIntersectsRect(
        squareB.x,
        squareB.y,
        squareB.width,
        squareB.height,
        squareA.x,
        squareA.y,
        squareA.width,
        squareA.height,
      ),
    ).toEqual(true);
  });

  it('The two rectangles do not intersect', () => {
    const squareA = {x: 100, y: 100, width: 100, height: 50};
    const squareB = {x: 50, y: 250, width: 50, height: 100};

    expect(
      isRectIntersectsRect(
        squareA.x,
        squareA.y,
        squareA.width,
        squareA.height,
        squareB.x,
        squareB.y,
        squareB.width,
        squareB.height,
      ),
    ).toEqual(false);
    expect(
      isRectIntersectsRect(
        squareB.x,
        squareB.y,
        squareB.width,
        squareB.height,
        squareA.x,
        squareA.y,
        squareA.width,
        squareA.height,
      ),
    ).toEqual(false);
  });
});
