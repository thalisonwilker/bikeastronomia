<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Set dark mode as default for the space theme
$q.dark.set(true);

defineOptions({
  name: 'App'
});
</script>
