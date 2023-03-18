import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Layout, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { createRef } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';

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

  view.removeChildren();

  const v1 = createRef<Circle>();
  const v2 = createRef<Layout>();
  const v3 = createRef<Rect>();
  const v4 = createRef<Txt>();

  view.add(
    <>
      <Circle
        ref={v1}
        x={0}
        width={140}
        height={140}
        fill="#e13238" />
      <Layout ref={v2}>
        <Rect
          ref={v3}
          x={200}
          y={200}
          width={140}
          height={140}
          fill="#e13238" />
        <Txt
          ref={v4}
          x={400}
          y={400}
          fill="#e13238"
        >Hi</Txt>
      </Layout>
    </>,
  );

  yield* all(
    v1().scale.x(2, 1),
    // v2().scale.x(300, 1),
    v3().scale.x(3, 1),
    v4().scale.x(3, 1),
  );

});