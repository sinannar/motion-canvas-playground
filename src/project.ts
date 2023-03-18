import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import second from './scenes/second?scene';

export default makeProject({
  scenes: [example, second],
});
