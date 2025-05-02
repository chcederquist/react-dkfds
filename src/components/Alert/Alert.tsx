import { HeadingLevel } from "../../types/headings";

// TODO: Should iconAriaLabel have a default value?
export function Alert({ type, iconAriaLabel, alertContent}: Readonly<{type: 'info' | 'success' | 'warning' | 'error'; iconAriaLabel: string; alertContent: {headingLevel: HeadingLevel; headingContent: string; content: string}}>) {
  const iconName = type === 'info' ? 'info' : type === 'success' ? 'check-circle' : type === 'warning' ? 'report-problem' : 'highlight-off';
  const Heading = alertContent.headingLevel;
  return (<div className={`alert alert-${type}`}>
    <svg className="icon-svg alert-icon" aria-label={iconAriaLabel} focusable="false"><use xlinkHref={`#${iconName}`}></use></svg>
    <div className="alert-body">
        <Heading className="alert-heading">{alertContent.headingContent}</Heading>
        <p className="alert-text">{alertContent.content}</p>
    </div>
</div>)
}