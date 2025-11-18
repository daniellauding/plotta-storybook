import type { Meta, StoryObj } from '@storybook/react';
import { colors, hslToHex, hslToString } from '@plotta/tokens';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * Color swatch component for displaying colors
 */
const ColorSwatch = ({
  name,
  hsl,
  description,
}: {
  name: string;
  hsl: { h: number; s: number; l: number };
  description?: string;
}) => {
  const hex = hslToHex(hsl);
  const hslString = hslToString(hsl);

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg">
      <div
        className="w-full h-24 rounded-md border"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="font-semibold">{name}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        <div className="mt-2 space-y-1 text-xs font-mono">
          <p>HSL: {hslString}</p>
          <p>HEX: {hex}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Semantic Colors - Light Theme
 *
 * These are the core semantic colors used throughout the Plotta design system.
 * They automatically adapt to light and dark themes.
 */
export const SemanticColorsLight: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Light Theme Semantic Colors</h2>
        <p className="text-muted-foreground mb-6">
          Core semantic colors that define the visual language of Plotta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ColorSwatch
          name="Background"
          hsl={colors.light.background}
          description="Main background color"
        />
        <ColorSwatch
          name="Foreground"
          hsl={colors.light.foreground}
          description="Main text color"
        />
        <ColorSwatch
          name="Primary"
          hsl={colors.light.primary}
          description="Primary brand color"
        />
        <ColorSwatch
          name="Primary Foreground"
          hsl={colors.light.primaryForeground}
          description="Text on primary"
        />
        <ColorSwatch
          name="Secondary"
          hsl={colors.light.secondary}
          description="Secondary actions"
        />
        <ColorSwatch
          name="Secondary Foreground"
          hsl={colors.light.secondaryForeground}
          description="Text on secondary"
        />
        <ColorSwatch
          name="Muted"
          hsl={colors.light.muted}
          description="Muted backgrounds"
        />
        <ColorSwatch
          name="Muted Foreground"
          hsl={colors.light.mutedForeground}
          description="Muted text"
        />
        <ColorSwatch
          name="Accent"
          hsl={colors.light.accent}
          description="Accent color"
        />
        <ColorSwatch
          name="Destructive"
          hsl={colors.light.destructive}
          description="Destructive actions"
        />
        <ColorSwatch name="Border" hsl={colors.light.border} description="Border color" />
        <ColorSwatch name="Input" hsl={colors.light.input} description="Input borders" />
      </div>
    </div>
  ),
};

/**
 * Semantic Colors - Dark Theme
 *
 * Dark theme variants of the semantic colors.
 */
export const SemanticColorsDark: StoryObj = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="dark space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Dark Theme Semantic Colors</h2>
        <p className="text-muted-foreground mb-6">
          Dark theme variants with adjusted lightness for better contrast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ColorSwatch
          name="Background"
          hsl={colors.dark.background}
          description="Main background color"
        />
        <ColorSwatch
          name="Foreground"
          hsl={colors.dark.foreground}
          description="Main text color"
        />
        <ColorSwatch
          name="Primary"
          hsl={colors.dark.primary}
          description="Primary brand color"
        />
        <ColorSwatch
          name="Primary Foreground"
          hsl={colors.dark.primaryForeground}
          description="Text on primary"
        />
        <ColorSwatch
          name="Secondary"
          hsl={colors.dark.secondary}
          description="Secondary actions"
        />
        <ColorSwatch
          name="Muted"
          hsl={colors.dark.muted}
          description="Muted backgrounds"
        />
        <ColorSwatch
          name="Accent"
          hsl={colors.dark.accent}
          description="Accent color"
        />
        <ColorSwatch
          name="Destructive"
          hsl={colors.dark.destructive}
          description="Destructive actions"
        />
        <ColorSwatch name="Border" hsl={colors.dark.border} description="Border color" />
      </div>
    </div>
  ),
};

/**
 * Sticky Note Colors
 *
 * Vibrant colors used for sticky notes across all Plotta platforms.
 * These colors are consistent in both light and dark themes.
 */
export const StickyNoteColors: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Sticky Note Colors</h2>
        <p className="text-muted-foreground mb-6">
          10 vibrant colors for sticky notes, consistent across web and mobile.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(colors.sticky).map(([name, hsl]) => (
          <ColorSwatch
            key={name}
            name={name.charAt(0).toUpperCase() + name.slice(1)}
            hsl={hsl}
          />
        ))}
      </div>
    </div>
  ),
};

/**
 * Project Theme Colors
 *
 * Pastel colors used for project canvas backgrounds.
 */
export const ProjectThemeColors: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Project Theme Colors</h2>
        <p className="text-muted-foreground mb-6">
          Subtle background colors for project canvases.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(colors.projectTheme).map(([name, hsl]) => (
          <ColorSwatch
            key={name}
            name={name
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())}
            hsl={hsl}
          />
        ))}
      </div>
    </div>
  ),
};

/**
 * Priority Colors
 *
 * Colors representing different priority levels for tasks.
 */
export const PriorityColors: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Priority Colors</h2>
        <p className="text-muted-foreground mb-6">
          Color-coded priority levels for tasks and notes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(colors.priority).map(([name, hsl]) => (
          <ColorSwatch
            key={name}
            name={name.charAt(0).toUpperCase() + name.slice(1)}
            hsl={hsl}
          />
        ))}
      </div>
    </div>
  ),
};
