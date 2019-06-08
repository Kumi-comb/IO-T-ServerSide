<template lang="pug">
  section
    .panel
      .panel_header
        span.label コンセント
        span.label ON
        | 部屋の電灯
      .panel_content.contentWrap
        .contentWrap_item
          button(@click='toggleOn("1")').btn.btn-block OFF
        .contentWrap_item
          button(@click='toggleOff("1")').btn.btn-block ON
    //- .modalWrap
    //-   .modal
</template>

<script>
export default {
  methods: {
    toggleOn(deviceId) {
      this.$axios.put(`/api/devices/${deviceId}/queue`, {
        type: 'TOGGLE',
        value: 'ON'
      })
    },
    toggleOff(deviceId) {
      this.$axios.put(`/api/devices/${deviceId}/queue`, {
        type: 'TOGGLE',
        value: 'OFF'
      })
    }
  }
}
</script>

<style lang="scss">
.modalWrap {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px * 2);

  background-color: rgba(0, 0, 0, 0.25);
}
.contentWrap {
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
