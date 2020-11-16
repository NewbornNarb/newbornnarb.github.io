<template>
    <div>
        <v-app-bar
        dark 
        flat
        fixed
        height="100px"
        >
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <v-img 
                :src="require('../assets/logo.svg')"
                max-width="80px"
                max-height="50px"
                contian></v-img>
            </v-toolbar-title>
            <v-toolbar-items>
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
                ><v-icon>{{`mdi-${x.icon}`}}</v-icon></v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
        </v-app-bar>
        <div style="height: 95px"></div>
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