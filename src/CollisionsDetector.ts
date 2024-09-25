import {isRectIntersectsRect} from './isRectIntersectsRect';
import {isCircleIntersectsCircle} from './isCircleIntersectsCircle';
import {isRectIntersectsCircle} from './isRectIntersectsCircle';
import {isCircleIntersectLine} from './isCircleIntersectsLine';
import {isPointIntersectCircle} from './isPointIntersectsCircle';

export class CollisionsDetector {
  public static isRectIntersectsRect = isRectIntersectsRect;
  public static isCircleIntersectsCircle = isCircleIntersectsCircle;
  public static isRectIntersectsCircle = isRectIntersectsCircle;
  public static isCircleIntersectsLine = isCircleIntersectLine;
  public static isPointIntersectsCircle = isPointIntersectCircle;
}
