declare module "dkfds" {
  export function init(options: { scope: HTMLElement }): void;

  export interface Accordion {
    /**
     * Adds click functionality to accordion list
     * @param $accordion The accordion <ul> element
     * @param strings Translated labels: {"open_all": "Åbn alle", "close_all": "Luk alle"}
     */
    (
      $accordion: HTMLElement,
      strings: { open_all: string; close_all: string },
    ): Accordion;

    /**
     * Adds click functionality to accordion list
     * @param $accordion The accordion <ul> element
     * @param strings Translated labels: {"open_all": "Åbn alle", "close_all": "Luk alle"}
     */
    new (
      $accordion: HTMLElement,
      strings: { open_all: string; close_all: string },
    ): Accordion;
    init(): void;
    bulkEvent(): void;
    eventOnClick($button: HTMLButtonElement, e: PointerEvent): void;
    toggleButton(
      button: HTMLButtonElement,
      expanded?: boolean,
      bulk?: boolean,
    ): void;
  }

  /**
   * The properties and elements within the date picker.
   * @typedef {Object} DatePickerContext
   * @property {HTMLDivElement} calendarEl
   * @property {HTMLElement} datePickerEl
   * @property {HTMLDivElement} dialogEl
   * @property {HTMLInputElement} internalInputEl
   * @property {HTMLInputElement} externalInputEl
   * @property {HTMLDivElement} statusEl
   * @property {HTMLDivElement} guideEl
   * @property {HTMLDivElement} firstYearChunkEl
   * @property {Date} calendarDate
   * @property {Date} minDate
   * @property {Date} maxDate
   * @property {Date} selectedDate
   * @property {Date} rangeDate
   * @property {Date} defaultDate
   */
  export type DatePickerContext = {
    calendarEl: HTMLDivElement;
    datePickerEl: HTMLElement;
    dialogEl: HTMLDivElement;
    internalInputEl: HTMLInputElement;
    externalInputEl: HTMLInputElement;
    statusEl: HTMLDivElement;
    guideEl: HTMLDivElement;
    firstYearChunkEl: HTMLDivElement;
    calendarDate: Date;
    minDate: Date;
    maxDate: Date;
    selectedDate: Date;
    rangeDate: Date;
    defaultDate: Date;
  };

  export interface DatePicker {
    init: (root: HTMLElement) => void;
    add: (typeof DatePicker)["init"];
    on: (typeof DatePicker)["init"];
    off: (root: HTMLElement) => void;
    setLanguage(language: {
      open_calendar: string;
      choose_a_date: string;
      choose_a_date_between: string;
      choose_a_date_before: string;
      choose_a_date_after: string;
      aria_label_date: string;
      current_month_displayed: string;
      first_possible_date: string;
      last_possible_date: string;
      previous_year: string;
      previous_month: string;
      next_month: string;
      next_year: string;
      select_month: string;
      select_year: string;
      previous_years: string;
      next_years: string;
      guide: string;
      months_displayed: string;
      years_displayed: string;
      january: string;
      february: string;
      march: string;
      april: string;
      may: string;
      june: string;
      july: string;
      august: string;
      september: string;
      october: string;
      november: string;
      december: string;
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    });
    disable: (element: HTMLElement) => void;
    enable: (element: HTMLElement) => void;
    isDateInputInvalid: (element: HTMLElement) => boolean;
    /**
     * Select the value of the date picker inputs.
     *
     * @param {HTMLButtonElement} el An element within the date picker component
     * @param {string} dateString The date string to update in YYYY-MM-DD format
     */
    setCalendarValue: (el: HTMLElement, dateString: string) => void;
    validateDateInput: (el: HTMLElement) => void;
    /**
     * render the calendar.
     *
     * @param {HTMLElement} el An element within the date picker component
     * @param {Date} _dateToDisplay a date to render on the calendar
     * @returns {HTMLElement} a reference to the new calendar element
     */
    renderCalendar: (el: HTMLElement, _dateToDisplay?: Date) => HTMLElement;
    updateCalendarIfVisible: (el: HTMLElement) => void;
    getDatePickerContext(element: HTMLElement): DatePickerContext | undefined;
  }

  export const DatePicker: DatePicker;

  export interface Tooltip {
    (wrapper: HTMLElement): Tooltip;
    new (wrapper: HTMLElement): Tooltip;
    init(): void;
    hideTooltip(): void;
    showTooltip(): void;
    isShowing(): boolean;
    updateTooltipPosition(): void;
  }

  export const Tooltip: Tooltip;
}
