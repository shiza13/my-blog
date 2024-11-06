import Link from 'next/link';

type IData = {
  title: string;
  description: string;
};

const data: IData[] = [
  { title: "Biryani", description: "lets click readMore button to learn making biryani" },
  { title: "Nihari", description: "lets click readMore button to learn making Nihari" },
  { title: "Pizza", description: "lets click readMore button to learn making Pizza" },
  { title: "Haleem", description: "lets click readMore button to learn making Haleem" },
  { title: "ChocolateCake", description: "lets click readMore button to learn making ChocolateCake" },
  { title: "Khubani ka Meetha", description: "lets click readMore button to learn making Khubani ka Meetha" },
];

export default function Responsive() {
  return (
    <div className="parentContainer">
      {data.map((Idata, index) => (
        <div className="childContainer bounce-in-right" key={index}>

          <div className={`imageContainer image${index + 1}`}></div>

          <h1 className="title">{Idata.title}</h1>

          <p className="description">{Idata.description}</p>
        
          <Link href={`/blogs/blog${index + 1}`}>

            <button className="readMore">Read More</button>

          </Link>

        </div>

      ))}
    </div>
  );
}