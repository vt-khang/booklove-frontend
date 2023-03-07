export const initialArray = (min: number, max: number) => {
  return Array(max - min + 1).fill(0).map((value, index) => min + index);
}