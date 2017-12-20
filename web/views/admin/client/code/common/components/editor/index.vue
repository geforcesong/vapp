<template lang="pug">
    textarea(id="textioarea" :style="styleObject") {{initText}}
</template>

<script>
import editorBus from "../../buses/editorBus";

export default {
  data() {
    return {
      content: ""
    };
  },
  props: ["styleObject", "initText"],
  mounted() {
    this.loadEditor().then(editor => {
      editor.events.change.addListener(()=> {
        editorBus.$emit("editor-changed", editor.content.get());
      });
    });
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
