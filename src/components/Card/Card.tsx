import { ComponentProps, Fragment, ReactElement } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";
import { Link, LinkProps } from "../Link/Link";
import { Button } from "../Button/Button";
import { Icon } from "../Shared/Icon";

export type CardProps = {
  image?: ReactElement<CardImageProps>;
  children?: ReactElement<CardContentProps>;
  navigationProps?: ComponentProps<"a"> & { isExternal?: boolean };
};

export function Card({
  image,
  children,
  navigationProps,
}: Readonly<CardProps>) {
  if (navigationProps) {
    return (
      <a
        {...navigationProps}
        className={mergeStrings("card", navigationProps.className)}
      >
        {image}
        {children}
        {navigationProps.isExternal && (
          <Icon
            svgProps={{
              "aria-label": "(åbner i nyt vindue)",
              className: "card-icon",
            }}
            icon="open-in-new"
          ></Icon>
        )}
        {!navigationProps.isExternal && (
          <Icon svgProps={{ className: "card-icon" }} icon="arrow-forward" />
        )}
      </a>
    );
  }
  return (
    <section className="card">
      {image}
      {children}
    </section>
  );
}

export type CardImageProps = {
  image: ReactElement<HTMLImageElement>;
};

export function CardImage({ image }: Readonly<CardImageProps>) {
  return <div className="card-image">{image}</div>;
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
      className={mergeStrings("card-heading", props.className)}
    />
  );
}

export type CardSubHeadingProps = ComponentProps<"p">;
export function CardSubHeading({ ...props }: CardSubHeadingProps) {
  return <p className="card-subheading" {...props}></p>;
}

export type CardTextProps = ComponentProps<"p">;
export function CardText(props: CardTextProps) {
  return <p {...props} className="card-text"></p>;
}

export type CardContentProps = {
  contentProps?: Omit<ComponentProps<"div">, "children">;
  heading?: ReactElement<CardHeadingProps>;
  subHeading?: ReactElement<CardSubHeadingProps>;
  text?: ReactElement<CardTextProps>;
  cardActions?: ReactElement<CardActionLinks> | ReactElement<CardActionButtons>;
};
export function CardContent({
  contentProps,
  heading,
  cardActions,
  subHeading,
  text,
}: CardContentProps) {
  return (
    <div {...contentProps} className="card-content">
      {subHeading}
      {heading}
      {text}
      {cardActions}
    </div>
  );
}

export type CardActionButtons = {
  buttons: ReactElement<typeof Button>[];
} & ComponentProps<"div">;
export function CardActionButtons({ buttons, ...props }: CardActionButtons) {
  return (
    <div className="button-group card-actions" {...props}>
      {buttons.map((button) => (
        <Fragment key={button.key}>{button}</Fragment>
      ))}
    </div>
  );
}

export type CardActionLinks = {
  links: LinkProps[];
} & ComponentProps<"div">;
export function CardActionLinks({ links, ...props }: CardActionLinks) {
  return (
    <div className="action-links" {...props}>
      <ul className="nobullet-list card-actions">
        {links.map((link, index) => (
          <li key={link.href || index}>
            <Link {...link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
