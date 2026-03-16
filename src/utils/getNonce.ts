// This file is copied from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/getNonce.ts for now because there's no release yet.

import { getOwnerWindow } from '@react-aria/utils';

type NonceWindow = Window &
  typeof globalThis & {
    __webpack_nonce__?: string;
  };

function getWebpackNonce(doc?: Document): string | undefined {
  const ownerWindow = doc?.defaultView as NonceWindow | null | undefined;
  return (
    ownerWindow?.__webpack_nonce__ ||
    // @ts-expect-error: Silence error from copied code
    globalThis.__webpack_nonce__ ||
    undefined
  );
}

let nonceCache = new WeakMap<Document, string>();

/** Reset the cached nonce value. Exported for testing only. */
export function resetNonceCache(): void {
  nonceCache = new WeakMap();
}

/**
 * Returns the CSP nonce, if configured via a `<meta property="csp-nonce">` tag or `__webpack_nonce__`.
 * This allows dynamically injected `<style>` elements to work with Content Security Policy.
 */
export function getNonce(doc?: Document): string | undefined {
  const d = doc ?? (typeof document !== 'undefined' ? document : undefined);
  if (!d) {
    return getWebpackNonce(d);
  }

  if (nonceCache.has(d)) {
    return nonceCache.get(d);
  }

  const meta = d.querySelector('meta[property="csp-nonce"]');
  const nonce =
    (meta &&
      meta instanceof getOwnerWindow(meta).HTMLMetaElement &&
      (meta.nonce || meta.content)) ||
    getWebpackNonce(d) ||
    undefined;

  if (nonce !== undefined) {
    nonceCache.set(d, nonce);
  }
  return nonce;
}
