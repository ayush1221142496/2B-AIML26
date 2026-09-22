class Product {
	constructor(productId, productName, price) {
		this.productId = productId;
		this.productName = productName;
		this.price = price;
	}

	getDiscountedPrice(discount) {
		return this.price - (this.price * discount) / 100;
	}

	display() {
		console.log(`Product: ${this.productName} (ID: ${this.productId})`);
		console.log(`Price: $${this.price.toFixed(2)}`);
	}

	static compareProducts(p1, p2) {
		const higherPricedProduct = p1.price >= p2.price ? p1 : p2;
		console.log(`Higher-priced product: ${higherPricedProduct.productName}`);
		return higherPricedProduct;
	}   
}

class Electronics extends Product {
	constructor(productId, productName, price, warranty) {
		super(productId, productName, price);
		this.warranty = warranty;
	}

	display() {
		super.display();
		console.log(`Warranty: ${this.warranty}`);
	}
}

const laptop = new Electronics("E101", "Laptop", 1200, "2 years");
const headphones = new Product("P202", "Headphones", 150);

laptop.display();
console.log(`Discounted price: $${laptop.getDiscountedPrice(10).toFixed(2)}`);
Product.compareProducts(laptop, headphones);
