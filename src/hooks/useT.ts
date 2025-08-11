import { useContext } from "react";
import {
  DkfdsTranslationContext,
  TranslateFn,
} from "../contexts/translation-context";

export function useT(): TranslateFn {
  const dkfdsTranslationContext = useContext(DkfdsTranslationContext);
  if (!dkfdsTranslationContext) {
    return () => undefined; // Return a no-op function if context is not available. This is more handy than writing ?.() in every component that uses this hook.
  }
  return dkfdsTranslationContext;
}
