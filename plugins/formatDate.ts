export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    mounted(el, binding) {
      const time = binding.value.split("+").shift();
      el.innerHTML = time;
    },
  });
});
