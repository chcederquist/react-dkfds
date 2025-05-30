import { ComponentProps, ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";

export function CookieConsent({
  headingProps,
  body,
  acceptButtonProps,
  declineButtonProps,
}: Readonly<{
  headingProps: HeadingProps;
  body: ReactNode;
  acceptButtonProps: ComponentProps<"a">;
  declineButtonProps: ComponentProps<"a">;
}>) {
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
            {body}
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
