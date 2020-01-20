<template lang="pug">
  transition(name='fade')
    .modalWrap(v-if='modal.isDisplay')
      .modal
        .modal_header(:class='`modal_header-${ modal.level }`') {{ modal.title }}
        .modal_content {{ modal.content }}
        .modal_footer
          button.btn(@click='hideModal()') OK
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppModal",
  computed: {
    ...mapGetters("modal", { modal: "modal" })
  },
  methods: {
    ...mapActions("modal", { displayModal: "display", hideModal: "hide" })
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
  width: 90%;
  max-width: 500px;

  background-color: #ffffff;

  &_header {
    padding: 10px;

    background-color: #333333;
    color: #ffffff;

    border-radius: 5px;

    &-error {
      background-color: #b9182d;
    }

    &-success {
      background-color: #06aa37;
    }
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
