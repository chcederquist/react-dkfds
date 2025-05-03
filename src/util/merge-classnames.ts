export function mergeClassnames(...classNames: (string | string[] | undefined | false)[]): string {
  return classNames.flat().filter(Boolean).join(' ');
}