import { routeRobot } from './example-robots';
import { VillageState } from './state';
import { runRobot } from './run-robot';

const state = VillageState.random(10);

runRobot(state, routeRobot, []);
