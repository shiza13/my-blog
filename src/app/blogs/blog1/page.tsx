import Image from "next/image";
export default function Biryani(){
  return (
    <div className="blogBackground">
    <div className="blogContainer">

      <h1 className="blogTitle">Biryani: The Royal Delight</h1>
      <img src="/biryani.png" alt="Biryani" className="blogImage" />
      <p className="blogContent">
        Biryani is a flavorful rice dish made with aromatic basmati rice and a variety of spices.
        It's often cooked with meat, and it comes in many regional variations across South Asia.
      </p>
      <h2>Ingredients:</h2>
      <ul>
        <li>2 cups basmati rice</li>
        <li>500g chicken or mutton</li>
        <li>2 large onions, thinly sliced</li>
        <li>2 tomatoes, chopped</li>
        <li>1/2 cup yogurt</li>
        <li>Ginger-garlic paste</li>
        <li>Spices (cardamom, cloves, cinnamon, bay leaf, etc.)</li>
        <li>Fresh cilantro and mint leaves</li>
        <li>Salt to taste</li>
      </ul>
      <h2>Instructions:</h2>
      <ol>
        <li>Soak the rice in water for about 30 minutes, then drain.</li>
        <li>In a large pot, heat oil and fry the onions until golden brown. Remove and set aside.</li>
        <li>Add ginger-garlic paste to the pot and sauté, then add tomatoes and cook until soft.</li>
        <li>Add meat, yogurt, and spices. Cook until the meat is tender.</li>
        <li>Add soaked rice, and then pour in enough water to cook the rice.</li>
        <li>Cover and cook on low heat until the rice is done. Garnish with fried onions, cilantro, and mint.</li>
      </ol>
    </div>
    /</div>
  );
};



