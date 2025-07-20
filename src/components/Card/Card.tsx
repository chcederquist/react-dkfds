import { ComponentProps, Fragment, ReactElement } from "react";
import { Heading, HeadingProps } from "../Shared/Heading";
import { mergeStrings } from "../../util/merge-classnames";
import { Link, LinkProps } from "../Link/Link";
import { Button } from "../Button/Button";
import { Icon } from "../Shared/Icon";

/**
 * Props for the `Card` component.
 *
 * @property image - Optional React element representing the card image. Should be of type `CardImageProps`.
 * @property children - Optional React element representing the card content. Should be of type `CardContentProps`.
 * @property navigationProps - Optional props for the anchor element used for navigation. Extends `ComponentProps<"a">` and includes an optional `isExternal` flag to indicate external links.
 */
export type CardProps = {
  image?: ReactElement<CardImageProps>;
  children?: ReactElement<CardContentProps>;
  navigationProps?: ComponentProps<"a"> & { isExternal?: boolean };
};

/**
 * Renders a card component that can optionally act as a navigational link.
 *
 * - If `navigationProps` is provided, the card is rendered as an anchor (`<a>`) element.
 *   - Displays an external link icon if `navigationProps.isExternal` is true.
 *   - Displays a forward arrow icon if `navigationProps.isExternal` is false.
 *   - Merges the "card" class with any additional classes from `navigationProps.className`.
 * - If `navigationProps` is not provided, the card is rendered as a `<section>` element.
 * https://designsystem.dk/komponenter/cards/
 *
 * @param image - Optional image or visual element to display at the top of the card.
 * @param children - Content to be displayed within the card.
 * @param navigationProps - Optional props for navigation, including link attributes and external indication.
 */
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
