<template lang="pug">
    el-dialog(:title="title" :visible.sync="displayDialog" size="tiny")
        el-input(v-model="categoryName" placeholder="Please input category name")
        
        div(class="buttonBox")
            el-button(type="primary" @click="save") OK
            el-button(@click="close") Cancel
</template>

<script>
export default {
  data() {
    return {
      title: "",
      categoryName: "",
      displayDialog: false
    };
  },
  methods: {
    open() {
      this.isEdit = false;
      this.title = "Create new category";
      this.displayDialog = true;
    },
    save() {},
    close() {
        this.displayDialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  margin-bottom: 10px;
}
.buttonBox {
  text-align: right;
}
</style>