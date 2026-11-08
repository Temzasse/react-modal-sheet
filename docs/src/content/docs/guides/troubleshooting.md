---
title: Troubleshooting
---

## The sheet doesn't open when using `StrictMode`

If you are using React `StrictMode` the sheet animations might not work as expected. This seems to be an issue in the `motion` library and I haven't been able to find a good solution for it yet. You can see all `motion` issues related to the `StrictMode` [here](https://github.com/motiondivision/motion/issues?q=is%3Aissue+StrictMode). Easiest solution is to just not use `StrictMode` 🤷‍♂️

## Upgrading from v4 to v5

The most common migration issues are:

1. **Snap points not working**: Ensure your snap points are in ascending order (`[0, 0.5, 1]` instead of `[1, 0.5, 0]`)
2. **Scrolling issues**: Remove `Sheet.Scroller` components as scrolling is now handled by `Sheet.Content`
3. **Detent errors**: Update detent prop values (`"full-height"` → `"default"`, `"content-height"` → `"content"`)
