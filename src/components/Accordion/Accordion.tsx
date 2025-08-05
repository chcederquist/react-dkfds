import { ReactNode, useState } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { mergeStrings } from "../../util/merge-classnames";
import { useT } from "../../hooks/useT";

/**
 * Props for an individual element within the Accordion component.
 *
 * @property id - Unique identifier for the accordion element.
 * @property headerContent - Content and configuration for the accordion header.
 * @property headerContent.headingProps - Props for the heading element.
 * @property headerContent.children - Content to be displayed inside the header.
 * @property headerContent.icon - Optional icon configuration for the header.
 * @property headerContent.icon.text - Text to display alongside the icon.
 * @property headerContent.icon.iconName - Name of the icon to display.
 * @property children - Content to be rendered inside the accordion panel.
 * @property error - Optional flag indicating if the element is in an error state.
 * @property alertId - Optional ID for associating an alert with the accordion element.
 */
export type AccordionElementProps = {
  id: string | number;
  headerContent: {
    headingProps: Omit<HeadingProps, "children">;
    children: ReactNode;
    icon?: { text: string; iconName: IconName };
  };
  children: ReactNode;
  error?: boolean;
  alertId?: string;
};

/**
 * Renders a single element within an accordion, including its header and collapsible content panel.
 *
 * The header is rendered as a button inside a Heading component, allowing users to toggle the visibility
 * of the associated content panel. The header can optionally display an icon and text. The component
 * supports error styling and accessibility attributes such as `aria-expanded`, `aria-controls`, and `aria-describedby`.

 * @returns A React fragment containing the header and collapsible content panel for the accordion element.
 */
export function AccordionElement({
  children,
  headerContent,
  id,
  error,
  isOpen,
  alertId,
  setIsOpen,
}: AccordionElementProps & {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  return (
    <>
      <Heading {...headerContent.headingProps}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={mergeStrings(
            "accordion-button",
            error && "accordion-error",
          )}
          aria-describedby={alertId}
          aria-expanded={isOpen}
          aria-controls={id.toString()}
        >
          <span className="accordion-title">{headerContent.children}</span>
          {headerContent.icon && (
            <span className="accordion-icon">
              <span className="icon_text">{headerContent.icon.text}</span>
              <Icon icon={headerContent.icon.iconName}></Icon>
            </span>
          )}
        </button>
      </Heading>
      <div
        id={id.toString()}
        aria-hidden={!isOpen}
        className="accordion-content"
      >
        {children}
      </div>
    </>
  );
}

/**
 * Props for the Accordion component.
 *
 * @property accordionElements - An array of elements to be rendered inside the accordion.
 * @property hasOpenCloseAllButton - Optional flag to display a button for opening or closing all accordion items.
 * @property closeAllButtonLabel - Optional label for the close all button.
 * @property openAllButtonLabel - Optional label for the open all button.
 */
export type AccordionProps = {
  accordionElements: Array<AccordionElementProps>;
  hasOpenCloseAllButton?: boolean;
  closeAllButtonLabel?: string;
  openAllButtonLabel?: string;
};

/**
 * Renders an accordion component with expandable/collapsible elements.
 *
 * @param accordionElements - An array of elements to display in the accordion. Each element should have a unique `id` and may include an `error` property.
 * @param hasOpenCloseAllButton - If true, displays a button to open or close all accordion elements at once.
 *
 * The component manages the open/closed state of each element internally.
 * When the bulk open/close button is clicked, all elements are toggled to the same state.
 * Each element is rendered using the `AccordionElement` component.
 * https://designsystem.dk/komponenter/accordions/
 */
export function Accordion({
  accordionElements,
  hasOpenCloseAllButton,
  closeAllButtonLabel,
  openAllButtonLabel,
}: Readonly<AccordionProps>) {
  const [openElements, setOpenElements] = useState<
    Record<AccordionElementProps["id"], boolean>
  >({});
  const t = useT();
  const allOpen = accordionElements.every(
    (element) => openElements[element.id],
  );
  return (
    <>
      {hasOpenCloseAllButton && (
        <button
          className="accordion-bulk-button"
          data-accordion-bulk-expand={(!allOpen).toString()}
          onClick={() =>
            setOpenElements(
              Object.fromEntries(
                accordionElements.map((el) => [el.id, !allOpen]),
              ),
            )
          }
        >
          {allOpen
            ? (closeAllButtonLabel ??
              t("accordion_close_all", undefined) ??
              "Luk alle")
            : (openAllButtonLabel ??
              t("accordion_open_all", undefined) ??
              "Åbn alle")}
        </button>
      )}
      <ul className="accordion">
        {accordionElements.map((element) => (
          <li
            key={element.id}
            className={element.error ? "accordion-error" : ""}
          >
            <AccordionElement
              isOpen={!!openElements[element.id]}
              setIsOpen={(isOpen) =>
                setOpenElements({ ...openElements, [element.id]: isOpen })
              }
              {...element}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
