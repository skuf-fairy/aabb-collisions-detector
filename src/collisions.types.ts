export interface Point2d {
  x: number;
  y: number;
}

export interface CollisionsRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CollisionsCircle {
  x: number;
  y: number;
  radius: number;
}

export interface CollisionsLine {
  p1: Point2d;
  p2: Point2d;
}

export type CollisionsShape = CollisionsLine | CollisionsCircle | CollisionsRectangle | CollisionsCircle;
