export function randomPick<T>(array: T[]): T {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
