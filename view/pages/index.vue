<template lang="pug">
  section
    span 1
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 2
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 3
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 4
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 5
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span I/O-T Server Side
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 95
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 96
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 97
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 98
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 99
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
    span 100
    button(@click='toggleOn("1")') ON
    button(@click='toggleOff("1")') OFF
    br
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

<style lang="scss"></style>
