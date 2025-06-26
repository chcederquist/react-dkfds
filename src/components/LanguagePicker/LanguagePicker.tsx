import { ReactNode } from "react";
import { Icon } from "../Shared/Icon";

export type LanguagePickerProps = {
  selectLanguageAriaLabel?: string;
  languages: {
    isCurrentLanguage: boolean;
    languageSelectedLabel: string;
    languageCode: string;
    label: ReactNode;
  }[];
} & (
  | {
      queryParameterName: string;
      onLanguageSelected?: undefined;
    }
  | {
      queryParameterName?: undefined;
      onLanguageSelected: (languageCode: string) => void;
    }
);

export function LanguagePicker({
  selectLanguageAriaLabel,
  languages,
  queryParameterName,
  onLanguageSelected,
}: Readonly<LanguagePickerProps>) {
  return (
    <div className="language-switcher">
      <div className="container">
        <ul aria-label={selectLanguageAriaLabel}>
          {languages.map((language) => (
            <li key={language.languageCode}>
              {queryParameterName ? (
                <a
                  lang={language.languageCode}
                  aria-label={
                    language.isCurrentLanguage
                      ? language.languageSelectedLabel
                      : undefined
                  }
                  href={`?${queryParameterName}=${language.languageCode}`}
                >
                  {language.isCurrentLanguage && <Icon icon="check"></Icon>}
                  {language.label}
                </a>
              ) : (
                <button
                  lang={language.languageCode}
                  aria-label={
                    language.isCurrentLanguage
                      ? language.languageSelectedLabel
                      : undefined
                  }
                  onClick={() => onLanguageSelected?.(language.languageCode)}
                ></button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
