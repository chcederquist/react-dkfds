import { ComponentProps, ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";

/**
 * Props for the `CookieConsent` component.
 *
 * @property headingProps - Props to be passed to the heading element.
 * @property children - Content to be rendered inside the cookie consent component.
 * @property acceptButtonProps - Props for the accept button, rendered as an anchor element.
 * @property declineButtonProps - Props for the decline button, rendered as an anchor element.
 */
export type CookieConsentProps = {
  headingProps: HeadingProps;
  children: ReactNode;
  acceptButtonProps: ComponentProps<"a">;
  declineButtonProps: ComponentProps<"a">;
};

/**
 * Renders a cookie consent banner with customizable heading, message, and action buttons.
 * https://designsystem.dk/komponenter/cookiemeddelelse/
 *
 * @param headingProps - Props to be passed to the Heading component, including id and other attributes.
 * @param children - The message or content to display in the consent banner.
 * @param acceptButtonProps - Props for the accept button, such as event handlers and attributes.
 * @param declineButtonProps - Props for the decline button, such as event handlers and attributes.
 *
 * @remarks
 * - The component uses semantic HTML and ARIA attributes for accessibility.
 * - Action buttons are rendered as anchor elements with customizable props.
 *
 * @example
 * ```tsx
 * <CookieConsent
 *   headingProps={{ id: "custom-heading", children: "Cookies" }}
 *   acceptButtonProps={{ onClick: handleAccept, children: "Accept" }}
 *   declineButtonProps={{ onClick: handleDecline, children: "Decline" }}
 * >
 *   We use cookies to improve your experience.
 * </CookieConsent>
 * ```
 */
export function CookieConsent({
  headingProps,
  children,
  acceptButtonProps,
  declineButtonProps,
}: Readonly<CookieConsentProps>) {
  return (
    <div
      className="cookie-container"
      role="complementary"
      aria-labelledby={headingProps.id ?? "cookie-message-heading"}
      aria-describedby="cookie-message-text"
    >
      <div className="cookie-message">
        <div className="cookie-text">
          <Heading
            className="h3 mt-0 mb-3"
            id="cookie-message-heading"
            {...headingProps}
          ></Heading>
          <p className="mt-0" id="cookie-message-text">
            {children}
          </p>
        </div>
        <div className="cookie-actions">
          <ul className="inline-list">
            <li>
              <a className="button button-secondary" {...acceptButtonProps}></a>
            </li>
            <li>
              <a
                className="ml-md-4 button button-secondary"
                {...declineButtonProps}
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
