<template>
  <div class="about">
    <ul>
      <li v-for="data in users" :key="data.id"><router-link :to="{ name: 'user', params: {id: data.id} }">{{ data.name }}</router-link></li>
    </ul> <br>
    Total Data : {{usersCount}}
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.a.data.users
    },
    usersCount() {
      return this.$store.getters['a/usersCount']
    }
  },
  created() {
    this.$store.dispatch('a/getUser')
  }
}
</script>


