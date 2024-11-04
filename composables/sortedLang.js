// It will be available as useFoo() (camelCase of file name without extension)
import { useLangStore } from "~/store/Lang";
export default function sortedLang(arraySorting) {
  const lang = useLangStore();
  watch(
    () => lang.selected,
    (select) => {
      if (select && select.id) {
        const sorted = arraySorting.sort((a, b) => {
          if (a.id === select.id) return -1;
          if (b.id === select.id) return 1;
          return 0;
        });
        return sorted;
      }
    }
  );
}
