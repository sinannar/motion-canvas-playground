import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Layout, Rect, Txt } from '@motion-canvas/2d/lib/components';
import { createRef } from '@motion-canvas/core/lib/utils';
import { all, waitFor } from '@motion-canvas/core/lib/flow';
import { CodeBlock } from '@motion-canvas/2d/lib/components/CodeBlock';
import { Latex } from '@motion-canvas/2d/lib/components';
import {slideTransition} from "@motion-canvas/core/lib/transitions";
import { Direction } from '@motion-canvas/core/lib/types';


export default makeScene2D(function* (view) {
  
    const myCircle = createRef<Circle>();

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

    
    // perform a slide transition to the left:
    yield* slideTransition(Direction.Left, 3);
  
    // proceed with the animation
  });