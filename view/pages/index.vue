<template lang="pug">
  section
    .panel
      .panel_header
        span.label コンセント
        span.label ON
        | 部屋の電灯
      .panel_content.content_wrap
        .content_wrap_item
          button(@click='toggleOn("1")').btn.btn-block OFF
        .content_wrap_item
          button(@click='toggleOff("1")').btn.btn-block ON
</template>

<script>
export default {
  methods: {
    toggleOn(deviceId) {
      this.$axios.put(`/api/devices/${deviceId}/queue`, {
        type: "TOGGLE",
        value: "ON"
      });
    },
    toggleOff(deviceId) {
      this.$axios.put(`/api/devices/${deviceId}/queue`, {
        type: "TOGGLE",
        value: "OFF"
      });
    }
  }
};
</script>

<style lang="scss">
.content_wrap {
  font-size: 0;

  &_item {
    display: inline-block;

    width: calc(100% / 2);
    padding: 10px;

    font-size: 1rem;
  }
}
.panel {
  padding: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &_header {
    padding: 10px;

    background-color: #333333;
    color: #ffffff;
  }

  &_content {
    padding: 10px;

    background-color: #e7e7e7;
  }
}
.btn {
  padding: 10px;

  background-color: #302f2f;
  color: #ffffff;

  font-size: 1.5em;

  border: none;

  &:active {
    background-color: #727272;
  }

  &:focus {
    outline: none;
  }

  &-block {
    display: block;
    width: 100%;
  }
}
</style>
