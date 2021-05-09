<template>
    <div>
        <Menu logo />
        <v-container fluid>
            <v-layout wrap>
                <v-flex
                v-for="(item, index) of renders"
                :key="index"
                class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                >
                    <v-img
                    :src="require('@/assets/' + item)"
                    height="100%"
                    width="100%"
                    class="rounded"
                    @click="() => show(item)"
                    ></v-img>
                </v-flex>
            </v-layout>
        </v-container>
        <v-dialog
        v-model="inspect"
        v-if="inspect"
        fullscreen
        no-click-animation
        hide-overlay
        :transition="false"
        >
            <v-card color="black" flat @click="() => this.inspect = false" :ripple="false">
                <v-img
                width="100vw"
                height="100vh"
                contain
                :src="image"
                >
                    <v-btn icon class="ma-5">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-img>
            </v-card>
        </v-dialog>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Renders from '@/renders.json'

export default Vue.extend({
    data: () => ({ renders: Renders, inspect: false, image: '' }),
    methods: {
        show(image: string) {
            this.inspect = true
            this.image = require('@/assets/' + image)
        },
    }
})
</script>