export const NewArticle = {
    data() {
        return {
            title: null,
            description: null,
            tag: null,
            body: null,
            tagsList: [],
            feedback: null,
            success: null
        }
    },
    methods: {
        addToTagsList(tag) {
            if (this.tag === null) {
                return
            }
            this.tagsList.push(tag)
            this.tag = null
        },
        removeFromTagList(index) {
            this.tagsList.splice(index, 1)
        },
        save() {
            let token = localStorage.getItem("jwt");
            if (this.title === null || this.title === "" ||
                this.description === null || this.description === ""
                || this.body === null || this.body === "") {
                this.feedback = "Please fill out the empty places"
                return
            }
            let data = {
                "article": {
                    title: this.title,
                    description: this.description,
                    body: this.body,
                    tagList: this.tagsList
                }
            }
            this.$http.post("articles", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    this.success = "Article published successfully "
                }
            }).catch((err) => {
                console.log(err)
            })
            this.title = null;
            this.description = null
            this.body = null;
            this.tagsList = null
            this.tag = null
            this.feedback = null;
        }
    }
}