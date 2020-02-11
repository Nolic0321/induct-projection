<style scoped>
.card {
	border: solid 1px black;
	background-color: aliceblue;
	display: inline-block;
	flex-basis: content;
	margin: 2px;
	padding: 2px;
	position: relative;
}
</style>

<template>
	<div class="card" v-draggable="draggableValue">
		Name: {{ associate.name }}
		<br />
		Login: {{ associate.login }}
		<br />
		Workdays: {{ associate.workdays }}
	</div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive';
export default {
	name: 'card',
	props: ['associate'],
	directives: {
		Draggable
	},

	data() {
		return {
			draggableValue: {
				handle: undefined,
				onDragEnd: this.onDragEnd
			}
		};
	},
	mounted: function() {
		this.$store.dispatch('addCard', this);
	},
	methods: {
		onDragEnd: function(positionDiff, absolutePosition, event) {
			var validDrop = false;
			var elements = document.elementsFromPoint(event.clientX, event.clientY);
			for (var x = 0; x < elements.length; x++) {
				var element = elements[x];
				if (element.classList.contains('placeable')) {
					element.appendChild(this.$el);
					validDrop = true;
					console.log('Dropped on ' + element.localName);
				}
			}
			this.$el.style.position = 'inherit';
			if (!validDrop) {
				this.draggableValue.position = absolutePosition - positionDiff;
			}
		}
	}
};
</script>
