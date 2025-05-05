export function mergeClassnames(...classNames: (string | string[] | undefined | null | false)[]): string {
  return classNames.flat().filter(Boolean).join(' ');
}