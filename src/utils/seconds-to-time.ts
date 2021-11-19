import { zeroLeft } from "./zero-left";

export function secondsToTime(seconds: number): string {
  const hora = zeroLeft(seconds / 3600);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${hora}h ${min}m ${sec}s`;
}
