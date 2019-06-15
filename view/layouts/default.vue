<template lang="pug">
  div
    nav.nav I/O-T コントロールパネル
    section.nuxt
      nuxt
    footer.footer
      .footer_item
        img.footer_item_profileIcon(src='~/assets/icon.png')
      .footer_item ホーム
      .footer_item 設定
    AppModal
</template>

<script>
import AppModal from "~/components/AppModal.vue";

export default {
  components: { AppModal }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;

  padding: 0 20px;

  vertical-align: middle;
  // text-align: center;

  background-color: #e2e2e2;
  font-size: 1.2em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  &_logo {
    height: 64px;
    vertical-align: bottom;
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

  background-color: #e4e4e4;

  font-size: 0;

  &_item {
    display: inline-block;
    font-size: 1rem;
    width: calc(100% / 3);

    text-align: center;
    vertical-align: middle;

    &_profileIcon {
      width: 48px;
      border-radius: 50%;
      vertical-align: bottom;
    }
  }
}
</style>
