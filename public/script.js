new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [],
		cart: [],
		search:"",
		lastSearch:""
	},

	methods: {
		addToCart: function(product) {
			// this.total +=9.99;
			// console.log(product.id)
			this.total += product.price;
			var found = false;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === product.id) {
					this.cart[i].qty++;
					found = true;
				}
			}
			if (!found) {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1
				});
		}
		},
		inc:function(item){
			// console.log('inc')
			item.qty++;
			this.total +=item.price
		},
		dec:function(item){
			// console.log('dec')
			item.qty--;
			this.total -=item.price
			if(item.qty <= 0){   //هذه خاصة حتى ما أرجع لما بعد الصفر
				var i = this.cart.indexOf(item);//هذه خاصة حتى ما أرجع لما بعد الصفر
				this.cart.splice(i,1);//هذه خاصة حتى ما أرجع لما بعد الصفر
			}
		},
		onSubmit: function() {
			// console.log("search")
			var path = "/search?q=".concat(this.search);
			this.$http.get(path)
				.then(function(response) {
					// console.log(response);
					this.products = response.body;
					this.lastSearch = this.search;
				});
		}
	},
	filters: {
		currency: function(price) {
			return "$".concat(price.toFixed(2));
		}
	}
});



