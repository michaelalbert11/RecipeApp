import "./Banner.style.scss";
export default function Banner(props) {
  const { text, image } = props;
  return (
    <section style={{ backgroundImage: `url(${image})` }} className="banner">
      <h1 className="banner__title">{text}</h1>
    </section>
  );
}
