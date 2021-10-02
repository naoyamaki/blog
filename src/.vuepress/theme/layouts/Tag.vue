<template>
    <div>
    <h2>{{ $route.meta.id }}タグの記事一覧</h2>
        <p v-for="post in $pagination.pages" v-bind:key="post">
        <router-link :to="post.path">{{ post.title }}</router-link>
        </p>
    </div>
</template>
