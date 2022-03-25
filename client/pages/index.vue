<template>
  <div class="form-container">
    <div class="card login-form">
      <div class="card-body">
        <h3 class="card-title text-center">Register</h3>
        <div class="card-text">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                v-model="formController.name"
                type="text"
                class="form-control form-control-sm"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="formController.email"
                type="email"
                class="form-control form-control-sm"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="email">Password</label>
              <input
                v-model="formController.password"
                type="Password"
                class="form-control form-control-sm"
                id="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      formController: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios.post("http://localhost:3000/register", {
          user:this.formController
        })
        .then((res) => {
         this.$router.push("/book")
        })
        .catch((err) => {
          console.log("failed");
        });
    },
  },
};
</script>

<style>
.form-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

form {
  padding-top: 10px;
  font-size: 14px;
  margin-top: 30px;
}

.card-title {
  font-weight: 300;
}

.btn {
  font-size: 14px;
  margin-top: 20px;
}

.login-form {
  width: 330px;
  margin: 20px;
}

.sign-up {
  text-align: center;
  padding: 20px 0 0;
}

.alert {
  margin-bottom: -30px;
  font-size: 13px;
  margin-top: 20px;
}
</style>
