import { useState } from "react";
import { mergeStrings } from "../../util/merge-classnames";

export type StepIndicatorMenuProps = {
  currentStep: number;
  totalSteps: number;
  id: string;
  side: 'right' | 'left';
  stepItems: StepIndicatorListProps['stepItems']
}

export type StepIndicatorListProps = {
  stepItems: {done?: boolean; id: string; hasError?: boolean; title: string; informationalText?: string; url?:string; action?: React.MouseEventHandler<HTMLButtonElement>}[]
  currentStep: number;
}
export function StepIndicatorMenu({ id, stepItems, side, currentStep, totalSteps }: Readonly<StepIndicatorMenuProps>) {
  const [expanded, setExpanded] = useState(false); // TODO: Close on click outside
  return (
    <div className={mergeStrings("overflow-menu",`overflow-menu--open-${side}`)}>
    <button className="button-overflow-menu js-dropdown" data-js-target={id}
        aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>
        Trin {currentStep} af {totalSteps}
        <svg className="icon-svg" focusable="false" aria-hidden="true"><use xlinkHref="#arrow-drop-down"></use></svg>
    </button>
    <div className="overflow-menu-inner" id={id} aria-hidden={!expanded}>
      <StepIndicatorList currentStep={currentStep} stepItems={stepItems}></StepIndicatorList>
    </div>
</div>
  )
}

export function StepIndicatorList({ stepItems, currentStep }: Readonly<StepIndicatorListProps>) {
  return (
    <nav aria-label="Trinindikator med synlige trin">
    <ol className='sidemenu'>
        {stepItems.map((item, index) => {
          const children = <div>
            <span className="sidenav-number">{index + 1}.</span>
            <div>
              <span className="sidenav-maininfo">
                <span className="sidenav-title">{item.title}</span>
                {item.informationalText && <span className="sidenav-information">{item.informationalText}</span>}
                {item.done && <span className="sidenav-icon"><svg className="icon-svg" aria-label="Gennemført" focusable="false"><use xlinkHref="#done"></use></svg></span>}
                {!item.done && item.hasError && <span className="sidenav-icon"><svg className="icon-svg" aria-label="Fejl" focusable="false"><use xlinkHref="#highlight-off"></use></svg></span>}
              </span>
            </div>
          </div>
          return (<li key={item.id} className={mergeStrings(index + 1 === currentStep ? 'active current' : undefined, item.hasError && 'sidenav-error')}>{item.action ? 
          <button className="unstyled nav-step" onClick={item.action}>{children}</button> : 
          <a className="nav-step" href={item.url}>{children}</a>}</li>)})}
    </ol>
  </nav>
  )
}