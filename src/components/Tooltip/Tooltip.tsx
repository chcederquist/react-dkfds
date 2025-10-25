import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "../..";
import { mergeStrings } from "../../util/merge-classnames";
import { IconName } from "../../types/icon-names";
import type { TooltipInstance } from "dkfds";
import { Tooltip as DkfdsTooltip } from "dkfds";

export type TooltipRef = {
  hideTooltip: () => void;
  showTooltip: () => void;
  isShowing: () => boolean;
  updateTooltipPosition: () => void;
};

export type TooltipProps = {
  tooltip?: string;
  inText?: boolean;
  inline?: boolean;
  tooltipIsLabel?: boolean;
  icon?: IconName;
  position: "above" | "below";
  trigger: "click" | "hover";
  forceVisible?: boolean;
  noMargin?: boolean;
  children?: React.ReactNode;
  tooltipId?: string;
};

export const Tooltip = forwardRef(function Tooltip(
  {
    tooltip,
    trigger,
    tooltipId,
    position,
    icon = "help",
    noMargin = false,
    tooltipIsLabel = false,
    inText = false,
    forceVisible = false,
    inline = false,
    children,
  }: TooltipProps,
  forwardedRef: React.Ref<TooltipRef>,
) {
  const id = useId();
  const [tooltipRef, setTooltipRef] = useState<TooltipInstance>();
  useImperativeHandle(forwardedRef, (): TooltipRef => {
    return {
      hideTooltip: () => tooltipRef?.hideTooltip(),
      showTooltip: () => tooltipRef?.showTooltip(),
      isShowing: () => tooltipRef?.isShowing() ?? false,
      updateTooltipPosition: () => tooltipRef?.updateTooltipPosition(),
    };
  }, [tooltipRef]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const tooltipInstance = new DkfdsTooltip(ref.current!);
    tooltipInstance.init();
    setTooltipRef(tooltipInstance);
  }, [ref]);

  const Container = inText || inline ? "span" : "div";
  return (
    <Container
      ref={ref}
      className={mergeStrings(
        "tooltip-wrapper",
        inText && "in-text",
        noMargin && "mt-0 mb-0",
      )}
      data-tooltip={tooltip}
      data-tooltip-id={tooltipId ?? id}
      data-position={position}
      data-trigger={trigger}
      data-force-visible={forceVisible ? "true" : undefined}
    >
      {children ?? (
        <Button
          icon={icon}
          className={mergeStrings(
            "tooltip-target",
            tooltipIsLabel && "tooltip-label",
          )}
          buttonType="unstyled"
          type="button"
          aria-label="Læs mere"
          aria-controls={tooltipId ?? id}
          aria-expanded={false}
        ></Button>
      )}
    </Container>
  );
});
