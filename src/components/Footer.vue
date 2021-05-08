<template>
    <v-container>
        <v-divider color="white"></v-divider>
        <v-card dark flat class="py-5" color="transparent">
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-list color="transparent" dark>
                            <v-list-item>
                                <h3>Contact</h3>
                            </v-list-item>
                            <v-list-item>(587) 585-6581</v-list-item>
                            <v-list-item>j.atter66@gmail.com</v-list-item>
                            <v-list-item href="/resume.pdf" target="__blank">Resume</v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        <v-list color="transparent" dark>
                                <v-list-item>
                                    <h3>Social</h3>
                                </v-list-item>
                                <v-list-item href="https://www.linkedin.com/in/jesseatter/" target="__blank">Linkedin</v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        <v-list color="transparent" dark>
                            <v-list-item>
                                <h3>Links</h3>
                            </v-list-item>
                            <v-list-item href="/renders">Renders</v-list-item>
                            <v-list-item href="https://www.artstation.com/jesseatter" target="__blank">ArtStation</v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-card-text>
            <center>
                <small>Copyright {{new Date().getFullYear()}} © Jesse Atter. All rights reserved.</small>
            </center>
        </v-card>
    </v-container>
</template>