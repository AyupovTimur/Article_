type Mode = Record<string, boolean | string>

export function classNames(cls: string, mode?: Mode, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}