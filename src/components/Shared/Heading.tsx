import { HeadingLevel } from "../../types/headings";

export type HeadingProps = {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
export function Heading({ level, ...props }: HeadingProps) {
  const HeadingTag = level;
  return <HeadingTag {...props} />;
}
