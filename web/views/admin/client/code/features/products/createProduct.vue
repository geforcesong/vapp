<template lang="pug">
    el-container
        el-header
                h1 {{title}}
        el-main
            el-row
                el-col(:span="24")
                    el-input(v-model="productName" placeholder="Please input product name")
                    el-select(v-model="productCategories",multiple,placeholder="Please select categories" value-key="_id")
                        el-option(v-for="item in categoryList" :key="item._id" :label="item.name" :value="item")
                    div(style="margin:15px 0") Detail Description:
                    textIo(:styleObject="{'height':'600px'}" :initText="contentHTML" @editorChanged="updateEditorContent")
                    br
                    div
                        span(style="padding:5px;") Is Active:
                        el-switch(v-model="isActive" active-color="#13ce66" inactive-color="#ff4949")
                    br
                    br
                    el-button(type="primary" @click="save") Save
                    el-button(@click="cancel") Cancel
</template>
<script>
import textIo from "../../common/components/editor";
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("categories", ["loadCategory"]),
    ...mapActions("products", [
      "createProduct",
      "loadProductById",
      "updateProduct"
    ]),
    cancel() {
      this.$router.push("/admin/products/");
    },
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
        _id: this.editingId || this._id,
        name: this.productName,
        categories: selectedCategories,
        isActive: this.isActive,
        contentHTML: this.contentHTML
      };

      if (this.editingId) {
        this.updateProduct(product).then(p => {
          this.cancel();
        });
      } else {
        this.createProduct(product).then(p => {
          this.cancel();
        });
      }
    },
    loadForEdit(id) {
      if (!id) {
        return;
      }
      this.loadProductById(id).then(ret => {
        this.contentHTML = ret.contentHTML;
        this.productName = ret.name;
        this.productCategories = ret.categories;
        this.isActive = ret.isActive;
      });
    },
    clearInput() {
      this.contentHTML = "";
      this.productName = "";
      this.productCategories = [];
      this.isActive = true;
    }
  },
  computed: {
    ...mapGetters("categories", ["categoryList"])
  },
  data() {
    return {
      title: "Create new product",
      contentHTML: "",
      productName: "",
      productCategories: [],
      isActive: true,
      editingId: "" // in editing mode if it has values
    };
  },
  components: {
    textIo
  },
  created() {
    this.clearInput();
    this.loadCategory();
    this.editingId = this.$route.params.id;
    if (this.editingId) {
      this.title = "Editing product";
      this.loadForEdit(this.editingId);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-select {
  margin-top: 15px;
  width: 350px;
}
</style>

