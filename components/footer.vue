<template>
    <div class="d-flex align-center justify-center my-5" style="width: 100%">
        <v-btn icon href="https://www.linkedin.com/in/jesseatter/" target="__blank">
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://www.artstation.com/jesseatter" target="__blank">
            <v-icon>mdi-artstation</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com/jesse_atter/" target="__blank">
            <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <span class="ml-1 mr-2">|</span>
        <v-tooltip
        v-model="copied"
        top
        >
            <template v-slot:activator>
                <v-btn
                text
                @click="copy"
                >j.atter66@gmail.com</v-btn>
            </template>
            <span>Copied!</span>
        </v-tooltip>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({ copied: false }),
    methods: {
        copy() {
            navigator.clipboard.writeText('j.atter66@gmail.com')
            this.copied = true
            setTimeout(() => this.copied = false, 800)
        }
    }
})
</script>