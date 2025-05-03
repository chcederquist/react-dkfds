import { Heading, HeadingProps } from "../Shared/Heading";

export function Alert({ type, iconAriaLabel, alertContent}: Readonly<{type: 'info' | 'success' | 'warning' | 'error'; iconAriaLabel: string; alertContent: {headingProps: HeadingProps; bodyText: string}}>) {
  const iconName = type === 'info' ? 'info' : type === 'success' ? 'check-circle' : type === 'warning' ? 'report-problem' : 'highlight-off';
  return (<div className={`alert alert-${type}`}>
    <svg className="icon-svg alert-icon" aria-label={iconAriaLabel} focusable="false"><use xlinkHref={`#${iconName}`}></use></svg>
    <div className="alert-body">
        <Heading {...alertContent.headingProps} className={['alert-heading', ...alertContent.headingProps.className ?? []].join(' ')} />
        <p className="alert-text">{alertContent.bodyText}</p>
    </div>
</div>)
}