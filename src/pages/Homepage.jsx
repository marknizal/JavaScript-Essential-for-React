import AppWithSlideshow from "../components/Slideshow/Slideshow";
// import SlideshowV2 from "../components/Slideshow2/SlideshowV2.jsx";
import Modal from "../components/Modal/Modal.jsx";
import OnChange from "../components/Forms/Input/Input.jsx";
import MyFormComponent from "../components/Forms/Form/Form.jsx";

const Homepage = () => {
  return (
    <>
      <AppWithSlideshow />
      <br />
      <br />
      <Modal />
      <br></br>
      <hr></hr>
      <OnChange />
      <br></br>
      <hr></hr>
      <MyFormComponent />
      {/* <SlideshowV2 /> */}
      <br />
    </>
  );
};

export default Homepage;
