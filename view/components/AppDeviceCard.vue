<template lang="pug">
  article
    .card
      .card_header
        span.label {{ device.type.name }}
        span(v-if='device.type.enum === "TOGGLE"', :class='{ "label-on": device.status.value === "ON", "label-off" : device.status.value === "OFF" }').label {{ device.status.value }}
        | {{ device.name }}
      .card_content
        .contentWrap(v-if='device.type.enum === "TOGGLE"')
          .contentWrap_item
            button(@click='addQueue(device.id, "TOGGLE", "OFF")', :disabled='device.status.value === "OFF"').btn.btn-block.btn-large.btn-off OFF
          .contentWrap_item
            button(@click='addQueue(device.id, "TOGGLE", "ON")', :disabled='device.status.value === "ON"').btn.btn-block.btn-large.btn-on ON
        .contentWrap(v-else-if='device.type.enum === "SENSOR"')
          .contentWrap_item
            .panel
              .panel_value {{ device.status.timestamp }}
              .panel_index 取得時間
          .contentWrap_item
            .panel
              .panel_value {{ device.status.temperature }}℃
              .panel_index 温度
          .contentWrap_item
            .panel
              .panel_value {{ device.status.humidity }}%
              .panel_index 湿度
          .contentWrap_item
            .panel
              .panel_value {{ device.status.illuminance }}%
              .panel_index 明るさレベル
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "AppDeviceCard",
  props: ["device"],
  methods: {
    ...mapActions({ displayModal: "modal/display" }),
    addQueue(deviceId, type, value) {
      axios.put(`/api/devices/${deviceId}/queue`, {
        type,
        value
      });
      this.displayModal({
        level: "",
        title: "操作を受付けました。",
        content: `${this.device.name}にリクエスト「${value}」を送信しました。`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;

  background-color: #d8d8d8;

  border-bottom: 2px solid #cacaca;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &_header {
    padding: 10px;

    background-color: #333333;
    color: #ffffff;

    border-bottom: 2px solid #494949;
    border-radius: 5px;
  }

  &_content {
    padding: 10px;
  }
}

.panel {
  padding: 10px;

  background-color: #4d4d4d;
  color: #ffffff;
  text-align: center;

  border-radius: 5px;

  &_index {
    font-size: 0.9em;
  }
  &_value {
    font-size: 1.25em;
  }
}
</style>
