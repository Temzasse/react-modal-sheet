/**
 * This library runs on mobile devices so we can't use console.log for debugging. Instead, we can use this function to send debug information to a remote server or store it locally on the device.
 * Instead display the "payload" in a fixed position element on the screen
 * and hide it when that element is clicked. Create the element if it doesn't exist,
 * and update its content with the payload (any JSON data).
 */
export function debug(payload: any, placement: 'top' | 'bottom' = 'top') {
  let debugElement = document.getElementById('debug-element');

  if (!debugElement) {
    debugElement = document.createElement('div');
    debugElement.id = 'debug-element';
    debugElement.style.position = 'fixed';
    debugElement.style[placement] = '0';
    debugElement.style.left = '0';
    debugElement.style.width = '100%';
    debugElement.style.maxHeight = '50%';
    debugElement.style.overflowY = 'auto';
    debugElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    debugElement.style.color = 'white';
    debugElement.style.padding = '10px';
    debugElement.style.fontSize = '12px';
    debugElement.style.zIndex = '9999';
    debugElement.style.cursor = 'pointer';
    document.body.appendChild(debugElement);

    debugElement.addEventListener('click', () => {
      if (debugElement) {
        debugElement.style.display =
          debugElement.style.display === 'none' ? 'block' : 'none';
      }
    });
  }

  const id = Math.random().toString(36).substring(2, 7);
  debugElement.textContent = JSON.stringify(payload, null, 2) + ` (${id})`;
  debugElement.style.display = 'block';
}
