import { randomPick } from './random-pick';
import { roadGraph } from './roads';

export type Parcel = {
  place: string;
  address: string;
};

export type Action = {
  direction: string;
  memory?: string[];
};

type Robot = (state: VillageState, memory?: string[]) => Action;

export class VillageState {
  graph: Record<string, string[]>;
  place: string;
  parcels: Parcel[];
  constructor(place: string, parcels: Parcel[]) {
    this.place = place;
    this.parcels = parcels;
    this.graph = roadGraph;
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
