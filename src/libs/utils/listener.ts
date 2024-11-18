export function on<K extends keyof HTMLElementEventMap>(
  obj: HTMLElement | Window,
  type: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  obj.addEventListener(type, listener, options);
}

export function off<K extends keyof HTMLElementEventMap>(
  obj: HTMLElement | Window,
  type: K,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  obj.removeEventListener(type, listener, options);
}
