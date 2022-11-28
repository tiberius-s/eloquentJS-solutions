export type Work = {
  at: string;
  route: string[];
};

export function findRoute(graph: Record<string, string[]>, from: string, to: string) {
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
