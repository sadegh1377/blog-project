export const UserSettings = {
    data() {
        return {
            newName: "",
            newEmail: "",
            newImageUrl: "",
            oldName: "",
            oldEmail: "",
            oldImageUrl: "",
            password: "",
            confirmPassword: "",
            isDisable: true,
            feedback: null
        }
    },
    methods: {
        setOldNameAndEmail() {
            this.isDisable = false;
        },
        doneEditing() {
            this.isDisable = true;
        },
        save() {
            if (this.newName === null || this.newName === "" ||
                this.newEmail === null || this.newEmail === "" ||
                this.password === null || this.password === "" ||
                this.confirmPassword === null || this.confirmPassword === "") {
                this.feedback = "Please fill out the empty places"
            } else if (this.password.length < 5) {
                this.feedback = "Password must be at least 5 characters"
            } else {
                if (this.password === this.confirmPassword) {
                    let token = localStorage.getItem('jwt')
                    if (!token) {
                        return
                    }
                    let data = {
                        "user": {
                            email: this.newEmail,
                            username: this.newName,
                            bio: "",
                            image: this.newImageUrl,
                            password: this.password
                        }
                    }
                    this.$http.put("user", data, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }).then((res) => {
                        console.log(res)
                        let token = res.data.user.token;
                        console.log(token)
                        localStorage.removeItem('jwt')
                        localStorage.setItem("jwt", token)
                        this.feedback = "Profile settings changed successfully"
                    }).catch((err) => {
                        console.log(err)
                        this.feedback = err.response.data
                    })
                } else {
                    this.feedback = "The password is not the same"
                }
            }
        }
    }
}