import React from 'react';
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';

import { Sheet } from '../src';

test('locks background scrolling and restores existing styles on close', async () => {
  const root = document.documentElement;
  const originalRootStyle = root.style.cssText;
  const originalBodyStyle = document.body.style.cssText;
  root.style.overflow = 'auto';
  root.style.paddingRight = '7px';
  document.body.style.minHeight = '3000px';
  const screen = await render(<ScrollLockSheet isOpen={false} />);
  try {
    // Establish that the background really can scroll before testing the lock.
    await userEvent.wheel(page.getByRole('button', { name: 'Background' }), {
      delta: { y: 200 },
    });
    await expect.poll(() => window.scrollY).toBeGreaterThan(0);
    window.scrollTo(0, 0);
    await expect.poll(() => window.scrollY).toBe(0);

    await screen.rerender(<ScrollLockSheet isOpen />);
    await expect
      .element(page.getByRole('button', { name: 'Sheet content' }))
      .toBeVisible();
    expect(getComputedStyle(root).overflow).toBe('hidden');
    await userEvent.wheel(page.getByRole('button', { name: 'Background' }), {
      delta: { y: 200 },
    });
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
    expect(window.scrollY).toBe(0);

    await screen.rerender(<ScrollLockSheet isOpen={false} />);
    await expect
      .element(page.getByRole('button', { name: 'Sheet content' }))
      .not.toBeInTheDocument();
    expect(root.style.overflow).toBe('auto');
    expect(root.style.paddingRight).toBe('7px');
    await userEvent.wheel(page.getByRole('button', { name: 'Background' }), {
      delta: { y: 200 },
    });
    await expect.poll(() => window.scrollY).toBeGreaterThan(0);
  } finally {
    await screen.unmount();
    root.style.cssText = originalRootStyle;
    document.body.style.cssText = originalBodyStyle;
    window.scrollTo(0, 0);
  }
});

test('keeps the scroll lock until the last sheet closes and restores on unmount', async () => {
  const root = document.documentElement;
  const originalStyle = root.style.cssText;
  root.style.overflow = 'auto';
  root.style.paddingRight = '9px';
  const screen = await render(
    <>
      <ScrollLockSheet isOpen />
      <ScrollLockSheet isOpen />
    </>
  );
  try {
    expect(root.style.overflow).toBe('hidden');
    await screen.rerender(
      <>
        <ScrollLockSheet isOpen />
        <ScrollLockSheet isOpen={false} />
      </>
    );
    expect(root.style.overflow).toBe('hidden');
    await screen.unmount();
    expect(root.style.overflow).toBe('auto');
    expect(root.style.paddingRight).toBe('9px');
    expect(document.querySelector('.react-modal-sheet-root')).toBeNull();
  } finally {
    await screen.unmount();
    root.style.cssText = originalStyle;
  }
});

test('disableScrollLocking leaves existing document styles alone', async () => {
  const root = document.documentElement;
  const originalStyle = root.style.cssText;
  root.style.overflow = 'auto';
  root.style.paddingRight = '11px';
  const screen = await render(<ScrollLockSheet isOpen disableScrollLocking />);
  try {
    await expect
      .element(page.getByRole('button', { name: 'Sheet content' }))
      .toBeVisible();
    expect(root.style.overflow).toBe('auto');
    expect(root.style.paddingRight).toBe('11px');
    await screen.unmount();
    expect(root.style.overflow).toBe('auto');
    expect(root.style.paddingRight).toBe('11px');
  } finally {
    await screen.unmount();
    root.style.cssText = originalStyle;
  }
});

function ScrollLockSheet({
  isOpen,
  disableScrollLocking = false,
}: {
  isOpen: boolean;
  disableScrollLocking?: boolean;
}) {
  return (
    <>
      <button style={{ position: 'fixed', top: 0, left: 0 }}>Background</button>
      <Sheet
        isOpen={isOpen}
        onClose={() => {}}
        disableScrollLocking={disableScrollLocking}
        detent="content"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <button>Sheet content</button>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
