import { useT } from "../../hooks/useT";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";

function getScrollTarget(inputElement: HTMLInputElement | HTMLSelectElement) {
  const fieldset = inputElement?.closest("fieldset");

  if (fieldset) {
    const legends = fieldset.getElementsByTagName("legend");

    if (legends.length) {
      const $candidateLegend = legends[0];

      // If the input type is radio or checkbox, always use the legend if there
      // is one.
      if (inputElement.type === "checkbox" || inputElement.type === "radio") {
        return $candidateLegend;
      }

      // For other input types, only scroll to the fieldset’s legend (instead of
      // the label associated with the input) if the input would end up in the
      // top half of the screen.
      //
      // This should avoid situations where the input either ends up off the
      // screen, or obscured by a software keyboard.
      const legendTop = $candidateLegend.getBoundingClientRect().top;
      const inputRect = inputElement.getBoundingClientRect();

      // If the browser doesn't support Element.getBoundingClientRect().height
      // or window.innerHeight (like IE8), bail and just link to the label.
      if (inputRect.height && window.innerHeight) {
        const inputBottom = inputRect.top + inputRect.height;

        if (inputBottom - legendTop < window.innerHeight / 2) {
          return $candidateLegend;
        }
      }
    }
  }
  return (
    document.querySelector("label[for='" + inputElement.id + "']") ||
    inputElement.closest("label")
  );
}

/**
 * Props for the ErrorSummary component.
 *
 * @property errorHeading - Heading properties for the error summary, including a required `id`.
 * @property errors - An array of error objects, each containing an `inputId` referencing the input with an error, and an `errorMessage` describing the error.
 */
export type ErrorSummaryProps = {
  errorHeading: HeadingProps & Required<Pick<HeadingProps, "id">>;
  errors: { inputId: string; errorMessage: string }[];
};

/**
 * Displays a summary of form validation errors in an accessible alert box.
 * Each error is listed with a link that scrolls to and focuses the corresponding input field.
 * https://designsystem.dk/komponenter/fejlopsummering/
 *
 * @param errors - An array of error objects, each containing an `inputId` and `errorMessage`.
 * @param errorHeading - Props for the heading element, including an `id` used for accessibility.
 *
 * @returns A navigation element containing an error alert with a summary of errors.
 */
export function ErrorSummary({
  errors,
  errorHeading,
}: Readonly<ErrorSummaryProps>) {
  const t = useT();
  return (
    <nav aria-labelledby={errorHeading.id}>
      <div
        className="alert alert-error mt-0 mb-8"
        role="alert"
        data-module="error-summary"
      >
        <Icon
          icon={"error"}
          isAlertIcon
          svgProps={{
            "aria-label":
              t("error_summary_icon_aria_label", undefined) ?? "Fejl",
          }}
        ></Icon>
        <div className="alert-body">
          <Heading className="alert-heading" {...errorHeading}></Heading>
          <ul className="alert-text nobullet-list">
            {errors.map((error) => (
              <li key={error.inputId + error.errorMessage}>
                <a
                  onClick={(ev) => {
                    const inputElement = document.getElementById(
                      error.inputId,
                    ) as HTMLInputElement | null;
                    if (!inputElement) {
                      return;
                    }
                    ev.preventDefault();
                    const target = getScrollTarget(inputElement);
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                      inputElement.focus({ preventScroll: true });
                    }
                  }}
                  className="function-link"
                  href={`#${error.inputId}`}
                >
                  {error.errorMessage}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
