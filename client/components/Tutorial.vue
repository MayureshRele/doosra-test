
<template>
  <div class="form">
    <div class="container">
      <div class="row">
        <div class="formContainer">
          <b-form @submit="registerUser">
            <div class="col-md-6">
              <b-form-input
                v-model="formController.name"
                type="text"
                placeholder="name"
              >
              </b-form-input>
            </div>
            <div class="col-md-6">
              <b-form-input
                v-model="formController.email"
                type="email"
                placeholder="email"
              >
              </b-form-input>
            </div>
            <div class="col-md-6">
              <b-form-input
                v-model="formController.password"
                type="password"
                placeholder="password"
              >
              </b-form-input>
            </div>
            <button class="btn-primary" type="submit">Login</button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      formController: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>
