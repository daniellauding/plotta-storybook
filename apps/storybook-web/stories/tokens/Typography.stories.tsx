import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '@plotta/tokens';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * Font Sizes
 *
 * The typography scale used throughout Plotta, from xs (12px) to 7xl (72px).
 */
export const FontSizes: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Font Sizes</h2>
        <p className="text-muted-foreground mb-6">
          Typography scale based on a modular scale for consistent sizing.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(typography.fontSize).map(([name, size]) => (
          <div key={name} className="flex items-baseline gap-4 pb-4 border-b">
            <div className="w-20 text-sm font-mono text-muted-foreground">{name}</div>
            <div className="w-16 text-sm font-mono text-muted-foreground">{size}px</div>
            <div style={{ fontSize: `${size}px` }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Usage</h3>
        <pre className="text-sm font-mono">
          {`import { fontSize } from '@plotta/tokens';

// React Native
<Text style={{ fontSize: fontSize.lg }}>

// Tailwind (web)
<p className="text-lg">`}
        </pre>
      </div>
    </div>
  ),
};

/**
 * Font Weights
 *
 * Standard font weights from normal (400) to extrabold (800).
 */
export const FontWeights: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
        <p className="text-muted-foreground mb-6">
          Font weight scale for emphasizing text.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(typography.fontWeight).map(([name, weight]) => (
          <div key={name} className="flex items-baseline gap-4 pb-4 border-b">
            <div className="w-24 text-sm font-mono text-muted-foreground">{name}</div>
            <div className="w-16 text-sm font-mono text-muted-foreground">{weight}</div>
            <div style={{ fontWeight: weight }} className="text-lg">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Line Heights
 *
 * Line height values for different text densities.
 */
export const LineHeights: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Line Heights</h2>
        <p className="text-muted-foreground mb-6">
          Unitless line height values for controlling text density.
        </p>
      </div>

      <div className="space-y-6">
        {Object.entries(typography.lineHeight).map(([name, height]) => (
          <div key={name} className="pb-4 border-b">
            <div className="flex gap-4 mb-2">
              <div className="w-24 text-sm font-mono text-muted-foreground">{name}</div>
              <div className="w-16 text-sm font-mono text-muted-foreground">{height}</div>
            </div>
            <div style={{ lineHeight: height }} className="max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Letter Spacing
 *
 * Letter spacing values for fine-tuning text appearance.
 */
export const LetterSpacing: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Letter Spacing</h2>
        <p className="text-muted-foreground mb-6">
          Letter spacing values in em units for text adjustment.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(typography.letterSpacing).map(([name, spacing]) => (
          <div key={name} className="flex items-baseline gap-4 pb-4 border-b">
            <div className="w-24 text-sm font-mono text-muted-foreground">{name}</div>
            <div className="w-24 text-sm font-mono text-muted-foreground">{spacing}</div>
            <div style={{ letterSpacing: spacing }} className="text-lg">
              THE QUICK BROWN FOX JUMPS
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Font Families
 *
 * System font stacks for optimal performance and native feel.
 */
export const FontFamilies: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Font Families</h2>
        <p className="text-muted-foreground mb-6">
          System font stacks for cross-platform consistency.
        </p>
      </div>

      <div className="space-y-6">
        <div className="pb-4 border-b">
          <div className="text-sm font-mono text-muted-foreground mb-2">sans</div>
          <div
            style={{ fontFamily: typography.fontFamily.sans }}
            className="text-lg mb-2"
          >
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs font-mono text-muted-foreground break-all">
            {typography.fontFamily.sans}
          </div>
        </div>

        <div className="pb-4 border-b">
          <div className="text-sm font-mono text-muted-foreground mb-2">mono</div>
          <div
            style={{ fontFamily: typography.fontFamily.mono }}
            className="text-lg mb-2"
          >
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs font-mono text-muted-foreground break-all">
            {typography.fontFamily.mono}
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Typography Examples
 *
 * Common typography patterns using the design tokens.
 */
export const TypographyExamples: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Examples</h2>
        <p className="text-muted-foreground mb-6">
          Common text styles using typography tokens.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="text-sm text-muted-foreground mb-2">Headings</div>
          <h1 className="text-6xl font-bold mb-2">Heading 1</h1>
          <h2 className="text-5xl font-bold mb-2">Heading 2</h2>
          <h3 className="text-4xl font-bold mb-2">Heading 3</h3>
          <h4 className="text-3xl font-semibold mb-2">Heading 4</h4>
          <h5 className="text-2xl font-semibold mb-2">Heading 5</h5>
          <h6 className="text-xl font-semibold">Heading 6</h6>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Body Text</div>
          <p className="text-base mb-2">
            This is body text using the base font size (16px). Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm text-muted-foreground">
            This is small text using the sm font size (14px). Perfect for captions and
            secondary information.
          </p>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Code</div>
          <code className="font-mono text-sm bg-muted px-2 py-1 rounded">
            const greeting = "Hello World";
          </code>
        </div>
      </div>
    </div>
  ),
};
