import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";
import { IconName } from "../../types/icon-names";

export type TagProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconName;
};

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
