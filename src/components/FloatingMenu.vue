<template>
    <FloatingMenu :editor="editor">
        <div class="floating-menu">
            <template v-for="(item, index) in Extensions">
                <CommandButtonVue v-bind="item" />
            </template>
        </div>
    </FloatingMenu>
</template>

<script setup>
import { FloatingMenu } from '@tiptap/vue-3'
import { reactive } from 'vue';
import CommandButtonVue from './MenuCommands/CommandButton.vue';


const props = defineProps({
    editor: Object
})

const Extensions = reactive([
    {
        icon: 'bold',
        title: 'Bold',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold')
    },
    {
        icon: 'italic',
        title: 'Italic',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic')
    },
    {
        icon: 'strikethrough',
        title: 'Strike',
        action: () => props.editor.chain().focus().toggleStrike().run(),
        isActive: () => props.editor.isActive('strike')
    },
    {
        icon: 'h-1',
        title: 'Heading 1',
        action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 1 })
    },
    {
        icon: 'h-2',
        title: 'Heading 2',
        action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 2 })
    }
])

</script>

<style>
.floating-menu {
    position: relative;
    left: -250px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid #dee0e3;
    box-shadow: 0px 4px 8px rgba(31, 35, 41, 0.1);
    padding: 10px;
}
</style>