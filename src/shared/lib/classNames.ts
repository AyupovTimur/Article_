type Mode = Record<string, boolean | string>

export function classNames(cls: string, mode: Mode = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key)
  ].join(' ')
}
