/** Palettes defined in src/styles/palettes.css, in picker order */
export const PALETTES = [
  { id: 'tyrrhenian', name: 'Tyrrhenian' },
  { id: 'graphite', name: 'Graphite' },
  { id: 'basalt', name: 'Basalt' },
  { id: 'phosphor', name: 'Phosphor' },
  { id: 'arcade', name: 'Arcade' },
  { id: 'myrtle', name: 'Myrtle' }
] as const

export type PaletteId = (typeof PALETTES)[number]['id']

export const DEFAULT_PALETTE: PaletteId = 'tyrrhenian'

/** localStorage key, also read by the anti-FOUC script in BaseLayout */
export const PALETTE_STORAGE_KEY = 'palette'
