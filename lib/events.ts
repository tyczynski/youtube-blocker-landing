/**
 * Fire callback with window.onload
 *
 * @param callback
 */
export const windowLoad = (callback: (event?: Event) => void) => {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback)
  }
}
