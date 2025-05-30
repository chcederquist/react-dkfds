import { ComponentProps, ReactNode } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";
import { Button, ButtonProps } from "../Button/Button";

export type CardProps = {
  children: ReactNode;
};

export function Card({ children }: Readonly<CardProps>) {
  return <div className="card">{children}</div>;
}

export type CardHeaderProps = ComponentProps<"div">;

export function CardHeader(props: CardHeaderProps) {
  return <div {...props} className="card-header"></div>;
}

export type CardHeadingProps = HeadingProps;
export function CardHeading(props: CardHeadingProps) {
  return (
    <Heading
      {...props}
      className={mergeStrings("header-title", props.className)}
    />
  );
}

export type CardSubHeadingProps = ComponentProps<"p">;
export function CardSubHeading({ ...props }: CardSubHeadingProps) {
  return <p className="card-subheading" {...props}></p>;
}

export type CardTextProps = ComponentProps<"div">;
export function CardText(props: CardTextProps) {
  return <div {...props} className="card-text"></div>;
}

export type CardContentProps = ComponentProps<"div">;
export function CardContent(props: CardContentProps) {
  return <div {...props} className="card-content"></div>;
}

export type CardFooterProps = ComponentProps<"div">;
export function CardFooter(props: CardFooterProps) {
  return <div {...props} className="card-footer card-action"></div>;
}

export type CardActionButtons = {
  buttons: ButtonProps[];
} & ComponentProps<"div">;
export function CardActionButtons({ buttons, ...props }: CardActionButtons) {
  return (
    <div className="action-buttons" {...props}>
      {buttons.map((button, index) => (
        <Button key={index} {...button}></Button>
      ))}
    </div>
  );
}

export type CardActionLinks = {
  links: ComponentProps<"a">[];
} & ComponentProps<"div">;
export function CardActionLinks({ links, ...props }: CardActionLinks) {
  return (
    <div className="action-links" {...props}>
      <ul className="nobullet-list"></ul>
      {links.map((link, index) => (
        <li key={link.href || index}>
          <a {...link}></a>
        </li>
      ))}
    </div>
  );
}
