<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<style>
/* Layout-specific styles are handled in theme/styles/index.css */
.slidev-layout.default {
  padding: 2.5rem 3.5rem;
  font-size: 1.1rem;
  position: relative;
}

/* Logo styles - making sure they apply */
.slidev-layout.default .logo {
  position: absolute !important;
  top: 2rem !important;
  right: 2rem !important;
  width: 4rem !important;
  height: 4rem !important;
  object-fit: contain !important;
  z-index: 10 !important;
}
</style>
