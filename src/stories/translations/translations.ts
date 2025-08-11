import type { TranslationMap } from "../../contexts/translation-context";

export const defaultTranslationMap: Partial<TranslationMap> = {
  accordion_close_all: undefined,
  accordion_open_all: undefined,
  alert_icon_aria_label_info: undefined,
  alert_icon_aria_label_success: undefined,
  alert_icon_aria_label_warning: undefined,
  alert_icon_aria_label_error: undefined,
  back_to_top_sr_label: undefined,
  back_to_top_label: undefined,
  card_navigation_external_icon_aria_label: undefined,
  form_element_error_message_prefix_sr_label: undefined,
  date_fields_day_label: undefined,
  date_fields_month_label: undefined,
  date_fields_year_label: undefined,
  error_summary_icon_aria_label: undefined,
  modal_close_button_label: undefined,
  input_field_character_limit_sr_label: undefined,
  input_field_characters_left: undefined,
  pagination_first_page_sr_label: undefined,
  pagination_page_selection_previous: undefined,
  pagination_current_page: undefined,
  pagination_ellipsis_sr_label: undefined,
  pagination_page_selection_next: undefined,
  pagination_page_selection_last_sr_label: undefined,
  select_all_rows_checkbox_sr_label: undefined,
  table_pagination_first_page_sr_label: undefined,
  table_pagination_page_selection_previous: undefined,
  table_pagination_current_page: undefined,
  table_pagination_ellipsis_sr_label: undefined,
  table_pagination_page_selection_next: undefined,
  table_pagination_page_selection_last_sr_label: undefined,
};

const STORAGE_KEY = "storybook-translations";

export function loadTranslations(): Partial<TranslationMap> {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultTranslationMap;

  try {
    const json = JSON.parse(raw);
    return {
      ...defaultTranslationMap,
      ...json,
    };
  } catch {
    return defaultTranslationMap;
  }
}

export function saveTranslations(overrides: Partial<TranslationMap>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
}

export function resetTranslations() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload(); // hot reload
}
