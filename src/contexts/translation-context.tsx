import { createContext, ReactNode } from "react";

export type TranslationConfig = {
  accordion_open_all: void;
  accordion_close_all: void;
  alert_icon_aria_label_info: void;
  alert_icon_aria_label_success: void;
  alert_icon_aria_label_warning: void;
  alert_icon_aria_label_error: void;
  back_to_top_sr_label: void;
  back_to_top_label: void;
  card_navigation_external_icon_aria_label: void;
  form_element_error_message_prefix_sr_label: {
    error: string;
    inputType: "checkbox" | "radio" | "date" | "text" | "select" | "textarea";
  };
  date_fields_day_label: void;
  date_fields_month_label: void;
  date_fields_year_label: void;
  error_summary_icon_aria_label: void;
  input_field_character_limit_sr_label: {
    characterLimit: number;
  };
  input_field_characters_left: {
    charactersLeft: number;
  };
  modal_close_button_label: void;
  pagination_first_page_sr_label: void;
  pagination_page_selection_previous: void;
  pagination_current_page: {
    currentPage: number;
    pageCount: number;
  };
  pagination_ellipsis_sr_label: void;
  pagination_page_selection_next: void;
  pagination_page_selection_last_sr_label: void;
  select_all_rows_checkbox_sr_label: void;
  table_pagination_first_page_sr_label: void;
  table_pagination_page_selection_previous: void;
  table_pagination_current_page: {
    currentPage: number;
    pageCount: number;
  };
  table_pagination_ellipsis_sr_label: void;
  table_pagination_page_selection_next: void;
  table_pagination_page_selection_last_sr_label: void;
  step_indicator_step_completed_sr_label: {
    stepNumber: number;
  };
  step_indicator_error_icon_sr_label: {
    stepNumber: number;
  };
  simple_step_indicator_current_step_sr_label: {
    stepNumber: number;
    totalSteps: number;
  };
  step_indicator_mobile_indicator_button: {
    stepNumber: number;
    totalSteps: number;
  };
  step_indicator_mobile_modal_heading: {
    stepNumber: number;
    totalSteps: number;
  };
  header_portal_info_mobile_screen_reader_label_user: void;
  header_solution_info_mobile_authority_screen_reader_label: void;
  header_mobile_drawer_menu_close_button_label: void;
  header_mobile_drawer_menu_close_button_aria_label: void;
  header_navigation_menu_nav_aria_label: void;
  header_overflow_menu_button_label: void;
  header_language_switcher_selected_language_heading: void;
};

export type TranslateFn = <K extends keyof TranslationConfig>(
  key: K,
  options: TranslationConfig[K] extends void ? undefined : TranslationConfig[K],
) => string | undefined;

export const DkfdsTranslationContext = createContext<TranslateFn | null>(null);

export type TranslationMap = {
  [K in keyof TranslationConfig]: TranslationConfig[K] extends void
    ? string
    : string | ((args: TranslationConfig[K]) => string);
};

type Props = {
  translations: Partial<TranslationMap>;
  children: ReactNode;
};

export function DkfdsTranslationProvider({ translations, children }: Props) {
  const t: TranslateFn = (key, options) => {
    const entry = translations[key];
    if (typeof entry === "function") {
      if (options === undefined) {
        throw new Error(`Missing options for translation key: ${key}`);
      }
      return entry(options);
    }
    return entry;
  };

  return (
    <DkfdsTranslationContext.Provider value={t}>
      {children}
    </DkfdsTranslationContext.Provider>
  );
}
