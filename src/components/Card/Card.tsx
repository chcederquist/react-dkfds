import { ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";

export function Card({headerProps, textProps}: Readonly<{headerProps: { headingProps: HeadingProps}, textProps: { content: ReactNode;}}>) {
  return (
  <div className="card">
    <div className="card-header">
        <Heading {...headerProps.headingProps} className={["header-title", ...headerProps.headingProps.className ?? []].join(' ')} />
    </div>

    <div className="card-text">
        {textProps.content}
    </div>

</div>)
}