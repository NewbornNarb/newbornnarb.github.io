<template>
	<v-container fluid class="pa-0">
		<!-- <v-layout wrap>
			<v-flex
			v-for="x of pictures"
			:key="x.name"
			shrink
			grow
			style="max-width: 400px">
				<v-img
				:src="require(`@/assets/renders/${x.file}`)" 
				dark
				width="100%"
				><div class="pa-4">{{x.name}}</div></v-img>
			</v-flex>
		</v-layout> -->
		<v-row no-gutters>
			<v-col
			v-for="(x, index) of pictures"
			:key="`${index} ${x.name}`"
			cols="12"
			sm="6"
			md="6"
			lg="3"
			xl="2"
			>
				<v-img 
				:src="require(`@/assets/renders/${x.file}`)" 
				dark
				height="100%"
				@click="click(x.file)"
				@mouseenter="enter(x)"
				@mouseleave="leave(x)"
				>
					<div class="pa-4">
						<v-icon v-if="x === hover">mdi-magnify</v-icon>
						{{x.name}}
					</div>
				</v-img>
			</v-col>
		</v-row>
		<v-dialog
		v-if="dialog"
		v-model="dialog"
		persistent
		width="100%"
		>
			<v-card height="100%" width="100%" tile class="rounded-0" color="transparent">
				<v-btn 
				fixed 
				dark 
				text 
				class="pa-5 ma-5" 
				tile 
				@click="dialog = false" 
				style="z-index: 10" 
				width="80px"><v-icon>mdi-close</v-icon></v-btn>
				<v-img
				:src="require(`@/assets/renders/${image}`)"
				width="100%"
				height="100%"
				class="rounded-0"
				>
				</v-img>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import Data from '@/json/renders.json'

export default {
	name: 'about',
	data: () => ({
		dialog: false,
		image: '',
		hover: {}
	}),
	computed: {
		pictures() {
			const result = []

			Data.forEach(x => result.push(x))

			return result
		}
	},
	methods: {
		click(image) {
			this.dialog = true 
			this.image = image
		},
		enter(image) {
			this.hover = image
		},
		leave(image) {
			this.hover = {}
		}
	}
}
</script>