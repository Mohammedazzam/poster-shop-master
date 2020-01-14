new Vue({
	el: "#app",
	data:{
		total: 0,
		products:[
			{title:"product 1", id:1},
			{title:"product 2",id:2},
			{title:"product 3", id:3}
		]
	},
	methods: {
		addToCart:function(){
			this.total +=9.99;
		}
	},
})