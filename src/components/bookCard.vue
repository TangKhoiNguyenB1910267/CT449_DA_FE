<script>
    export default {
        props: {
            book: { type: Object, required: true },
        },
        computed: {
            retriveSrc(){
                return this.book.linkImage;
            },
        }
    };
</script>
<template>
    <div>
        <div class="p-1">
            <img id="href" :src="retriveSrc" width="200" height="300">
        </div>
        <div class="p-1">
            <strong>Tên Sách: </strong>
            {{ book.name }}
        </div>
        <div class="p-1">
            <strong>Tác Giả: </strong>
            {{ book.author }}
        </div>
        <div class="p-1">
            <strong>Nội Dung: </strong>
            {{ book.content }}
        </div>
        <div class="p-1">
            <strong>Yêu Thích:&nbsp;</strong>
            <i v-if="book.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>