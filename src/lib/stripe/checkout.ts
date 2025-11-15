	async function stripeCheckout(priceId: string) {
		const response = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				priceId,
				mode: 'payment'
			})
		});

		const { url } = await response.json();

		console.log(url)

		if (url) {
			window.location.href = url;
		} else {
			console.error('No checkout URL returned.');
		}
	}

export { stripeCheckout }