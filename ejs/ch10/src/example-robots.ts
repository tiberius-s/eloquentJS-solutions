import { findRoute } from './find-route';
import { randomPick } from './random-pick';
import { Action, VillageState } from './state';

export function randomRobot(state: VillageState): Action {
  return { direction: randomPick(state.graph[state.place]) };
}

const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office',
];

export function routeRobot(_state: VillageState, memory?: string[]): Action {
  if (memory?.length === 0) {
    memory = mailRoute;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { direction: memory![0], memory: memory!.slice(1) };
}

export function goalOrientedRobot(state: VillageState, route?: string[]): Action {
  if (route?.length === 0) {
    const parcel = state.parcels[0];
    if (parcel.place !== state.place) {
      route = findRoute(state.graph, state.place, parcel.place) as string[];
    } else {
      route = findRoute(state.graph, state.place, parcel.address) as string[];
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { direction: route![0], memory: route!.slice(1) };
}
