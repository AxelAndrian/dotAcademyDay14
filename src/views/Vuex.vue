<template>
    <div>
        <ul>
           <li v-for="name in names" :key="name.id">{{ name.name }}</li> 
        </ul>
        <span>{{ counter }}</span> <br>
        <button @click="increments">Click Me!</button>
    </div>
</template>

<script>
export default {
    computed: {
        names() {
            return this.$store.state.a.data.name
        },
        counter() {
            return this.$store.state.a.data.count
        }
    },
    methods: {
        increments() {
            this.$store.commit('a/increment')
        }
    }
}
</script>
