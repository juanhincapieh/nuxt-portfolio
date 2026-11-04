/**
 * `true` once the window has scrolled past `threshold` pixels.
 * Always `false` during SSR; syncs on mount.
 */
export function useWindowScrolled(threshold = 40) {
    const scrolled = ref(false)

    const update = () => {
        scrolled.value = window.scrollY > threshold
    }

    onMounted(() => {
        update()
        window.addEventListener('scroll', update, { passive: true })
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', update)
    })

    return readonly(scrolled)
}
