<script setup>
import { ref, onMounted } from "vue";
import CommonNavbar from "@/lib/CommonNavbar.vue";

const Editor = ref(null);
const TypeEditor = ref(null);
const config = ref();

onMounted(async () => {
  const { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } = await import("ckeditor5");
  const { Ckeditor } = await import("@ckeditor/ckeditor5-vue");
  Editor.value = Ckeditor;
  TypeEditor.value = ClassicEditor;
  const editorConfig = {
    toolbar: ["undo", "redo", "|", "bold", "italic"],
    plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
  };
  config.value = editorConfig;
});
</script>

<template>
  <CommonNavbar page="Form" path="CkEditor" />
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12 col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Form CkEditor</h4>
          </div>
          <div class="card-body custom-ekeditor">
            <div id="ckeditor">
              <Editor :editor="TypeEditor" :config="config" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
