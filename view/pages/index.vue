<template lang="pug">
  section
    div(v-if='devices', v-for='(device, index) in devices')
      .card
        .card_header
          span.label {{ device.type.name }}
          span(v-if='device.type.enum === "TOGGLE"', :class='{ "label-on": device.status.value === "ON", "label-off" : device.status.value === "OFF" }').label {{ device.status.value }}
          | {{ device.name }}
        .card_content
          .contentWrap(v-if='device.type.enum === "TOGGLE"')
            .contentWrap_item
              button(@click='addQueue(index, "TOGGLE", "OFF")', :disabled='device.status.value === "OFF"').btn.btn-block.btn-large.btn-off OFF
            .contentWrap_item
              button(@click='addQueue(index, "TOGGLE", "ON")', :disabled='device.status.value === "ON"').btn.btn-block.btn-large.btn-on ON
          .contentWrap(v-if='device.type.enum === "SENSOR"')
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
    transition(name='fade')
      .modalWrap(v-if='modal')
        .modal
          .modal_header {{ modal.title }}
          .modal_content {{ modal.content }}
          .modal_footer
            button.btn(@click='modal = null') OK
</template>

<script>
export default {
  data() {
    return {
      devices: null,
      modal: null,
      intervalId: null
    };
  },
  beforeMount() {
    this.loadDevices();
    this.intervalId = setInterval(() => this.loadDevices(), 10000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    async loadDevices() {
      const devicesList = await this.$axios.get("/api/devices").catch(err => {
        switch (err.message) {
          case "Network Error":
            alert(
              "ネットワークエラーが発生しました。再読込みすると解決する可能性があります。"
            );
            clearInterval(this.intervalId);
            break;
          default:
            console.error(err);
        }
      });
      console.log(devicesList.data);
      this.devices = devicesList.data.map(x => ({
        id: x.id,
        type: {
          enum: x.type,
          name:
            x.type === "TOGGLE"
              ? "コンセント"
              : x.type === "REMOTE"
              ? "リモコン"
              : x.type === "SENSOR"
              ? "センサー"
              : "Undefined"
        },
        name: x.name,
        user: x.user,
        status: x.status
      }));
      console.log(this.devices);
    },
    addQueue(deviceIndexId, type, value) {
      const device = this.devices[deviceIndexId];

      this.$axios.put(`/api/devices/${device.id}/queue`, {
        type,
        value
      });
      this.modal = {
        title: "操作を受付けました",
        content: `${device.name}にリクエスト「${value}」を送信しました。`
      };
    }
  }
};
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

    border-radius: 5px;
  }

  &_content {
    padding: 10px;
  }

  &_footer {
    padding: 10px;
    padding-top: 0;

    text-align: right;
  }

  border-radius: 5px;
}

.contentWrap {
  font-size: 0;

  &_item {
    display: inline-block;
    vertical-align: top;

    width: calc(100% / 2);
    padding: 5px;

    font-size: 1rem;
  }
}

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

.btn {
  padding: 10px;

  border-radius: 5px;

  background-color: #2f2f2f;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  font-size: 1em;

  border: none;
  cursor: pointer;

  transition: all linear 100ms;

  &:active {
    background-color: #727272;
  }

  &:focus {
    outline: none;
  }

  &-large {
    font-size: 1.5em;
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

  &[disabled] {
    background-color: #c0c0c0;

    box-shadow: none;

    cursor: not-allowed;
  }
}

.label {
  display: inline-block;

  padding: 5px 10px;
  margin-right: 10px;

  vertical-align: middle;

  background-color: #cccccc;
  color: #333333;

  border-radius: 5px;

  &-off {
    background-color: #43c05e;
    color: #ffffff;
  }
  &-on {
    background-color: #c04343;
    color: #ffffff;
  }
}

/** Vue Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
