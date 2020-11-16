<template>
	<div>
		<v-container fluid class="pa-0 ma-0">
			<v-row no-gutters>
				<v-col class="ma-0 pa-0" style="height: 60vh; min-width: 200px">
					<iframe id="demo" :src="landing.video" 
					width="100%"
					height="101%"
					frameborder="0"></iframe>
				</v-col>
				<v-col class="ma-0" :style="{ 'padding': '100px' }">
					<v-layout row fill-height align-content-center class="ma-0">
						<div>
							<h1 class="white--text">{{landing.title}}</h1>
							<p class="white--text">{{landing.subtitle}}</p>
							<Buttons
							:data="landing.buttons"
							outlined
							large
							color="white"
							buttonClass="mr-2 mb-2"
							/>
						</div>
					</v-layout>
				</v-col>
			</v-row>
		</v-container>

		<v-container fluid class="pa-0 ma-0">
			<v-img 
			:src="require(`@/assets/${projects.background}`)" 
			style="background-attachment: fixed;" 
			class="align-center justify-center" 
			dark>
				<div 
				style="padding: 50px; background-color: rgba(0, 0, 0, 0.7); backdrop-filter: blur(10px); margin: 100px">
					<h3>{{projects.title}}</h3>
					<p>{{projects.subtitle}}</p>
					<Buttons
					:data="projects.buttons"
					outlined 
					color="white"
					/>
				</div>
			</v-img>
		</v-container>
		<v-container>
			<v-card flat dark color="transparent" class="d-flex flex-no-wrap justify-space-between">
				<div class="d-flex flex-column justify-center">
					<v-card-title class="headline">{{contact.title}}</v-card-title>
					<v-card-subtitle>{{contact.subtitle}}</v-card-subtitle>
					<v-card-actions>
						<Buttons 
						:data="contact.buttons"
						outlined
						color="white"
						buttonClass="ma-2"
						/>
					</v-card-actions>
				</div>
				<v-avatar
				class="ma-3"
				size="500"
				title
				style="border-radius: 5px;"
				min-width="0px"
				>
					<v-img contain :src="require(`../assets/${contact.logo}`)"></v-img>
				</v-avatar>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import Landing from '@/json/landing.json'
import Projects from '@/json/projects.json'
import Contact from '@/json/contact.json'

import Buttons from '@/components/Buttons'

export default {
	name: 'home',
	data: () => ({
		landing: Landing,
		projects: Projects, 
		contact: Contact
	}),
	methods: {
		copy() {

		}
	},
	components: {
		Buttons
	}
}
</script>
