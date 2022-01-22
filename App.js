const app = Vue.createApp({
    data() {
        return {
            input: "",
            todos: [],
        }
    },
    async mounted() {
        const lcData = await localStorage.getItem("todoList")
        if (lcData) {
            this.todos = JSON.parse(lcData)
        }
    },
    methods: {
        add() {
            if(this.input !== "") {
                this.todos.push({
                    checked: false, 
                    name: this.input, 
                    сomp: "activeTask" })
            } else {
                return
            }
            this.input = ""
            console.log(this.todos)
            localStorage.setItem("todoList", JSON.stringify(this.todos));
        },
        Done(i) {
            if(this.todos[i].checked === false) {
                this.todos[i].checked = true,
                this.todos[i].comp = "doneTask"
                localStorage.setItem("todoList", JSON.stringify(this.todos));
            } else {
                this.todos[i].checked = false,
                this.todos[i].comp = "activeTask"
                localStorage.setItem("todoList", JSON.stringify(this.todos));
            }
        },
        Del(i) {
            this.todos.splice(i, 1)
            localStorage.setItem("todoList", JSON.stringify(this.todos));
        }
    },
})

app.mount("#app")  

console.log("Vue is work")