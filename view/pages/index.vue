<template lang="pug">
  section
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
</template>

<script>
import axios from "axios";
export default {
  methods: {
    toggleOn: deviceId => {
      axios.put(`/api/devices/${deviceId}/queue`, {
        type: "TOGGLE",
        value: "ON"
      });
    },
    toggleOff: deviceId => {
      axios.put(`/api/devices/${deviceId}/queue`, {
        type: "TOGGLE",
        value: "OFF"
      });
    }
  }
};
</script>

<style lang="scss">
</style>
