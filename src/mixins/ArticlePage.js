export const ArticlePage = {
    data() {
        return {
            article: {},
            username: "",
            profImage: "",
            body: "",
            comments: [],
            feedback: null
        }
    },
    methods: {
        addComment() {
            if (this.body === null ||
                this.body === "" ||
                this.body.match(/^ *$/) !== null) {
                this.feedback = "Comment could not be empty"
            } else {
                this.comments.push(
                    {
                        author: {username: this.user.username},
                        body: this.body,
                        createdAt: new Date(),
                    })
                let token = localStorage.getItem("jwt");
                let data = {
                    "comment": {
                        body: this.body
                    }
                }
                this.$http.post(`articles/${this.article.slug}/comments`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
                this.body = null;
                this.feedback = null;
            }
        }
    },
    created() {
        this.$http.get(`articles/${this.$route.params.slug}`).then((res) => {
            this.article = res.data.article
            this.username = res.data.article.author.username
            this.profImage = res.data.article.author.image

        }).catch((err) => {
            console.log(err)
        })
        this.$http.get(`articles/${this.$route.params.slug}/comments`).then((res) => {
            this.comments = res.data.comments
        }).catch((err) => {
            console.log(err)
        })
    },
}