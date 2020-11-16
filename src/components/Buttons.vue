<template>
    <div>
        <v-btn
        v-for="(x, index) of data"
        :key="index"
        :to="x.link !== 'copy' && !x.link.includes('http') ? x.link : undefined"
        :href="x.link.includes('http') ? x.link : null"
        @click="x.link === 'copy' ? copy(x.title) : ''"
        :target="x.newpage ? '_blank' : ''"
        :outlined="!x.text ? outlined : false"
        :text="x.text"
        :small="small"
        :large="large"
        :color="color"
        :class="buttonClass"
        >
            <v-icon v-if="x.icon" class="mr-2">{{`mdi-${x.icon}`}}</v-icon>
            {{x.title}}
        </v-btn>
        <v-snackbar
        v-model="snackbar"
        timeout="2000"
        >
            {{message}}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data: () => ({
        snackbar: false,
        message: ''
    }),
    methods: {
        copy(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.snackbar = true 
                this.message = 'Copied to clipboard.'
            }).catch(error => {
                this.snackbar = true 
                this.message = 'No permission to copy to clipboard.'
            })
        }
    },
    props: {
        data: Array,
        large: Boolean,
        small: Boolean,
        outlined: Boolean,
        color: String,
        buttonClass: String
    }
}
</script>