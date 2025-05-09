import { ReactNode, useState } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon, IconName } from "../Shared/Icon";

// TODO: Icon name type, icon component
export type AccordionElementProps = { id: string | number; headerContent: { headingProps: HeadingProps; children: ReactNode; icon: { text: string; iconName: IconName } }; bodyContent: { children: ReactNode; } }

export function AccordionElement({ bodyContent, headerContent, id, isOpen, setIsOpen }: AccordionElementProps & { setIsOpen: (isOpen: boolean) => void; isOpen: boolean; }) {
  return <>
    <Heading {...headerContent.headingProps}>
      <button onClick={() => setIsOpen(!isOpen)} className="accordion-button" aria-expanded={isOpen} aria-controls={id.toString()}>
        <span className="accordion-title">{headerContent.children}</span>
        {headerContent.icon &&
          <span className="accordion-icon">
            <span className="icon_text">{headerContent.icon.text}</span>
            <Icon icon={headerContent.icon.iconName} ></Icon>
          </span>}
      </button>
    </Heading>
    <div id={id.toString()} aria-hidden={!isOpen} className="accordion-content">
      {bodyContent.children}
    </div>
  </>
}

export function Accordion({ accordionElements }: Readonly<{ accordionElements: Array<AccordionElementProps>; }>) {
  const [openElements, setOpenElements] = useState<Record<AccordionElementProps['id'], boolean>>({});
  const allOpen = accordionElements.every((element) => openElements[element.id]);
  return (<>
    <button className="accordion-bulk-button" data-accordion-bulk-expand={allOpen.toString()} onClick={() => setOpenElements(Object.fromEntries(accordionElements.map(el => [el.id, !allOpen])))}>{allOpen ? 'Luk alle' : 'Åbn alle'}</button>
    <ul className="accordion">
      {accordionElements.map((element) => (
        <li key={element.id}>
          <AccordionElement isOpen={!!openElements[element.id]} setIsOpen={(isOpen) => setOpenElements({ ...openElements, [element.id]: isOpen })} {...element} />
        </li>
      ))}
    </ul></>)
}