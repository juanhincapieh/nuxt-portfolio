import type { MaybeRefOrGetter } from 'vue'

/**
 * Stops the page from scrolling while `locked` is true (e.g. an open menu or modal).
 * Pauses Lenis too, since it would otherwise keep scrolling the page.
 */
export function useScrollLock(locked: MaybeRefOrGetter<boolean>) {
    const lenis = useLenis()

    const apply = (isLocked: boolean) => {
        document.documentElement.classList.toggle('overflow-hidden', isLocked)

        if (isLocked) lenis.value?.stop()
        else lenis.value?.start()
    }

    // Only changes on the client (user interaction), so `document` is safe here.
    watch(() => toValue(locked), apply)

    onBeforeUnmount(() => {
        if (toValue(locked)) apply(false)
    })
}
