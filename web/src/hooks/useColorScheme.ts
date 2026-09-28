import { useTheme } from '../theme/ThemeContext'

export type ColorScheme = 'dark' | 'light'

/** Image scheme follows the active skin: Paper is light, the rest are dark. */
export function useColorScheme(): ColorScheme {
  const { theme } = useTheme()
  return theme === 'paper' ? 'light' : 'dark'
}
