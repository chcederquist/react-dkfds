import { ReactNode, useState } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";
import { mergeStrings } from "../../util/merge-classnames";

export type AccordionElementProps = {
  id: string | number;
  headerContent: {
    headingProps: Omit<HeadingProps, "children">;
    children: ReactNode;
    icon?: { text: string; iconName: IconName };
  };
  children: ReactNode;
  error?: boolean;
  errorMessageId?: string;
};

export function AccordionElement({
  children,
  headerContent,
  id,
  error,
  isOpen,
  errorMessageId,
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
          aria-describedby={errorMessageId}
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

export type AccordionProps = {
  accordionElements: Array<AccordionElementProps>;
};

export function Accordion({ accordionElements }: Readonly<AccordionProps>) {
  const [openElements, setOpenElements] = useState<
    Record<AccordionElementProps["id"], boolean>
  >({});
  const allOpen = accordionElements.every(
    (element) => openElements[element.id],
  );
  return (
    <>
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
        {allOpen ? "Luk alle" : "Åbn alle"}
      </button>
      <ul className="accordion">
        {accordionElements.map((element) => (
          <li key={element.id}>
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
