import { mergeStrings } from "../../util/merge-classnames";
import { Icon, IconName } from "../Shared/Icon";

export type TagProps = { children: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, icon: IconName;}

export function Tag({ children, onClick, icon }: Readonly<TagProps>) {
  return (
    <button onClick={onClick} className={mergeStrings('tag', icon && 'tag-icon')}>
      {children}
      <Icon icon={icon}></Icon>
    </button>
  );
  
}