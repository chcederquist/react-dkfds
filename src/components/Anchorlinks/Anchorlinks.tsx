import { ReactNode, useId } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";

/**
 * Props for the Anchorlinks component.
 *
 * @property {HeadingProps} [headingProps] - Optional props to customize the heading of the anchor links section.
 * @property {Array<{ id: string; content: ReactNode }>} anchorList - An array of anchor link objects, each containing a unique `id` and the `content` to display.
 */
export type AnchorlinksProps = {
  headingProps?: HeadingProps;
  anchorList: { id: string; content: ReactNode }[];
};

/**
 * Renders a navigational list of anchor links, typically used for in-page navigation.
 * https://designsystem.dk/komponenter/anchorlinks/
 * @param headingProps - Props for the heading element displayed above the anchor list.
 * @param anchorList - An array of anchor objects, each containing an `id` and `content` for the anchor link.
 *
 * @returns A navigation element containing a heading and a list of anchor links.
 *
 * @remarks
 * - The heading is rendered only if `headingProps` is provided.
 * - Each anchor in the list links to an element with the corresponding `id` on the page.
 * - The navigation element uses `aria-labelledby` for accessibility, referencing the heading's ID.
 */
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
