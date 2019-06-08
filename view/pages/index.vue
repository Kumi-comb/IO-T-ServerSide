<template lang="pug">
  section
    .panel
      .panel_header
        span.label コンセント
        span.label.label-on ON
        | 部屋の電灯
      .panel_content.contentWrap
        .contentWrap_item.contentWrap_item-toggle
          button(@click='toggleOn("1")').btn.btn-block.btn-off OFF
        .contentWrap_item.contentWrap_item-toggle
          button(@click='toggleOff("1")').btn.btn-block.btn-on ON
    .panel
      .panel_header
        span.label コンセント
        span.label.label-on ON
        | 部屋の電灯
      .panel_content.contentWrap
        .contentWrap_item.contentWrap_item-toggle
          button(@click='toggleOn("1")').btn.btn-block.btn-off OFF
        .contentWrap_item.contentWrap_item-toggle
          button(@click='toggleOff("1")').btn.btn-block.btn-on ON
    .modalWrap
      .modal
        .modal_header 操作を受付けました
        .modal_content 「部屋の電灯」にトグルリクエスト「ON」を送信しました。
        .modal_footer
          button.btn OK
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
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px * 2);

  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  max-width: 300px;

  background-color: #ffffff;

  &_header {
    padding: 10px;

    background-color: #333333;
    color: #ffffff;

    border-bottom: 2px solid #494949;
  }

  &_content {
    padding: 10px;
  }

  &_footer {
    padding: 10px;
    padding-top: 0;

    text-align: right;
  }

  // border-radius: 10px;
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
  margin: 10px;

  background-color: #e7e7e7;

  border-bottom: 2px solid #cacaca;
  // border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &_header {
    padding: 10px;

    background-color: #333333;
    color: #ffffff;

    border-bottom: 2px solid #494949;
    // border-radius: 10px;
  }

  &_content {
    padding: 10px;
  }
}

.btn {
  padding: 10px;

  // border-radius: 10px;

  background-color: #2f2f2f;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 1em;

  border: none;
  cursor: pointer;

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

  &-off {
    background-color: #22a543;
    &:active {
      background-color: #1a7e33;
    }
  }
  &-on {
    background-color: #a52222;
    &:active {
      background-color: #7e1a1a;
    }
  }
}

.label {
  display: inline-block;

  padding: 5px 10px;
  margin-right: 10px;

  vertical-align: middle;

  background-color: #cccccc;
  color: #333333;

  // border-radius: 10px;

  &-off {
    background-color: #43c05e;
    color: #ffffff;
  }
  &-on {
    background-color: #c04343;
    color: #ffffff;
  }
}
</style>
