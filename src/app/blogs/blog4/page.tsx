import Image from "next/image";
export default function Haleem(){


  return (
    <div className="blogBackground">

    <div className="blogContainer">
      <h1 className="blogTitle">Haleem: A Rich and Hearty Dish</h1>
      <img src="/haleem.png" alt="Haleem" className="blogImage" />
      <p className="blogContent">
        Haleem is a traditional dish made from a mixture of wheat, barley, lentils, and meat, slow-cooked to perfection. 
        It is a favorite during Ramadan, served hot and garnished with fried onions, lemon, and fresh herbs.
      </p>
      <h2>Ingredients:</h2>
      <ul>
        <li>1 cup wheat (soaked overnight)</li>
        <li>1 cup barley (soaked overnight)</li>
        <li>1 cup split lentils (masoor dal)</li>
        <li>500g meat (beef or chicken, cut into pieces)</li>
        <li>2 large onions (sliced)</li>
        <li>4 cups water</li>
        <li>2 teaspoons ginger-garlic paste</li>
        <li>1 teaspoon turmeric powder</li>
        <li>1 tablespoon red chili powder</li>
        <li>Salt to taste</li>
        <li>Garnish: fried onions, lemon slices, fresh coriander</li>
      </ul>
      <h2>Instructions:</h2>
      <ol>
        <li>In a large pot, heat oil and fry the sliced onions until golden brown. Remove and set aside.</li>
        <li>Add ginger-garlic paste and meat to the pot, cooking until the meat is browned.</li>
        <li>Add turmeric, red chili powder, and salt. Stir well and cook for a few minutes.</li>
        <li>Add soaked wheat, barley, lentils, and water. Bring to a boil, then reduce heat and simmer.</li>
        <li>Cover and cook for 3-4 hours, stirring occasionally until the grains and meat are soft and the mixture is thick.</li>
        <li>Use a hand blender to blend the mixture to a smooth consistency if desired.</li>
        <li>Serve hot, garnished with fried onions, lemon, and fresh coriander.</li>
      </ol>
    </div>
    </div>
  );
};

