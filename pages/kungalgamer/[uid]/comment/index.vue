<script setup lang="ts">
import type { UserInfo } from '~/types/api/user'

defineProps<{
  user: UserInfo
}>()
</script>

<template>
  <KungalgamerList>
    <KungalgamerComment :uid="user.uid" />

    <KungalgamerEmpty v-if="!user.comment" />
  </KungalgamerList>
</template>
