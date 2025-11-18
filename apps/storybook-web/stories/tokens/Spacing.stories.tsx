import type { Meta, StoryObj } from '@storybook/react';
import { spacing, spacingAliases } from '@plotta/tokens';

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * Spacing Scale
 *
 * The spacing scale based on a 4px baseline grid.
 * Maps directly to Tailwind spacing utilities.
 */
export const SpacingScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Spacing Scale</h2>
        <p className="text-muted-foreground mb-6">
          Based on a 4px baseline grid for consistent spacing throughout the application.
        </p>
      </div>

      <div className="space-y-2">
        {Object.entries(spacing).map(([name, value]) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-16 text-sm font-mono text-muted-foreground">{name}</div>
            <div className="w-20 text-sm font-mono text-muted-foreground">
              {value}px
            </div>
            <div className="flex items-center gap-2">
              <div
                className="bg-primary"
                style={{
                  width: `${value}px`,
                  height: '20px',
                }}
              />
              <div className="text-sm text-muted-foreground">
                ({value / 16}rem)
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Usage</h3>
        <pre className="text-sm font-mono">
          {`import { spacing } from '@plotta/tokens';

// React Native
<View style={{ padding: spacing[4] }}> // 16px

// Tailwind (web)
<div className="p-4"> // 16px (1rem)`}
        </pre>
      </div>
    </div>
  ),
};

/**
 * Spacing Aliases
 *
 * Named aliases for common spacing values (xs, sm, md, lg, xl, etc.).
 */
export const SpacingAliases: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Spacing Aliases</h2>
        <p className="text-muted-foreground mb-6">
          Named aliases for easier reference to common spacing values.
        </p>
      </div>

      <div className="space-y-2">
        {Object.entries(spacingAliases).map(([name, value]) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-16 text-sm font-mono text-muted-foreground">{name}</div>
            <div className="w-20 text-sm font-mono text-muted-foreground">
              {value}px
            </div>
            <div
              className="bg-primary"
              style={{
                width: `${value}px`,
                height: '20px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Padding Examples
 *
 * Visual examples of padding using spacing tokens.
 */
export const PaddingExamples: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Padding Examples</h2>
        <p className="text-muted-foreground mb-6">
          Common padding patterns using spacing tokens.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground mb-2">Extra Small (4px)</div>
          <div className="inline-block bg-secondary" style={{ padding: `${spacing[1]}px` }}>
            <div className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              Content
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Small (8px)</div>
          <div className="inline-block bg-secondary" style={{ padding: `${spacing[2]}px` }}>
            <div className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              Content
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Medium (16px)</div>
          <div className="inline-block bg-secondary" style={{ padding: `${spacing[4]}px` }}>
            <div className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              Content
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Large (24px)</div>
          <div className="inline-block bg-secondary" style={{ padding: `${spacing[6]}px` }}>
            <div className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              Content
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Extra Large (32px)</div>
          <div className="inline-block bg-secondary" style={{ padding: `${spacing[8]}px` }}>
            <div className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Gap Examples
 *
 * Visual examples of gap/spacing between elements.
 */
export const GapExamples: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Gap Examples</h2>
        <p className="text-muted-foreground mb-6">
          Common gap patterns between flex/grid items.
        </p>
      </div>

      <div className="space-y-6">
        {[
          { name: 'Small Gap (8px)', value: spacing[2] },
          { name: 'Medium Gap (16px)', value: spacing[4] },
          { name: 'Large Gap (24px)', value: spacing[6] },
        ].map(({ name, value }) => (
          <div key={name}>
            <div className="text-sm text-muted-foreground mb-2">{name}</div>
            <div className="flex" style={{ gap: `${value}px` }}>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
                Item 1
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
                Item 2
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
                Item 3
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Layout Spacing
 *
 * Examples of spacing in common layout patterns.
 */
export const LayoutSpacing: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Layout Spacing</h2>
        <p className="text-muted-foreground mb-6">
          Common spacing patterns in layouts.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="text-sm text-muted-foreground mb-4">Card Layout</div>
          <div
            className="border rounded-lg bg-card"
            style={{ padding: `${spacing[6]}px` }}
          >
            <h3 className="text-lg font-semibold" style={{ marginBottom: `${spacing[2]}px` }}>
              Card Title
            </h3>
            <p className="text-muted-foreground" style={{ marginBottom: `${spacing[4]}px` }}>
              Card content with proper spacing between elements.
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
              Action
            </button>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-4">Form Layout</div>
          <div
            className="border rounded-lg bg-card"
            style={{ padding: `${spacing[6]}px` }}
          >
            <div style={{ marginBottom: `${spacing[4]}px` }}>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your name"
              />
            </div>
            <div style={{ marginBottom: `${spacing[4]}px` }}>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};
