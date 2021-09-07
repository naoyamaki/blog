<template>
    <div>
    <h1>カテゴリー一覧</h1>
        <p v-for="cat in $frontmatterKey.list">
        <router-link :to="cat.path">{{ cat.name }}</router-link>
        </p>
    </div>
</template>
