export const HomePage = {
    data() {
        return {
            articlesArray: [],
            popularTags: [],
            numberOfPagination: 0,
            navName: 'Global Feed',
            loading: false,
            activePage: 1
        }
    },
    methods: {
        getArticlesWithoutOffset() {
            this.loading = true
            this.$http.get(`articles?limit=${10}`).then((res) => {
                this.articlesArray = res.data.articles
                this.setNumberOfPagination(res.data.articlesCount)
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err)
            })
        },
        getArticleByOffset(pageNumber) {
            this.activePage = pageNumber
            this.loading = true
            let offset = (pageNumber - 1) * 10
            this.$http.get(`articles?offset=${offset}`).then((res) => {
                this.articlesArray = []
                this.articlesArray = res.data.articles
                window.scrollTo(0, 0);
                this.loading = false
            }).catch((err) => {
                this.loading = false
                console.log(err)
            })
        },
        getArticleByTag(tag) {
            this.loading = true
            this.numberOfPagination = 0
            this.$http.get(`articles?limit=${10}&tag=${tag}`).then((res) => {
                this.articlesArray = []
                this.articlesArray = res.data.articles
                this.navName = '#' + tag
                this.setNumberOfPagination(res.data.articlesCount)
                this.loading = false
            }).catch((err) => {
                this.loading = false
                console.log(err)
            })
        },
        setNumberOfPagination(articlesCount) {
            if (articlesCount <= 10) {
                this.numberOfPagination = 0
                return
            }
            if (articlesCount % 10 === 0) {
                this.numberOfPagination = Number(articlesCount / 10)
            } else {
                this.numberOfPagination = Number((articlesCount / 10).toFixed(0)) + 1
            }
        },
        changeNav() {
            this.navName = 'Global Feed'
            this.numberOfPagination = 0
            this.getArticlesWithoutOffset()
        },
    },
    created() {
        this.getArticlesWithoutOffset()
        this.$http.get('tags').then((res) => {
            this.popularTags = res.data.tags
        }).catch(err => {
            console.log(err)
        })
    }
}