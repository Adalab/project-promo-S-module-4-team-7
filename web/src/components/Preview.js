import cover1 from "../images/cover1.jpeg";

import Card from "./Card";

function Preview({ data }) {
  return (
    <section className="preview">
      <img className="image" src={data.image || cover1} alt="cover example" />
      {/*   Card -  Almu */}
      <Card data={data} />
    </section>
  );
}

export default Preview;
