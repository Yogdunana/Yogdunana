import { useTheme } from '../theme/ThemeContext'

/** Fixed decorative layers driven purely by [data-theme] CSS. */
export function Decor() {
  const { theme } = useTheme()

  return (
    <>
      <div className="decor-watermark" aria-hidden="true">
        YOGDUNANA
      </div>
      <div className="decor-grain" aria-hidden="true" />
      {theme === 'editorial' && (
        <div className="decor-ticker" aria-hidden="true">
          <div className="decor-ticker-track">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>
                DESIGN <i>/</i> DEVELOP <i>/</i> CREATE <i>/</i> BUILD <i>/</i>{' '}
                SHIP <i>/</i> MODEL <i>/</i> DEPLOY <i>/</i>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
