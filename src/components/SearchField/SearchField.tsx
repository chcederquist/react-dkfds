import { ComponentProps } from "react";
import { HTMLInputPropsWithRequiredFields } from "../../types/html-props";
import { InputSize } from "../../types/input-widths";
import { mergeStrings } from "../../util/merge-classnames";
import { Icon } from "../Shared/Icon";

export type SearchFieldProps = {
  srLabel: string;
  iconButton?: boolean;
  inputProps: HTMLInputPropsWithRequiredFields<"id" | "name">;
  searchButtonProps?: ComponentProps<"button">;
  searchButtonLabel?: string;
} & Partial<InputSize>;

export function SearchField({
  srLabel,
  inputProps,
  iconButton,
  searchButtonProps,
  searchButtonLabel,
  ...props
}: Readonly<SearchFieldProps>) {
  return (
    <div className="form-group search">
      <label htmlFor={inputProps.id} className="sr-only">
        {srLabel}
      </label>
      <input
        className={mergeStrings(
          "form-input",
          "inputCharWidth" in props && `input-char-${props.inputCharWidth}`,
          "inputWidth" in props && `input-width-${props.inputWidth}`,
        )}
        type="search"
        {...inputProps}
      />
      <button className="button button-search" {...searchButtonProps}>
        {iconButton && (
          <Icon icon="search" svgProps={{ className: "icon-svg m-0" }}></Icon>
        )}
        <span className={iconButton ? "sr-only" : undefined}>
          {searchButtonLabel}
        </span>
      </button>
    </div>
  );
}
