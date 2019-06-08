<template lang="pug">
  div
    nav.nav
      img.nav_logo(src='~/assets/images/logo.svg')
    section.nuxt
      nuxt
    footer.footer
      .footer_item a
      .footer_item b
      .footer_item c
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;

  text-align: center;

  background-color: #e2ff41;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.25em;

  &_logo {
    height: 64px;
    vertical-align: bottom;
  }
}
.nuxt {
  padding: 75px 0;
}
.footer {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 64px;

  // padding: 10px;

  background-color: #e7e7e7;

  font-size: 0;

  &_item {
    display: inline-block;
    font-size: 1rem;
    width: calc(100% / 3);

    text-align: center;
    vertical-align: middle;
  }
}
</style>
