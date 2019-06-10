<template lang="pug">
  section
    div(v-if='devices', v-for='(device, index) in devices')
      AppDeviceCard(:device='device')
</template>

<script>
import AppDeviceCard from "~/components/AppDeviceCard.vue";
import axios from "axios";

export default {
  components: { AppDeviceCard },
  data() {
    return {
      devices: null,
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
      const devicesList = await axios.get("/api/devices").catch(err => {
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
      console.log(devicesList);

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
    }
  }
};
</script>

<style lang="scss">
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
