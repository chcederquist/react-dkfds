import { ReactNode } from "react";
import { HeadingLevel } from "../../types/headings";

export function Card({headerProps, textProps}: Readonly<{headerProps: { headingLevel: HeadingLevel; content: ReactNode;}, textProps: { content: ReactNode;}}>) {
  const Heading = headerProps.headingLevel;
  return (
  <div className="card">
    <div className="card-header">
        <Heading className="header-title">{headerProps.content}</Heading>
    </div>

    <div className="card-text">
        {textProps.content}
    </div>

</div>)
}