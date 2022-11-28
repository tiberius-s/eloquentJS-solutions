import { Action, VillageState } from './state';

export type Robot = (state: VillageState, memory?: string[]) => Action;

export function runRobot(state: VillageState, robot: Robot, memory?: string[]) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    console.log(state);
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
