<template>
    <div>
        <v-app-bar
        dark 
        flat
        fixed
        height="60px"
        >
            <v-toolbar-title>
                <v-img 
                class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                :src="require('../assets/logo.svg')"
                max-width="80px"
                max-height="50px"
                contian></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="ml-3">
                <v-btn
                v-for="(x, index) of data.links"
                :key="`${index} ${x.title}`"
                :to="!x.link.includes('.pdf') ? x.link : null"
                :href="x.link.includes('.pdf') ? x.link : null"
                :target="x.newpage ? '_blank' : ''"
                dark 
                text
                class="mx-1"
                active-class="black"
                >{{x.title}}</v-btn>
                <v-divider vertical class="mx-4 d-none d-sm-none d-md-block"></v-divider>
                <v-btn
                v-for="(x, index) of data.social"
                :key="`${index} ${x.title}`"
                :target="x.newpage ? '_blank' : ''"
                :href="x.link"
                icon 
                dark 
                text 
                class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
                ><v-icon>{{`mdi-${x.icon}`}}</v-icon></v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <div style="height: 60px"></div>
    </div>
</template>

<script>
import Data from '@/json/navbar.json'

export default {
    data: () => ({
        drawer: false,
        data: Data
    })
}
</script>