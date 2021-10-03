import { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import GithubCorner from 'react-github-corner';
import { Fork, Sponsor, Star, UsedBy, Watch } from 'react-github-buttons';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './App.css';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';

function App() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco<br/>This is a new line"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];
  const [time, setTime] = useState(2000);
  const [width, setWidth] = useState("850px");
  const [height, setHeight] = useState("500px");
  const [radius, setRadius] = useState("10px");
  const [slideNumber, setSlideNumber] = useState(true);
  const [captionPosition, setCaptionPosition] = useState("bottom");
  const [automatic, setAutomatic] = useState(true);
  const [dots, setDots] = useState(true);
  const [pauseIconColor, setPauseIconColor] = useState("white");
  const [pauseIconSize, setPauseIconSize] = useState("30px");
  const [slideBackgroundColor, setSlideBackgroundColor] = useState("darkgrey");
  const [slideImageFit, setSlideImageFit] = useState("cover");
  const [thumbnails, setThumbnails] = useState(true);
  const [thumbnailWidth, setThumbnailWidth] = useState("100px");
  const [showNavBtn, setShowNavBtn] = useState(true);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <GithubCorner href="https://github.com/sahilsaha7773/react-carousel-minimal" />
      <div style={{ textAlign: "center", maxWidth: "850px", margin: "auto" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Star owner="sahilsaha7773" repo="react-carousel-minimal" />
          <Fork owner="sahilsaha7773" repo="react-carousel-minimal" />
          <a href="https://www.npmjs.com/package/react-carousel-minimal" target="_blank" className="npm-btn">npm</a>
          {/* <Sponsor owner="sahilsaha7773" repo="react-carousel-minimal" /> */}
        </div>
        <div style={{
          margin: "20px",
        }}>

          <SyntaxHighlighter>
            npm i react-carousel-minimal
          </SyntaxHighlighter>
        </div>
        <div style={{
          padding: "0 20px",
        }}>
          <Carousel
            data={data}
            time={time}
            width={width}
            height={height}
            captionStyle={captionStyle}
            radius={radius}
            slideNumber={slideNumber}
            slideNumberStyle={slideNumberStyle}
            captionPosition={captionPosition}
            automatic={automatic}
            dots={dots}
            pauseIconColor={pauseIconColor}
            pauseIconSize={pauseIconSize}
            slideBackgroundColor={slideBackgroundColor}
            slideImageFit={slideImageFit}
            thumbnails={thumbnails}
            thumbnailWidth={thumbnailWidth}
            showNavBtn={showNavBtn}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
          <h2 style={{ marginBottom: "10px" }}>Settings</h2>
          <p style={{ margin: "10px 0 20px 0" }}>All props are not shown here</p>
          {/* <input type="text" aria-label="time" value={time} onChange={e => setTime(e.target.value)} /> */}
          <form>
            <div className="form-element" style={{ display: "block" }}>
              <label>Radius:</label>
              <div className="inp-box">
                <input type="text" value={radius} width="100%" onChange={e => setRadius(e.target.value)} />
              </div>
            </div>
            <div className="form-element" style={{ display: "block" }}>
              <label>Caption Position: </label>
              <div className="inp-box">
                <select value={captionPosition} onChange={(e) => setCaptionPosition(e.target.value)}>
                  <option value="top">Top</option>
                  <option value="center">Center</option>
                  <option value="bottom">Bottom</option>
                </select>
              </div>
            </div>
            {/* <div className="form-element">
              <label>Automatic: </label>
              <input type="checkbox" checked={automatic} onChange={e => setAutomatic(e.target.checked)} />
            </div> */}
            <div className="form-element">

              <div className="inp-box">
                <label>Thumbnails: </label>
                <input type="checkbox" checked={thumbnails} onChange={e => setThumbnails(e.target.checked)} />
              </div>
            </div>
            <div className="form-element">

              <div className="inp-box">
                <label>Slide Number: </label>
                <input type="checkbox" checked={slideNumber} onChange={e => setSlideNumber(e.target.checked)} />
              </div>
            </div>
            <div className="form-element">
              <div className="inp-box">

                <label>Dots: </label>
                <input type="checkbox" checked={dots} onChange={e => setDots(e.target.checked)} />
              </div>
            </div>
            <div className="form-element">

              <div className="inp-box">
                <label>Show Nav Btn: </label>
                <input type="checkbox" checked={showNavBtn} onChange={e => setShowNavBtn(e.target.checked)} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <p style={{ textAlign: "center", margin: "20px 0 40px 0" }}>Made with ❤️ by <a target="_blank" href="http://sahilsaha.me">Sahil Saha</a></p>
    </div>
  );
}

export default App;

