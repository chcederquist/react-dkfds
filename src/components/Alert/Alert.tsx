import { mergeClassnames } from "../../util/merge-classnames";
import { Heading, HeadingProps } from "../Shared/Heading";

export type AlertProps = {type: 'info' | 'success' | 'warning' | 'error'; iconAriaLabel: string; alertContent: {headingProps: HeadingProps; bodyText: string}}

export function Alert({ type, iconAriaLabel, alertContent}: Readonly<AlertProps>) {
  const iconName = type === 'info' ? 'info' : type === 'success' ? 'check-circle' : type === 'warning' ? 'report-problem' : 'highlight-off';
  return (<div className={`alert alert-${type}`}>
    <svg className="icon-svg alert-icon" aria-label={iconAriaLabel} focusable="false"><use xlinkHref={`#${iconName}`}></use></svg>
    <div className="alert-body">
        <Heading {...alertContent.headingProps} className={mergeClassnames('alert-heading', alertContent.headingProps.className)} />
        <p className="alert-text">{alertContent.bodyText}</p>
    </div>
</div>)
}