import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Rect} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const myRect = createRef<Rect>();

  view.add(
    <Circle
      ref={myCircle}
      // try changing these properties:
      x={-300}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );

  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill('#e6a700', 1).to('#e13238', 1),
  );

  view.removeChildren();

  view.add(
    <Rect
      ref={myRect}
      // try changing these properties:
      x={-300}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );

  yield* all(
    myRect().position.x(300, 1).to(-300, 1),
    myRect().fill('#e6a700', 1).to('#e13238', 1),
  );

});