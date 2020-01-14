new Vue({
	el: "#app",
	data:{
		total: 0,
		products:[
			{title:"product 1",id:1,price:9.99},
			{title:"product 2",id:2,price:9.99},
			{title:"product 3",id:3,price:9.99}
		]
	},
	cart:[

	],
	methods: {
		addToCart:function(product){
			// this.total +=9.99;
			// console.log(product.id)
			this.total +=product.price;
			this.cart.push(product);

		}
	},
})