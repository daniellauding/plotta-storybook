# Changesets

This folder contains changesets for the Plotta Design System.

## What are changesets?

Changesets are a way to manage versioning and changelogs for monorepo projects.

## How to create a changeset

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages have changed
2. Choose the version bump type (patch/minor/major)
3. Write a summary of the changes

## Version bump guidelines

- **Patch (0.0.x):** Bug fixes, documentation updates
- **Minor (0.x.0):** New features, non-breaking changes
- **Major (x.0.0):** Breaking changes

## Example

```bash
$ pnpm changeset

Which packages would you like to include?
  ◉ @plotta/tokens
  ◯ @plotta/utils
  ◯ @plotta/components-web
  ◯ @plotta/components-native

What kind of change is this for @plotta/tokens?
  ◯ patch
  ◉ minor
  ◯ major

Please enter a summary for this change:
Add new color tokens for priority levels
```

This creates a file in `.changeset/` with the change information.

## Publishing

When you push changesets to main:
1. GitHub Actions creates a "Version Packages" PR
2. The PR updates package.json versions and CHANGELOG.md
3. Merging the PR triggers automatic publishing to npm

## Learn more

- [Changesets Documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
