import { useState } from "react";
import { mergeClassnames } from "../../util/merge-classnames";

export function OverflowMenu({ id, menuItems, side, menuButtonLabel }: Readonly<{menuButtonLabel: string; id: string, menuItems: {id: string; label: string; url?:string; action?: React.MouseEventHandler<HTMLButtonElement>}[]; side: 'right' | 'left'}>) {
  const [expanded, setExpanded] = useState(false); // TODO: Close on click outside
  return (
    <div className={mergeClassnames("overflow-menu",`overflow-menu--open-${side}`)}>
    <button className="button-overflow-menu js-dropdown" data-js-target={id}
        aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>
        {menuButtonLabel}
        <svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref="#more-vert"></use></svg>
    </button>
    <div className="overflow-menu-inner" id={id} aria-hidden={!expanded}>
        <ul className='overflow-list'>
          {menuItems.map((item) => (<li key={item.id}>{item.action ? <button onClick={item.action}>{item.label}</button> : <a href={item.url}>{item.label}</a>}</li>))}
        </ul>
    </div>
</div>
  )
}