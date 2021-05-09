<template>
    <div>
        <Menu float />

        <v-img
        width="100%"
        height="100vh"
        :src="require('@/assets/frog.png')"
        >   
            <v-layout 
            column 
            fill-height 
            justify-center 
            align-center
            style="background-color: rgba(0,0,0,0.4)"
            >
                <div class="d-flex align-center">
                    <v-layout 
                    column 
                    align-end
                    class="pr-5"
                    style="border-right: 5px dotted white;"
                    >
                        <v-img 
                        :src="require('@/assets/logo.svg')"
                        class="d-block d-sm-none"
                        width="80px"
                        contain
                        ></v-img>
                        <v-img 
                        :src="require('@/assets/logo.svg')"
                        class="d-none d-sm-block d-md-none"
                        width="150px"
                        contain
                        ></v-img>
                        <v-img 
                        :src="require('@/assets/logo.svg')"
                        class="d-none d-md-block"
                        width="200px"
                        contain
                        ></v-img>
                        <span class="text-h5 text-sm-h3 text-md-h2 font-weight-bold">
                            <span class="font">Jesse Atter</span>
                        </span>
                    </v-layout>
                    <v-layout column class="pl-5">
                        <span class="text-h6 text-sm-h5 text-md-h4">
                            <span class="font">Modelling,</span>
                        </span>
                        <span class="text-h6 text-sm-h5 text-md-h4">
                            <span class="font">Texturing,</span>
                        </span>
                        <span class="text-h6 text-sm-h5 text-md-h4">
                            <span class="font">Animation.</span>
                        </span>
                    </v-layout>
                </div>
                <div class="d-flex align-center">
                    <v-btn icon href="https://www.linkedin.com/in/jesseatter/" target="__blank">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn icon href="https://www.artstation.com/jesseatter" target="__blank">
                        <v-icon>mdi-artstation</v-icon>
                    </v-btn>
                    <v-btn icon href="https://www.instagram.com/jesse_atter/" target="__blank">
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                </div>
                <div class="d-flex align-center justify-center mb-5" style="position: absolute; bottom: 0; width: 100%">
                    <v-btn icon href="#demo">
                        <v-icon size="28pt">mdi-chevron-down</v-icon>
                    </v-btn>
                </div>
            </v-layout>
        </v-img>

        <v-img
        id="demo"
        width="100%"
        height="100vh"
        >
            <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/sXxoB6n5PJc?controls=0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            ></iframe>
        </v-img>

    </div>
</template>