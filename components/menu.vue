<template>
    <v-app-bar 
    color="transparent"
    flat
    :absolute="float"
    >   
        <v-toolbar-title v-if="logo">
            <router-link to="/">
                <v-img
                :src="require('@/assets/logo.svg')"
                width="80px"
                height="42px"
                contain
                ></v-img>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
            text
            to="/renders"
            >Renders</v-btn>
            <v-btn
            text
            href="/resume.pdf"
            target="__blank"
            >Resume</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        logo: Boolean,
        float: Boolean
    }
})
</script>