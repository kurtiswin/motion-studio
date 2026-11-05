// cn() helper for the Cards design system.
// tailwind-merge is extended so the named type styles count as font sizes
// (so they don't collide with text colours like text-fg-muted) and the
// system shadows are recognised as one group.
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "heading-1", "heading-2", "heading-3", "heading-4", "heading-5", "heading-6",
            "ui-xl", "ui-lg", "ui-md", "ui-sm", "ui-xs",
            "body-xl", "body-lg", "body-md", "body-sm", "body-xs",
            "overline-md", "overline-sm", "overline-xs", "overline-2xs",
          ],
        },
      ],
      shadow: [
        {
          shadow: [
            "focus", "focus-primary", "focus-danger", "field", "control", "button",
            "primary", "inverse", "danger", "badge", "menu",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
