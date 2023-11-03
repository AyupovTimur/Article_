import { lazy } from 'react'

export const NotFoundLazy = lazy(async () => await import('./NotFound'))