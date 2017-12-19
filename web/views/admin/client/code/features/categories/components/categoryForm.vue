<template lang="pug">
    el-dialog(:title="title" :visible.sync="displayDialog" size="tiny")
        el-input(v-model="categoryName" placeholder="Please input category name")
        div
          <el-radio v-model="isActive" :label="true">Active</el-radio>
          <el-radio v-model="isActive" :label="false">Inactive</el-radio>
        
        div(class="buttonBox")
            el-button(type="primary" @click="save") OK
            el-button(@click="close") Cancel
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      _id: "",
      title: "",
      categoryName: "",
      displayDialog: false,
      isActive: true,
      isEdit: false,
      sortOrder: 1000
    };
  },
  methods: {
    ...mapActions("categories", ["createCategory","updateCategory"]),
    open(category) {
      this.isEdit = !!category;
      if (!this.isEdit) {
        this.title = "Create new category";
        this.categoryName = "";
        this.isActive = true;
      } else {
        this.title = "Edit category";
        this.isActive = category.isActive;
        this.categoryName = category.name;
        this._id = category._id;
      }
      this.displayDialog = true;
    },
    save() {
      const category = {
        _id: this._id,
        name: this.categoryName,
        parentId: "",
        isActive: this.isActive,
        sortOrder: this.sortOrder
      };
      if (!this.isEdit) {
        this.createCategory(category).then(c => {
          this.displayDialog = false;
        });
      } else {
        this.updateCategory(category).then(c => {
          this.displayDialog = false;
        });
      }
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