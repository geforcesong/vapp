<template lang="pug">
    el-container
        categoryForm(ref="categoryForm")
        el-header
            h1 Categories
        el-main
            el-row
                el-col(:span="24")
                    el-button(type="primary", @click="createCategory") Create Category
</template>
<script>
import categoryForm from "./components/categoryForm";

export default {
  methods:{
      createCategory(){
          this.$refs.categoryForm.open();
      }
  },
  components:{
      categoryForm
  }
}
</script>

<style lang="scss" scoped>
    .el-container{
        margin-left: 10px;
    }
    .el-header{
        padding: 0px;
        line-height: 60px;
    }
</style>