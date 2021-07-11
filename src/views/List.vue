<template>
  <h2>List of notes</h2>
  <hr/>
  <div
    v-for="note in notes"
    :key="note.id"
    :to="`/note/${note.id}`"
  >
    <h2>{{ note.title }}</h2>
    <h3>#{{ note.id }}</h3>

    <ul>
      <li
        v-for="(todo, index) in note.todos"
        :key="index"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
      </li>
    </ul>
    <button @click="$router.push(`/note/${note.id}`)">Go to note</button>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    notes () {
      return this.$store.state.notes
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
