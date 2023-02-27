const features = [
	{
		title: "Summer is brighter with free treats.*",
    type: "small",
		image: "137-78735.jpg",
		description: "",
		button: "Join Starbucks® Rewards",
		colors: ["#1E3932", "#FFFFFF"],
	},

	{
		title: "Refresh on repeat",
    type: "normal",
		image: "137-79132.jpg",
		description:
			"Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit Lemonade Starbucks Refreshers® beverages are oh so chill.",
		button: "Learn more",
		colors: ["#FA91AA", "#1E3932"],
	},

  {
		title: "Long walks with pistachio",
    type: "normal",
		image: "137-82557.jpg",
		description:
			"Keep it cozy with a Pistachio Latte finished with a brown-buttery topping.",
		button: "Order now",
		colors: ["#F4C5A1", "#1E3932"],
	},

	{
		title: "A magical summer treat",
    type: "normal",
		image: "137-79134.jpg",
		description:
			"Our sweetly decorated Unicorn Cake Pop is back. Enjoy creamy vanilla cake with confetti sprinkles and white-chocolaty icing.",
		button: "Order now",
		colors: ["#AAC0BA", "#1E3932"],
	},

	{
		title: "Anytime protein",
    type: "normal",
		image: "137-79093.jpg",
		description:
			"The Impossible™ Breakfast Sandwich** will keep you going with a plant-based sausage patty, cage-free fried egg and Cheddar on a sesame ciabatta bun.",
		button: "Order now",
		colors: ["#9BF5B4", "#1E3932"],
	},

  {
		title: "Summer shake-up",
    type: "normal",
		image: "137-79133.jpg",
		description:
			"Enjoy a creamy nondairy twist with our Brown Sugar Oat or new Toasted Vanilla Oat Shaken Espresso.",
		button: "Order now",
		colors: ["#F06464", "#FFFFFF"],
	},

  {
		title: "New year, cool new brew",
    type: "normal",
		image: "137-82556.jpg",
		description:
			"Introducing Pistachio Cream Cold Brew—bold, smooth coffee topped with pistachio cream cold foam.",
		button: "Try it now",
		colors: ["#3D7170", "#FFFFFF"],
	},

  {
		title: "Wrap your day",
    type: "normal",
		image: "137-82558.jpg",
		description:
			"Savory ingredients come together in our Bacon, Sausage & Egg Wrap for a satisfying meal on the go.",
		button: "Order now",
		colors: ["#8B323E", "#FFFFFF"],
	},

	{
		title: "Did you know?",
    type: "small",
		image: "137-79156.jpg",
		description:
			"We offer braille and large print menus, and Aira visual interpreting services in all our stores - for a more accessible experience for our community.",
		button: "Learn more",
		colors: ["#1A3C34", "#FFFFFF"],
	},
];

addEventListener("load", () => {
	features.forEach(item => {
		let { title, type, image, description, button, colors } = item;

		let div = document.createElement("div");
		div.classList.add("features");
    if (type === 'small') div.classList.add("features-small");
		div.setAttribute("data-aos", "fade-up");
		document.querySelector(".features-box").appendChild(div);

		div.innerHTML = `
      <div class="description">
          <h2>${title}</h2>
          <button class="features__button">${button}</button>
      </div>
      <div class="photo">
        <img src="./media/${image}" alt="${title}">
      </div>
    `;

		// Add description
		if (description != "") {
			let p = document.createElement("p");
			p.textContent = description;
			div.children[0].querySelector("h2").insertAdjacentElement("afterend", p);
		}

		// Set CSS properties
		div.style.setProperty("--bg-features", colors[0]);
		div.style.setProperty("--text-features", colors[1]);
	});
});