<template lang="pug">
.contact
  v-form.contact__form#test(
    ref="form"
    v-model="valid"
    action="https://formspree.io/helene.andre.06@gmail.com"
    method="post"
    :lazy-validation="lazy")

    h1 Contact

    v-text-field(
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required)

    v-text-field(
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required)

    v-textarea(
      v-model="message"
      :counter="500"
      :rules="messageRules"
      label="Message"
      required)

    v-checkbox(
      v-model="checkbox"
      :rules="[v => !!v || 'You must check to continue!']"
      label="Are you a robot?"
      required)

    v-btn(
      :disabled="!valid"
      color="blue"
      @click="validate")
      | Validate

    v-btn(
      color="orange"
      @click="reset")
      | Reset Form

</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 500) || 'Message must be less than 500 characters',
    ],
    select: null,
    checkbox: false,
    lazy: false,
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        // this.snackbar = true
        console.log('do something')
        test.submit()
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="scss">
.contact {
  background: url('../assets/images/contact-background.jpg');
  background-size: 100%;
  background-position: center;
  height: 90vh;

  h1 {
    text-align: center;
    color: #000;
  }

  &__form {
    background-color: rgba(#fff, 0.9);
    width: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
  }
}
</style>
