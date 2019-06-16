<template>
    <div>
        nama : {{user.name}} <br>
        email : {{user.email}} <br>
        website: {{user.website}} <br>
    <hr>
    <router-link to="/about">GO BACK</router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: []
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get('https://jsonplaceholder.typicode.com/users/'+this.$route.params.id)
            .then((response) => {
                this.user = response.data
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>
