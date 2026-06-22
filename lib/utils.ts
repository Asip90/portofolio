/**
 * Joins class names, dropping falsy values. Lightweight, dependency-free.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
