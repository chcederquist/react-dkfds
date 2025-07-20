import { ReactNode } from "react";
import { Icon } from "../Shared/Icon";

/**
 * Props for the LanguagePicker component.
 *
 * @property selectLanguageAriaLabel - Optional aria-label for the language selection element.
 * @property languages - Array of language objects to display in the picker.
 * @property languages[].isCurrentLanguage - Indicates if this language is currently selected.
 * @property languages[].languageSelectedLabel - Label shown when this language is selected.
 * @property languages[].languageCode - Language code (e.g., 'en', 'da').
 * @property languages[].label - Display label for the language (can be a ReactNode).
 *
 * The component supports two mutually exclusive modes:
 * - Query parameter mode: Provide `queryParameterName` to update the language via a query parameter.
 * - Callback mode: Provide `onLanguageSelected` to handle language selection via a callback.
 *
 * @property queryParameterName - Name of the query parameter to use for language selection (used in query parameter mode).
 * @property onLanguageSelected - Callback invoked when a language is selected (used in callback mode).
 */
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

/**
 * Renders a language picker component that allows users to select their preferred language.
 * Displays a list of available languages as either anchor links (when `queryParameterName` is provided)
 * or buttons (when `queryParameterName` is not provided). The currently selected language is indicated
 * with a check icon and an optional aria-label for accessibility.
 * https://designsystem.dk/komponenter/sprogvaelger/
 *
 * @param selectLanguageAriaLabel - The aria-label for the language selection list, used for accessibility.
 * @param languages - An array of language objects containing language code, label, and selection state.
 * @param queryParameterName - The query parameter name to use in the language selection links. If not provided, buttons are rendered instead.
 * @param onLanguageSelected - Callback function invoked when a language is selected via button.
 */
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
