import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";

/**
 * Props for the Tag component.
 *
 * @property children - The text content to display inside the tag.
 * @property onClick - Optional click event handler for the tag button.
 * @property icon - Optional icon to display alongside the tag content.
 */
export type TagProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconName;
};

/**
 * Renders a customizable tag component as a button.
 * https://designsystem.dk/komponenter/tags/
 *
 * @param children - The content to display inside the tag.
 * @param onClick - Optional click event handler for the tag button.
 * @param icon - Optional icon name to display alongside the tag content.
 *
 * @returns A button element styled as a tag, optionally with an icon.
 */
export function Tag({ children, onClick, icon }: Readonly<TagProps>) {
  return (
    <button
      onClick={onClick}
      className={mergeStrings("tag", icon && "tag-icon")}
    >
      {children}
      {icon && <Icon icon={icon}></Icon>}
    </button>
  );
}
