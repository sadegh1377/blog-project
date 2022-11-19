export const ArticlePreview = {
    data() {
        return {}
    },
    methods: {
        addToFavorite(article) {
            let token = localStorage.getItem("jwt");
            this.$http.post(`articles/${article.slug}/favorite`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        removeFromFavorite(article) {
            let token = localStorage.getItem("jwt");
            this.$http.delete(`articles/${article.slug}/favorite`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}