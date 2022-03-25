<template>
  <div class="form-container">
    <div class="card login-form">
      <div class="card-body">
        <h3 class="card-title text-center">Book Cab</h3>
        <div class="card-text">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="name">Threshold</label>
              <input
                v-model="formController.threshold"
                type="=number"
                class="form-control form-control-sm"
                id="threshold"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Book
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
  name: "book",
  data() {
    return {
      formController: {
        threshold: 0,
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/bookcab", {
          threshold: this.formController.threshold,
        })
        .then((res) => {
          alert("booked");
        })
        .catch((err) => {
          alert("failed");
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