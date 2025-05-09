import { mergeStrings } from "../../util/merge-classnames";
import { Heading, HeadingProps } from "../Shared/Heading";
import { Icon, IconName } from "../Shared/Icon";

export type AlertProps = {type: 'info' | 'success' | 'warning' | 'error'; iconAriaLabel: string; alertContent: {headingProps: HeadingProps; bodyText: string}}

export function Alert({ type, iconAriaLabel, alertContent}: Readonly<AlertProps>) {
  const iconName: IconName = type === 'info' ? 'info' : type === 'success' ? 'check-circle' : type === 'warning' ? 'report-problem' : 'highlight-off';
  return (<div className={`alert alert-${type}`}>
    <Icon icon={iconName} isAlertIcon svgProps={{"aria-label": iconAriaLabel}}></Icon>
    <div className="alert-body">
        <Heading {...alertContent.headingProps} className={mergeStrings('alert-heading', alertContent.headingProps.className)} />
        <p className="alert-text">{alertContent.bodyText}</p>
    </div>
</div>)
}