import { ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";

export type CardProps = {headerProps: { headingProps: HeadingProps}, textProps: { content: ReactNode;}};

export function Card({headerProps, textProps}: Readonly<CardProps>) {
  return (
  <div className="card">
    <div className="card-header">
        <Heading {...headerProps.headingProps} className={mergeStrings("header-title", headerProps.headingProps.className)} />
    </div>
    <div className="card-text">
        {textProps.content}
    </div>

</div>)
}