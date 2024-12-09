import Image from "next/image";
export default function Pizza(){

  return (
    <div className="blogBackground">

    <div className="blogContainer">
      <h1 className="blogTitle">Pizza: A Slice of Heaven</h1>
      <img src="/pizza.png" alt="Pizza" className="blogImage" />
      <p className="blogContent">
        Pizza is a beloved dish worldwide, originating from Italy. It features a base of dough topped with sauce, cheese, and a variety of toppings.
        Whether you prefer classic Margherita or loaded with toppings, there's a pizza for everyone!
      </p>
      <h2>Ingredients:</h2>
      <ul>
        <li>2 cups all-purpose flour</li>
        <li>1 packet (7g) instant yeast</li>
        <li>1 teaspoon salt</li>
        <li>1 tablespoon olive oil</li>
        <li>3/4 cup warm water</li>
        <li>1 cup pizza sauce</li>
        <li>2 cups shredded mozzarella cheese</li>
        <li>Your choice of toppings (pepperoni, mushrooms, bell peppers, etc.)</li>
      </ul>
      <h2>Instructions:</h2>
      <ol>
        <li>In a bowl, combine flour, yeast, and salt.</li>
        <li>Add olive oil and warm water, mixing until a dough forms.</li>
        <li>Knead the dough for 5-10 minutes until smooth, then let it rise for 1 hour.</li>
        <li>Preheat the oven to 475°F (245°C).</li>
        <li>Roll out the dough on a floured surface to your desired thickness.</li>
        <li>Spread pizza sauce, sprinkle cheese, and add your favorite toppings.</li>
        <li>Bake in the preheated oven for 12-15 minutes until the crust is golden and cheese is bubbly.</li>
      </ol>
    </div>
    </div>
  );
};


