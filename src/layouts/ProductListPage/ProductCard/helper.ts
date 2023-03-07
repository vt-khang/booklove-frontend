export const truncateLongString = (source: string, size: number) => {
  return source.length > size ? source.slice(0, size - 1) + '...' : source;
}

export const numberWithCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}