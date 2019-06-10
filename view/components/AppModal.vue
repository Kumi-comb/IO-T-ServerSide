<template lang="pug">
  transition(name='fade')
    .modalWrap(v-if='modalData')
      .modal
        .modal_header {{ modalData.title }}
        .modal_content {{ modalData.content }}
        .modal_footer
          button.btn(@click='clearData()') OK
</template>

<script>
export default {
  name: "AppModal",
  props: { modalData: Object },
  mounted() {
    console.log(this.modal);
  },
  data() {
    return {
      displayData: this.modalData
    };
  },
  methods: {
    clearData() {
      this.displayData = null;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
