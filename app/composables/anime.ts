import type { Scope } from 'animejs';
import { createScope } from 'animejs';

export function useAnimeScopeSafe(rootRef: MaybeRefOrGetter<HTMLElement | null>, cb: (scope: Scope) => void) {
  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = toValue(rootRef);
    if (!root) return;
    const scope = createScope({ root }).add(cb);
    onUnmounted(() => {
      scope.revert();
    });
  });
}
