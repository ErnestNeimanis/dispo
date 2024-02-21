import { ref, onMounted, onUnmounted, computed } from "vue";

export function useWindowSize() {
  const extraSmall = ref(0);
  const small = ref(400);
  const medium = ref(768);
  const large = ref(992);
  const extraLarge = ref(1200);

  const windowSizes = {
    extraSmall: extraSmall.value,
    small: small.value,
    medium: medium.value,
    large: large.value,
    extraLarge: extraLarge.value,
  };

  const windowWidth = ref(window.innerWidth);
  const windowHeight = ref(window.innerHeight);

  //ONLY small, medium and large are exclusive
  //extraSmallWindow and extraLargeWindow are NOT exclusive
  //extraSmallWindow == true => small == true and extraLargeWindow == true => largeWindow == true

  const extraSmallWindow = computed(() => windowWidth.value < small.value);
  const smallWindow = computed(() => windowWidth.value < medium.value);
  const mediumWindow = computed(
    () => windowWidth.value >= medium.value && windowWidth.value < large.value
  );
  const largeWindow = computed(() => windowWidth.value >= large.value);

  const extraLargeWindow = computed(
    () => windowWidth.value >= extraLarge.value
  );

  function update() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

  return {
    windowWidth,
    windowHeight,
    windowSizes,

    extraSmallWindow,
    smallWindow,
    mediumWindow,
    largeWindow,
    extraLargeWindow,

    small,
    medium,
    large,
  };
}
