<template lang="pug">
    el-container
        el-header
                h1 Create new product
        el-main
            el-row
                el-col(:span="24")
                    el-input(v-model="productName" placeholder="Please input product name")
                    el-select(v-model="productCategories",multiple,placeholder="Please select categories" value-key="_id")
                        el-option(v-for="item in categoryList" :key="item._id" :label="item.name" :value="item")
                    div(style="margin:15px 0") Detail Description:
                    textIo(:styleObject="{'height':'600px'}" :initText="contentHTML" @editorChanged="updateEditorContent")
                    br
                    br
                    el-button(type="primary" @click="save") Save
</template>
<script>
import textIo from "../../common/components/editor";
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("categories", ["loadCategory"]),
    ...mapActions("products", ["createProduct"]),
    updateEditorContent(content) {
      this.contentHTML = content;
    },
    save() {
      let selectedCategories = [];
      if (this.productCategories && this.productCategories.length) {
        this.productCategories.forEach(ele => {
          const picked = (({ _id, name }) => ({ _id, name }))(ele);
          selectedCategories.push(picked);
        });
      }
      const product = {
        _id: this._id,
        name: this.productName,
        categories: selectedCategories,
        isActive: this.isActive,
        contentHTML: this.contentHTML
      };
      this.createProduct(product).then(p => {
        console.log("success");
      });
    }
  },
  computed: {
    ...mapGetters("categories", ["categoryList"])
  },
  data() {
    return {
      contentHTML: "",
      productName: "",
      productCategories: []
    };
  },
  components: {
    textIo
  },
  created() {
    this.loadCategory();
  }
};
</script>

<style lang="scss" scoped>
.el-select {
  margin-top: 15px;
  width: 350px;
}
</style>

