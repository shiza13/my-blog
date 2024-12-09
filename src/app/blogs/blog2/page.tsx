import Image from "next/image";
export default function Nihari() {

  return (
    <div className="blogBackground">

    <div className="blogContainer">
      <h1 className="blogTitle">Nihari: The Ultimate Comfort Food</h1>
      <img src="/nihari.png" alt="Nihari" className="blogImage" />
      <p className="blogContent">
        Nihari is a slow-cooked stew of meat, traditionally served as a breakfast dish in Pakistan and India.
        It’s rich in flavor and is usually enjoyed with naan or paratha.
      </p>
      <h2>Ingredients:</h2>
      <ul>
        <li>500g beef or lamb, cut into pieces</li>
        <li>2 large onions, finely sliced</li>
        <li>4 tablespoons ginger-garlic paste</li>
        <li>2-3 green chilies, slit</li>
        <li>2 cups water</li>
        <li>Spices (Nihari masala, turmeric, garam masala)</li>
        <li>Fresh cilantro and ginger for garnishing</li>
        <li>Salt to taste</li>
      </ul>
      <h2>Instructions:</h2>
      <ol>
        <li>Heat oil in a pot and sauté onions until golden brown.</li>
        <li>Add ginger-garlic paste and cook until fragrant.</li>
        <li>Add meat and brown it on all sides.</li>
        <li>Stir in the spices, followed by water. Bring to a boil.</li>
        <li>Cover and simmer on low heat for several hours until meat is tender.</li>
        <li>Serve hot, garnished with fresh cilantro and ginger, with naan or paratha.</li>
      </ol>
    </div>
    </div>
  );
};


