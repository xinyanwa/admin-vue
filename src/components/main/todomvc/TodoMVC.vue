<template>
  <div class="todo-content">
    <div class="todo-head">
      <h4>TODOMVC </h4>
      <el-input ref="closeTodo" v-model="todo" clearable prefix-icon="el-icon-arrow-down" placeholder="今天要做点什么呢" @keydown.enter.native="addTodo"/>
    </div>
    <div class="todo-main">

    </div>
    <div class="todo-foot">
      <div class="item-index">
        <strong>2</strong>
        <span>items left</span>
      </div>
      <div class="item-filter">
        <ul>
          <li>
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
      todoList:[]
    }
  },
  methods:{
    addTodo(){
      if (this.todo == ''){
        return ;
      } else {
        this.todoList = this.todoList.concat({
          title: this.todo,
          Completed:false
        })
      }
      this.$refs.closeTodo.value = ''
      window.localStorage.setItem('content',JSON.stringify(this.todoList))
    }
  }
}

</script>

<style lang="scss" scoped>
.todo-content {
  background: #ffffff;
  margin-top: 40px;

  .todo-head {
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }

  .todo-main {
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
      border: 1px solid #e6e6e6;

      span {
        margin-left: 5px;
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
          border: 1px solid #e6e6e6;
        }
      }
    }
  }
}
</style>
