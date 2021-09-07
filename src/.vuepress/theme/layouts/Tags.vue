<template>
    <div>
		<h1>タグ一覧</h1>
        <p v-for="tag in $frontmatterKey.list">
        <router-link :to="tag.path">{{ tag.name }}</router-link>
        </p>
    </div>
</template>
