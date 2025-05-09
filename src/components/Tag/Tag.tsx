import { mergeStrings } from "../../util/merge-classnames";
import { Icon, IconName } from "../Shared/Icon";

export function Tag({ children, onClick, icon }: Readonly<{ children: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, icon: IconName;}>) {
  return (
    <button onClick={onClick} className={mergeStrings('tag', icon && 'tag-icon')}>
      {children}
      <Icon icon={icon}></Icon>
    </button>
  );
  
}