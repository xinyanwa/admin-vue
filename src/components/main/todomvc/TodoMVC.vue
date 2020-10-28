<template>
  <div class="todo-content">
    <div class="todo-head">
      <h4>TODOMVC </h4>
      <el-input ref="closeTodo" v-model="todo" clearable prefix-icon="el-icon-arrow-down" placeholder="今天要做点什么呢"
                @keydown.enter.native="addTodo"/>
    </div>
    <div class="todo-main">
      <ul>
        <li v-for="(item,index) in todoList" :key="index" @mousemove="closeShow(index)" @mouseleave="closeHidden">
          <el-switch
              inactive-color="#13ce66"
              active-color="#DCDFE6"
              v-model=item.Completed
              @change="changeCompleted(index)"
              class="switch"
          />
          <div class="title">
            <input :value="item.title" class="title-input" disabled="disabled"
                   :class="item.Completed ? 'title-delete':''"/>
          </div>
          <div class="close-title" v-show="active === index ? 'showIcon':''" @click="deleteTodo(index)">
            <i class="el-icon-close"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="todo-foot">
      <div class="item-index">
        <strong>{{ itemIndex }}</strong>
        <span>items left</span>
      </div>
      <div class="item-filter">
        <ul>
          <li style="border: 1px solid #e6e6e6;">
            All
          </li>
          <li>
            Active
          </li>
          <li>
            Completed
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoMVC",
  data() {
    return {
      todo: '',
      todoList: [],
      active: -1,
      showIcon: true
    }
  },
  computed: {
    itemIndex() {
      let todoArr = this.todoList
      let items = 0
      for (let i = 0; i < todoArr.length; i++) {
        if (todoArr[i].Completed === false) {
          items++
        }
      }
      return items
    }
  },
  methods: {
    addTodo() {
      if (this.todo === '') {
        return;
      } else {
        this.todoList = this.todoList.concat({
          title: this.todo,
          Completed: false
        })
      }
      this.todo = ''
      window.localStorage.setItem('content', JSON.stringify(this.todoList))
    },
    closeShow(index) {
      this.active = index
    },
    closeHidden() {
      this.active = -1
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1)
      window.localStorage.setItem("content", JSON.stringify(this.todoList))
    },
    changeCompleted(index) {
      this.todoList.map(()=>{
        let _todoList = JSON.parse(localStorage.getItem('content'))
        _todoList[index].Completed = !_todoList[index].Completed
        this.todoList = _todoList
      })
      window.localStorage.setItem("content", JSON.stringify(this.todoList))
      // console.log(this.todoList)
    },
  },
  created() {
    if (!localStorage.getItem('content')) {
      window.localStorage.setItem('content', JSON.stringify([{"title": "陶狗狗", "Completed": false}, {
        "title": "我喜欢你",
        "Completed": false
      }, {"title": "我要给你生猴子", "Completed": true}, {"title": "你不配", "Completed": false}, {
        "title": "他不配",
        "Completed": false
      }]))
    }
    this.todoList = JSON.parse(localStorage.getItem('content'))
    // console.log(this.todoList)
  }
}

</script>

<style lang="scss" scoped>
.todo-content {
  background: #ffffff;
  margin-top: 40px;

  .todo-head {
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .todo-main {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        padding: 10px 0px;
        border-bottom: 1px solid #ededed;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .switch {
          margin-left: 20px;
          flex: 1;
        }

        .title {
          width: 50%;
          flex: 6;
          margin-left: 20px;

          .title-input {
            width: 80%;
            border: none;
            color: #4d4d4d;
            font-size: 16px;
            font-weight: 300;
            background: #fff;
          }
        }

        .close-title {
          flex: 1;
          display: flex;
          align-items: center;
          margin-right: 20px;
          color: #cc9a9a;
        }
      }
    }
  }

  .todo-foot {
    display: flex;
    align-items: center;
    color: #777;
    font-weight: 400;
    font-size: 12px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);

    .item-index {
      margin-left: 5px;
      margin-right: 10px;
      padding: 3px 5px;

      span {
        margin-left: 3px;
      }
    }

    .item-filter {
      ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;

        li {
          margin-left: 15px;
          padding: 3px 5px;
        }
      }
    }
  }
}

.title-delete {
  color: #d9d9d9 !important;
  text-decoration: line-through;
  transition: 0.5s;
}

</style>
