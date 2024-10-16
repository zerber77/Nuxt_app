<template>
  <div>
    <h1>Users page!</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "users"
}
</script>

<style scoped>

</style>