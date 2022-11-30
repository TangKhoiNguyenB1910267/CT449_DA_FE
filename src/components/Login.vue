<template>
    <div class="card mb-3">
        <h4>SIGN IN</h4>
        <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-8" style="margin: 0 0 50px 50px;">
                <div class="card-body">

                    <Form @submit="SignIn" :validation-schema="userFormSchema">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <Field name="email" type="email" class="form-control" v-model="userLocal.email" />
                            <ErrorMessage name="email" class="error-feedback" />
                        </div>
                        <div class="form-group">
                            <label for="password">Mật Khẩu</label>
                            <Field name="password" type="password" class="form-control" v-model="userLocal.password" />
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Đăng Nhập</button>
                            <button type="button" class="ml-2 btn btn-danger" @click="SignUp">
                                Đăng Ký
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true }
    },
    data() {
        const userFormSchema = yup.object({
            email: yup
                .string()
                .required("E-mail phải có giá trị.")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(6, "Mật khẩu tối thiểu 6 ký tự.")
        });
        return {
            userLocal: this.user,
            userFormSchema,
        };
    },
    methods: {
        
        SignIn() {
            console.log(this.userLocal);
            this.$emit("submit:user", this.userLocal);
        },
        SignUp(){
            this.$router.push({ name: "register" });
        }
    },
};
</script>
<style scoped>
    h4 {
        margin-top: 10px;
        font-size: 30px;
    }
    .card.mb-3 {
        margin-top: 150px;
        width: 100%;
        padding: 30px;
    }
</style>