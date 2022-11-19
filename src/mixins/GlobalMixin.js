export const GlobalMixin = {
    data() {
        return {
            isAuthenticated: false,
            user: {
                username: "",
                email: "",
                image: "",
            }
        }
    },
    methods: {},
    created() {
        let token = localStorage.getItem("jwt");
        if (token) {
            this.isAuthenticated = true
            this.$http.get("user", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                this.user.username = res.data.user.username
                this.user.email = res.data.user.email
                this.user.image = res.data.user.image

            }).catch((err) => {
                console.log(err)
            })
        }
    }
}