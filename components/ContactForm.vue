<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" @submit.prevent="validate">
      <v-text-field
        v-model="name"
        :rules="[rules.required]"
        label="Name"
        :color="textFieldColor"
        placeholder="John Doe"
        persistent-placeholder
        validate-on-blur
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="Email"
        :color="textFieldColor"
        placeholder="johndoe@mail.com"
        persistent-placeholder
        validate-on-blur
        required
      ></v-text-field>

      <v-text-field
        v-model="subject"
        name="subject"
        :rules="[rules.required]"
        label="Subject"
        placeholder="Message Subject"
        persistent-placeholder
        :color="textFieldColor"
        validate-on-blur
        required
      ></v-text-field>

      <v-textarea
        v-model="message"
        name="message"
        label="Message"
        placeholder="Type your message here..."
        persistent-placeholder
        :color="textFieldColor"
        rows="2"
        hide-details
        validate-on-blur
        required
      ></v-textarea>

      <v-checkbox
        v-model="checkbox"
        class="aicor-checkbox"
        label="I wish to receive marketing emails from ELI including updates and product news (you can cancel your subscription anytime)."
        off-icon="mdi-checkbox-blank-circle-outline"
        on-icon="mdi-checkbox-marked-circle"
        hide-details
      ></v-checkbox>

      <button
        :disabled="!valid"
        color="success"
        class="classic color-white weight-600 full-width shadow-none"
      >
        Send
      </button>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: '',
    subject: '',
    message: '',
    checkbox: false,
    rules: {
      email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      required: (v) => !!v || 'Required',
    },
    textFieldColor: '#0a307c',
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        try {
          this.$mail.send({
            config: 'support',
            name: this.name,
            from: this.email,
            subject: this.subject,
            text: `Marketing updates: ${this.checkbox} <br /><br /> ${this.message}`,
          })
        } catch (error) {
          console.log('Email error', error)
        }
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style lang="scss" scoped>
.form-container {
  max-width: 570px;
  box-shadow: 0px 50px 70px rgba(0, 48, 92, 0.1);
  border-radius: 12px;
  padding: 50px 120px;
  background: white;

  form {
    > div {
      margin-bottom: 30px;
    }
  }

  .aicor-checkbox {
    margin: 50px 0;
  }
}

@media only screen and (max-width: 1199px) {
  .form-container {
    padding: 50px 60px;
  }
}

@media only screen and (max-width: 1023px) {
  .form-container {
    margin: 0 auto;
  }
}
</style>
