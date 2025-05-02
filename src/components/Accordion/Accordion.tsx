import { ReactNode, useState } from "react";
import { HeadingLevel } from "../../types/headings";

// TODO: Icon name type, icon component
export type AccordionElementProps = {id: string | number; headerContent: {headingLevel: HeadingLevel; content: ReactNode; icon: {text: string; iconName: string }}; bodyContent: { content: ReactNode;}}

export function AccordionElement({bodyContent, headerContent, id}: AccordionElementProps) {
  const Heading = headerContent.headingLevel;
  const [isOpen, setIsOpen] = useState(false);
  return <>
    <Heading>
      <button onClick={() => setIsOpen(!isOpen)} className="accordion-button" aria-expanded={isOpen} aria-controls={id.toString()}>
        <span className="accordion-title">{headerContent.content}</span>
        {headerContent.icon && 
          <span className="accordion-icon">
            <span className="icon_text">{headerContent.icon.text}</span>
            <svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref={`#${headerContent.icon.iconName}`}></use></svg>
          </span>}
      </button>
    </Heading>
    <div id={id.toString()} aria-hidden={!isOpen} className="accordion-content">
      {bodyContent.content}
    </div>
  </>
}

export function Accordion({accordionElements}: Readonly<{accordionElements: Array<AccordionElementProps>;}>) {
  return (<>
  {/* TODO: Toggle all functionality */}
  <ul className="accordion">
    {accordionElements.map((element) => (
      <li key={element.id}>
        <AccordionElement {...element} />
      </li>
    ))}
</ul></>)
}