import Image from "next/image";
export default function ChocolateCake(){


  return (
    <div className="blogBackground">

    <div className="blogContainer">
      <h1 className="blogTitle">Chocolate Cake: A Delightful Treat</h1>
      <img src="/chococake.png" alt="Chocolate Cake" className="blogImage" />
      <p className="blogContent">
        Chocolate cake is a rich, moist cake made with cocoa powder or melted chocolate. 
        It's a popular dessert for birthdays and special occasions, often layered with chocolate frosting.
      </p>
      <h2>Ingredients:</h2>
      <ul>
        <li>1 and 3/4 cups all-purpose flour</li>
        <li>3/4 cup unsweetened cocoa powder</li>
        <li>2 cups granulated sugar</li>
        <li>1 and 1/2 teaspoons baking powder</li>
        <li>1 and 1/2 teaspoons baking soda</li>
        <li>1 teaspoon salt</li>
        <li>2 large eggs</li>
        <li>1 cup whole milk</li>
        <li>1/2 cup vegetable oil</li>
        <li>2 teaspoons vanilla extract</li>
        <li>1 cup boiling water</li>
      </ul>
      <h2>Instructions:</h2>
      <ol>
        <li>Preheat your oven to 350°F (175°C) and grease two 9-inch round cake pans.</li>
        <li>In a large bowl, mix flour, cocoa powder, sugar, baking powder, baking soda, and salt.</li>
        <li>Add eggs, milk, oil, and vanilla extract. Beat on medium speed for 2 minutes.</li>
        <li>Stir in boiling water (the batter will be thin) and pour into prepared pans.</li>
        <li>Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.</li>
        <li>Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.</li>
        <li>Frost with your favorite chocolate frosting and enjoy!</li>
      </ol>
    </div>
    </div>
  );
};
