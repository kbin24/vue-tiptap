<template>
    <el-button @click="getAttr">test</el-button>
    <div class="editor" v-if="editor" :style="{ width }">
        <MenuBar class="editor-header" :editor="editor"></MenuBar>
        <FloatingMenuVue :editor="editor"></FloatingMenuVue>
        <BubbleMenuVue :editor="editor"></BubbleMenuVue>
        <editor-content class="editor-content" :editor="editor"></editor-content>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar.vue';
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Placeholder from '../extensions/placeholder'
import CommandButton from './MenuCommands/CommandButton.vue';
import FloatingMenuVue from './FloatingMenu.vue';
import BubbleMenuVue from './BubbleMenu.vue';
import VueComponent from '../components/InteractiveNode/Extensions'
import DraggableItem from './DraggableItem/DraggableItem';
import Paragraph from '@tiptap/extension-paragraph';
import Image from '@tiptap/extension-image'
import Heading from '@tiptap/extension-heading';
const CustomTableCell = TableCell.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            // 添加新的属性
            backgroundColor: {
                default: null,
                parseHTML: (element) => element.getAttribute('data-background-color'),
                renderHTML: (attributes) => ({
                    'data-background-color': attributes.backgroundColor,
                    style: `background-color: ${attributes.backgroundColor}`
                })
            }
        }
    }

})



export default defineComponent({
    components: {
        EditorContent,
        MenuBar,
        CommandButton,
        FloatingMenuVue,
        BubbleMenuVue
    },
    props: {
        width: {
            type: String,
            default: '800px'
        },
        html: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const editor = useEditor({
            content: props.html,
            // content: `
            //     <div data-type="draggable-item">
            //         <p>Follow by a fancy draggable item</p>
            //     </div>
            //     <h1 data-id="123">test</h1>
            // `,
            extensions: [
                StarterKit,
                Image,
                Table.configure({
                    resizable: true
                }),
                TableRow,
                TableHeader,
                CustomTableCell,
                Placeholder,
                VueComponent,
                DraggableItem,
                Paragraph.configure({
                    draggable: true
                })
            ],
            editorProps: {
                attributes: {
                    class: 'hover-item',
                },
            },
            onUpdate: (data) => {
                console.log(data)
                // console.log(editor.value.getHTML())
                console.log(editor.value.getJSON())
                // emit('update:html', editor.value.getHTML())
                
            }
        })

        const getAttr = ()=>{
            // console.log(editor.getAttributes('h2'))
        }
        console.log('123', editor)
        return {
            editor,
            getAttr
        }
    }

})
</script>

<style lang="scss">
.editor {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    max-height: 100%;
    color: #0d0d0d;
    background-color: #fff;
    // border: 3px solid #0d0d0d;
    border-radius: .75rem;

    &-header {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        flex-wrap: wrap;
        padding: .25rem;
        border-bottom: 3px solid #0d0d0d;
    }

    &-content {
        padding: .7rem .5rem;
        flex: 1 1 auto;
        // overflow-x: hidden;
        // overflow-y: auto;
        // -webkit-overflow-scrolling: touch;
    }
}


/* 基本编辑器样式 */
.ProseMirror {
    height: 100%;

    &:focus {
        outline: none;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, .1);
        color: #616161;
    }

    pre {
        background: #0d0d0d;
        color: #fff;
        font-family: 'JetBrainsMono', monospace;
        padding: .75rem 1rem;
        border-radius: .5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: .8rem;
        }
    }

    mark {
        background-color: #faf594;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    hr {
        margin: 1rem 0;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0d0d0d, .1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0d0d0d, .1);
        margin: 2rem 0;
    }

    ul[data-type="taskList"] {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;

            >label {
                flex: 0 0 auto;
                margin-right: .5rem;
                user-select: none;
            }

            >div {
                flex: 1 1 auto;
            }
        }
    }

    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden;

        td,
        th {
            min-width: 1em;
            border: 2px solid #ced4da;
            padding: 3px 5px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            >* {
                margin-bottom: 0;
            }
        }

        th {
            font-weight: bold;
            text-align: left;
            background-color: #f1f3f5;
        }

        .selectedCell:after {
            z-index: 2;
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(200, 200, 255, 0.4);
            pointer-events: none;
        }

        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: -2px;
            width: 4px;
            background-color: #adf;
            pointer-events: none;
        }

        p {
            margin: 0;
        }

    }
}

/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}

.ProseMirror p.is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}

.ProseMirror {

    h2.is-empty::before,
    h1.is-empty::before {
        content: attr(data-placeholder);
        float: left;
        color: #adb5bd;
        pointer-events: none;
        height: 0;
    }
}

// .ProseMirror h1.is-empty::before {
//     content: attr(data-placeholder);
//     float: left;
//     color: #adb5bd;
//     pointer-events: none;
//     height: 0;
// }



.tableWrapper {
    padding: 1rem 0;
    overflow-x: auto;
}

.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
}
</style>