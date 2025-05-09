import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";

function getScrollTarget(inputElement: HTMLInputElement | HTMLSelectElement) {
  const fieldset = inputElement?.closest('fieldset');

  if (fieldset) {
    const legends = fieldset.getElementsByTagName('legend')

    if (legends.length) {
      var $candidateLegend = legends[0]

      // If the input type is radio or checkbox, always use the legend if there
      // is one.
      if (inputElement.type === 'checkbox' || inputElement.type === 'radio') {
        return $candidateLegend
      }

      // For other input types, only scroll to the fieldset’s legend (instead of
      // the label associated with the input) if the input would end up in the
      // top half of the screen.
      //
      // This should avoid situations where the input either ends up off the
      // screen, or obscured by a software keyboard.
      var legendTop = $candidateLegend.getBoundingClientRect().top
      var inputRect = inputElement.getBoundingClientRect()

      // If the browser doesn't support Element.getBoundingClientRect().height
      // or window.innerHeight (like IE8), bail and just link to the label.
      if (inputRect.height && window.innerHeight) {
        var inputBottom = inputRect.top + inputRect.height

        if (inputBottom - legendTop < window.innerHeight / 2) {
          return $candidateLegend
        }
      }
    }
  }
  return document.querySelector("label[for='" + inputElement.id + "']") ||
    inputElement.closest('label')
}

export function ErrorSummary({ errors, errorHeading }: Readonly<{ errorHeading: HeadingProps & Required<Pick<HeadingProps, 'id'>>; errors: { inputId: string; errorMessage: string; }[] }>) {
  return <nav aria-labelledby={errorHeading.id}>

    <div className="alert alert-error mt-0 mb-8" role="alert" data-module="error-summary">
      <Icon icon={'highlight-off'} isAlertIcon svgProps={{ "aria-label": 'Fejl' }}></Icon>
      <div className="alert-body">
        <Heading className="alert-heading" {...errorHeading}></Heading>
        <ul className="alert-text nobullet-list">
          {errors.map((error) => (
            <li>
              <a onClick={(ev) => {
                const inputElement = document.getElementById(error.inputId) as HTMLInputElement | null;
                if (!inputElement) {
                  return;
                }
                ev.preventDefault();
                const target = getScrollTarget(inputElement);
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                  });
                  inputElement.focus({ preventScroll: true })
                }

              }} className="function-link" href={`#${error.inputId}`}>{error.errorMessage}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  </nav>
}