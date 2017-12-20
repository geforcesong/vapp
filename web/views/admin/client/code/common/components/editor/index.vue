<template lang="pug">
    textarea(id="textioarea" :style="styleObject") {{content}}
</template>

<script>
export default {
  data() {
    this.content = "";
  },
  props: ["styleObject", "initText"],
  created() {
    this.content = this.initText;
  },
  mounted() {
    this.loadEditor().then(editor => {});
  },
  methods: {
    loadEditor() {
      return new Promise(function(resolve, reject) {
        var api = document.createElement("script");
        api.id = "textio";
        api.src = "/plugins/textboxio-client/textboxio/textboxio.js";
        api.async = true;
        api.onload = function() {
          window.textEditiorIo = textboxio.replace("#textioarea");
          resolve(window.textEditiorIo);
        };
        document.body.appendChild(api);
      });
    }
  }
};
</script>
<style lang="scss">
#textioarea {
  margin: 10px 0;
  height: 200px;
  width: 100%;
}
</style>
