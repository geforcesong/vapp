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
                        el-table-column(prop="createdTime" label="createdTime" :formatter="formatDateTime")
</template>
<script>
import categoryForm from "./components/categoryForm";
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions("categories", ["updateCount"]),
    createCategory() {
      this.$refs.categoryForm.open();
      //return this.$store.commit('categories/increment');
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