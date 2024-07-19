export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}