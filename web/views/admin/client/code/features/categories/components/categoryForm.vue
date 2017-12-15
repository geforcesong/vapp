<template lang="pug">
    el-dialog(:title="title" :visible.sync="displayDialog" size="tiny")
        el-input(v-model="categoryName" placeholder="Please input category name")
        
        div(class="buttonBox")
            el-button(type="primary" @click="save") OK
            el-button(@click="close") Cancel
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: "",
      categoryName: "",
      displayDialog: false
    };
  },
  methods: {
    ...mapActions('categories', ['createCategory']),
    open(category) {
      this.isEdit = !!category;
      if(!this.isEdit){
        this.title = "Create new category";
        this.categoryName = '';
      } else{
        this.categoryName = category.categoryName;
      }
      this.displayDialog = true;
    },
    save() {
      const category = {
        name: this.categoryName,
        parentId: '',
        isActive: true,
        sortOrder: 10000
      }
      this.createCategory(category).then((c)=>{
        this.displayDialog = false;
      });
    },
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