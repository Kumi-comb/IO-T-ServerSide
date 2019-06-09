<template lang="pug">
  div
    nav.nav スイッチパネル
    section.nuxt
      nuxt
    footer.footer
      .footer_item a
      .footer_item b
      .footer_item c
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;

  padding: 0 10px;

  vertical-align: middle;
  // text-align: center;

  background-color: #e2e2e2;
  font-size: 1.2em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  &_logo {
    height: 64px;
    vertical-align: bottom;
  }

  &_title {
  }
}
.nuxt {
  margin: 90px 2.5%;
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
