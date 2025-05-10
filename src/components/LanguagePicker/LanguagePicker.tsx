export type LanguagePickerProps = { selectLanguageAriaLabel?: string; languages: {isCurrentLanguage: boolean; languageSelectedLabel: string; languageCode: string; label: string}[] }

export function LanguagePicker({selectLanguageAriaLabel, languages}: Readonly<LanguagePickerProps>) {
  return (
    <div className="language-switcher">
      <div className="container">
        <ul aria-label={selectLanguageAriaLabel}>
          {languages.map((language) => (
            <li key={language.languageCode}>
              <a lang={language.languageCode} aria-label={language.isCurrentLanguage ? language.languageSelectedLabel : undefined} href={`?lang=${language.languageCode}`}>
                {language.label}
              </a>
            </li>))}
        </ul>
      </div>
    </div>
  )
}