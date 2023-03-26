export function limitter(string, limit = 150) {
  if (string.length <= limit) return string;
  return string.slice(0, limit) + "...";
}
