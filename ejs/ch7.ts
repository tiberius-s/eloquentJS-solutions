const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

type Parcel = {
  place: string;
  address: string;
};

type Action = {
  direction: string;
  memory?: string[];
};

type Robot = (state: VillageState, memory?: string[]) => Action;

function buildGraph(edges: string[]) {
  const graph: Record<string, string[]> = Object.create(null);

  function addEdge(from: string, to: string) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (const [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  place: string;
  parcels: Parcel[];
  constructor(place: string, parcels: Parcel[]) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination: string) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      const parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    const parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      const address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
  }
}

function runRobot(state: VillageState, robot: Robot, memory?: string[]) {
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

function randomPick<T>(array: T[]): T {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state: VillageState): Action {
  return { direction: randomPick(roadGraph[state.place]) };
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

function routeRobot(_state: VillageState, memory?: string[]): Action {
  if (memory?.length === 0) {
    memory = mailRoute;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { direction: memory![0], memory: memory!.slice(1) };
}

export type Work = {
  at: string;
  route: string[];
};

function findRoute(graph: Record<string, string[]>, from: string, to: string) {
  const work: Work[] = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    const { at, route } = work[i];
    for (const place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }: VillageState, route?: string[]): Action {
  if (route?.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place) as string[];
    } else {
      route = findRoute(roadGraph, place, parcel.address) as string[];
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { direction: route![0], memory: route!.slice(1) };
}

runRobot(VillageState.random(), goalOrientedRobot, []);
