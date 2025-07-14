import { useEffect, useRef, useState } from "react";
import "./wedding.css";

function App() {
  // Countdown logic
  const [timer, setTimer] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const galleryRef = useRef(null);
  const videoRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    function updateCountdown() {
      const targetDate = new Date("2027-06-25T00:00:00").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;
      const seconds = Math.floor((distance / 1000) % 60);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const daysTotal = Math.floor(distance / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(daysTotal / 7);
      const days = daysTotal % 7;
      setTimer({ weeks, days, hours, minutes, seconds });
    }
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  // Improved auto scroll gallery
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    function startScroll() {
      if (scrollIntervalRef.current) return;
      scrollIntervalRef.current = setInterval(() => {
        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
          gallery.scrollLeft = 0;
        } else {
          gallery.scrollLeft += 1;
        }
      }, 20);
    }
    function stopScroll() {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }
    if (!isGalleryHovered && !isVideoPlaying) {
      startScroll();
    } else {
      stopScroll();
    }
    return stopScroll;
  }, [isGalleryHovered, isVideoPlaying]);

  // Popup wish
  const [showPopup, setShowPopup] = useState(false);
  const [wish, setWish] = useState("");

  return (
    <>
      <header>
        {/* <h1>ขอเชิญร่วมงานแต่งงาน</h1>
        <p>บ่าวสาว: สมชาย & สมหญิง</p> */}
      </header>

      <section className="section couple">
        <div className="couple-title">
          THE HONOUR OF YOUR PRESENCE IS REQUESTED
          <br />
          AT THE MARRIAGE CELEBRATION OF
        </div>
        <div className="couple-container">
          <div className="person">
            <img src="/img/bride-placeholder.jpg" alt="Bride" />
            <div className="label">Bride</div>
            <div className="name">นางสาว จิรวรรณ เพชรสุข</div>
          </div>
          <div className="person">
            <img src="/img/groom-placeholder.jpg" alt="Groom" />
            <div className="label">Groom</div>
            <div className="name">นาย จิรายุ สายสุวรรณ</div>
          </div>
        </div>
      </section>

      <section className="countdown">
        <h2>
          LET’S CELEBRATE TOGETHER ON
          <br />
          OUR SPECIAL DAY ON
        </h2>
        <div className="countdown-date">20 DEC 25</div>
        <div className="timer">
          <div>
            <span>{timer.weeks}</span>
            <span>WEEKS</span>
          </div>
          <div>
            <span>{timer.days}</span>
            <span>DAYS</span>
          </div>
          <div>
            <span>{timer.hours}</span>
            <span>HOURS</span>
          </div>
          <div>
            <span>{timer.minutes}</span>
            <span>MIN</span>
          </div>
          <div>
            <span>{timer.seconds}</span>
            <span>SEC</span>
          </div>
        </div>
        <button
          className="calendar-btn"
          onClick={() => alert("เพิ่มลงปฏิทินสำเร็จ!")}
        >
          ADD TO CALENDAR
        </button>
      </section>

      <section className="schedule-section">
        <h2>SCHEDULE</h2>
        <img
          src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471249/IMG_0131_qx5aik.jpg"
          alt="Wedding Image"
          className="wedding-img"
        />
        <img
          src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471935/schedule_ly1d9u.png"
          alt="Schedule Image"
          className="schedule-img"
        />
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <div>
          {/* Video: use video tag instead of iframe for mp4 */}
          <video
            width="100%"
            height="315"
            controls
            ref={videoRef}
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={() => setIsVideoPlaying(false)}
            poster="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471255/anime_vjtuej.jpg"
            preload="metadata"
          >
            <source
              src="https://drive.google.com/uc?export=download&id=1poj0ww-uhDtM0dTkyP24JBmq_k8SsMy9"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="gallery-images"
          ref={galleryRef}
          id="gallery"
          onMouseEnter={() => setIsGalleryHovered(true)}
          onMouseLeave={() => setIsGalleryHovered(false)}
        >
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471543/IMG_0125_mgrg68.jpg" alt="Gallery Image 1" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471256/IMG_0126_mlevgc.jpg" alt="Gallery Image 2" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471252/IMG_0127_a417wo.jpg" alt="Gallery Image 3" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471255/IMG_0121_qekwgf.jpg" alt="Gallery Image 4" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471249/IMG_0131_qx5aik.jpg" alt="Gallery Image 5" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471252/IMG_1387_ko7r80.jpg" alt="Gallery Image 6" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471541/IMG_0660_tpepm6.jpg" alt="Gallery Image 7" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471251/IMG_0133_jo0sky.jpg" alt="Gallery Image 8" />
          <img src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471257/IMG_0132_2_dlm7nb.jpg" alt="Gallery Image 9" />
        </div>
      </section>

      <section className="rsvp-section">
        <div className="rsvp-text">
          <h2>R.S.V.P</h2>
          <p>
            “เพื่อให้เราสามารถวางแผนในการดูแลท่าน
            ซึ่งเป็นแขกคนสำคัญได้อย่างเต็มที่
            ขอรบกวนทุกท่านกรอกแบบตอบรับการเข้าร่วมงานให้เราด้วยนะคะ/ครับ”
          </p>
          <p>
            <strong>HOPE TO SEE YOU AT OUR WEDDING</strong>
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://example.com/register")
            }
          >
            กดเพื่อลงทะเบียนเข้าร่วมงาน
          </button>
        </div>
        <div className="rsvp-img">
          <img src="/img/rsvp-photo.jpg" alt="RSVP Couple Photo" />
        </div>
      </section>

      <section className="wish-section">
        <h2>SEND YOUR WISH</h2>
        <p>
          เชิญทุกท่านมาร่วมเป็นส่วนหนึ่งในการเติมเต็มความสุขให้กับเรา
          <br />
          ร่วมอวยพรให้เราทั้งคู่ได้ที่นี่
        </p>
        <button onClick={() => setShowPopup(true)}>
          ✏️ เขียนคำอวยพรดิจิตอล
        </button>
      </section>

      {showPopup && (
        <div className="popup" style={{ display: "flex" }}>
          <div className="popup-content">
            <h3>เขียนคำอวยพร</h3>
            <textarea
              placeholder="พิมพ์คำอวยพรของคุณที่นี่..."
              value={wish}
              onChange={(e) => setWish(e.target.value)}
            />
            <br />
            <button
              className="submit"
              onClick={() => {
                alert("ส่งคำอวยพรเรียบร้อยแล้ว ขอบคุณค่ะ/ครับ");
                setShowPopup(false);
                setWish("");
              }}
            >
              ส่งคำอวยพร
            </button>
            <button className="cancel" onClick={() => setShowPopup(false)}>
              ยกเลิก
            </button>
          </div>
        </div>
      )}

      <section className="map-section">
        <h3>📍 The Venue</h3>
        <p>The Peninsula Bangkok Resort</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7998694764644!2d100.5090275153609!3d13.719147401417768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299427c44a97f%3A0xdff8e395ccae13df!2sThe%20Peninsula%20Bangkok!5e0!3m2!1sen!2sth!4v1650278615741!5m2!1sen!2sth"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        <div className="map-address">
          📌 333 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600
        </div>
        <button
          className="map-button"
          onClick={() =>
            window.open("https://goo.gl/maps/2UfiCFPvR3qKoNML6", "_blank")
          }
        >
          DIRECTION
        </button>
      </section>

      <nav className="nav-bottom">
        <a href="#">หน้าหลัก</a>
        <a href="#">รายละเอียด</a>
        <a href="#">แผนที่</a>
        <a href="#">อวยพร</a>
      </nav>
    </>
  );
}

export default App;
