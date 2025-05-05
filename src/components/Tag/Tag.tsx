import { mergeClassnames } from "../../util/merge-classnames";

export function Tag({ children, onClick, icon }: Readonly<{ children: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, icon: string;}>) {
  return (
    <button onClick={onClick} className={mergeClassnames('tag', icon && 'tag-icon')}>
      {children}
      <svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref={`#${icon}`}></use></svg>
    </button>
  );
  
}