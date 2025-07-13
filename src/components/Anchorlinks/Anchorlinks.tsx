import { ReactNode, useId } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";

export type AnchorlinksProps = {
  headingProps?: HeadingProps;
  anchorList: { id: string; content: ReactNode }[];
};
export function Anchorlinks({
  headingProps,
  anchorList,
}: Readonly<AnchorlinksProps>) {
  const id = useId();
  return (
    <nav className="anchorbox" aria-labelledby={id}>
      {headingProps && (
        <Heading
          {...headingProps}
          id={id}
          className={mergeStrings("anchortitle", headingProps.className)}
        ></Heading>
      )}
      <ul className="anchorlist">
        {anchorList.map((anchor) => (
          <li key={anchor.id} className="anchorlistitem">
            <a href={`#${anchor.id}`}>{anchor.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
