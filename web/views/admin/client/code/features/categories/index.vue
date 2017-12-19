<template lang="pug">
    el-container
        categoryForm(ref="categoryForm")
        el-header
            h1 Categories{{count}}
        el-main
            el-row
                el-col(:span="24")
                    el-button(type="primary", @click="createCategory") Create Category
            el-row
                el-col(:span="24")
                    el-table(:data="categoryList" style="width: 100%")
                        el-table-column(prop="name" label="Name")
                        el-table-column(prop="isActive" label="IsActive")
                        el-table-column(prop="sortOrder" label="Order")
                        el-table-column(prop="createdTime" label="Created Time" :formatter="formatDateTime")
                        el-table-column
                          template(slot-scope="scope")
                              el-button(@click="editCategory(scope.row)" size="small" icon="el-icon-edit")
                              el-button(size="small" icon="el-icon-delete" @click="deleteRow(scope.row)")
</template>
<script>
import categoryForm from "./components/categoryForm";
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions("categories", ["updateCount", "loadCategory", "deleteCategory"]),
    createCategory() {
      this.$refs.categoryForm.open();
      //return this.$store.commit('categories/increment');
    },
    editCategory(category) {
      this.$refs.categoryForm.open(category);
      //return this.$store.commit('categories/increment');
    },
    deleteRow(category){
      this.$confirm(`Do you want to delete this category - ${category.name}?`, 'Confirmation', {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning'
        }).then(() => {
          this.deleteCategory(category);
        }).catch(() => {
        });
    },
    formatDateTime(row, column) {
      var d = new Date(row.createdTime);
      return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    }
  },
  computed: {
    ...mapGetters("categories", ["count", "categoryList"])
    //   count(){
    //       return this.$store.state.categories.count;
    //   }
  },
  components: {
    categoryForm
  },
  created() {
    this.loadCategory();
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  margin-left: 10px;
}
.el-header {
  padding: 0px;
  line-height: 60px;
}
</style>