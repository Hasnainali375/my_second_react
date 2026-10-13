function App() {
  return (
    <div>
      <ol>
        <li>odd</li>
        <li>even</li>
        <li>prime</li>
      </ol>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5iGf_KNuN4w?si=1XqvTNjjLt5BS2Pj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.2555484797413!2d73.0752120742242!3d33.70233577329077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff2ea7d1f0d%3A0xbb2acabbc4bf1efb!2sCapital%20Development%20Authority%20Secretariat!5e0!3m2!1sen!2s!4v1791870698767!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <form>
        <input type="name" placeholder="enter your name" />
        <input type="class" placeholder="enter your class" />
      </form>
    </div>
  );
}
export default App;
