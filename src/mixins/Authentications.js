export const Authentications = {
    data() {
        return {
            username: null,
            email: null,
            password: null,
            confirmPassword: null,
            feedback: null,
            visibility: "password"
        }
    },
    methods: {
        signIn() {
            if (this.email === null || this.email === "" ||
                this.password === null || this.password === "") {
                this.feedback = "Please fill out the empty places";
                return
            }
            this.feedback = null;
            let data = {
                "user": {
                    email: this.email,
                    password: this.password
                }
            }
            this.$http.post("users/login", data).then((res) => {
                console.log(res)
                let token = res.data.user.token;
                if (token) {
                    localStorage.setItem("jwt", token);
                    this.$router.push({name: "Home"});
                }
            }).then(() => {
                location.reload()
            }).catch((err) => {
                let error = err.response;
                if (error.status === 401) {
                    this.feedback = error.data.message;
                } else {
                    this.feedback = error.data.err.message;
                }
            })
        },
        signUp() {
            if (this.username === null || this.username === "" ||
                this.email === null || this.email === "" ||
                this.password === null || this.password === "" ||
                this.confirmPassword === null || this.confirmPassword === "") {
                this.feedback = "Please fill out the empty places"
                return
            }
            if (this.password.length < 5) {
                this.feedback = "Password must be at least 5 characters"
                return;
            }

            if (this.password === this.confirmPassword) {
                this.feedback = null;
                let data = {
                    "user": {
                        email: this.email,
                        password: this.password,
                        username: this.username
                    }
                }
                console.log(data)
                this.$http.post("users", data).then((res) => {
                    let token = res.data.user.token;
                    if (token) {
                        localStorage.setItem("jwt", token);
                        this.$router.push({name: "Home"})
                        location.reload()
                    } else {
                        this.feedback = "Something Went Wrong"
                    }
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                this.feedback = "The password is not the same"
            }
        },

        showPassword() {
            this.visibility = "text"
        },
        hidePassword() {
            this.visibility = "password"
        }
    }
}