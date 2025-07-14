import { useEffect, useRef, useState } from "react";
import "./wedding.css";

function App() {
  const [timer, setTimer] = useState({
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
      const targetDate = new Date("2025-12-20T00:00:00");
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance <= 0) {
        setTimer({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const seconds = Math.floor((distance / 1000) % 60);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      setTimer({ days, hours, minutes, seconds });
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let scrollAmount = 0;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    const interval = setInterval(() => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        gallery.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollAmount += 1;
        gallery.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [wish, setWish] = useState("");

  return (
    <>
      <header>
        <img src="img/logo-1.png" alt="logo" className="logo" />
      </header>

      <section className="section couple">
        <div className="couple-title">
          THE HONOUR OF YOUR PRESENCE IS REQUESTED
          <br />
          AT THE MARRIAGE CELEBRATION OF
        </div>
        <div className="couple-container">
          <div className="person">
            <img src="img/bride.png" alt="Bride" />
            <div className="label">Bride</div>
            <div className="name">นางสาว จิรวรรณ เพชรสุข</div>
            <div className="name">(แป้ง)</div>
          </div>
          <div className="person">
            <img src="img/groom.png" alt="Groom" />
            <div className="label">Groom</div>
            <div className="name">นาย จิรายุ สายสุวรรณ</div>
            <div className="name">(ก้อง)</div>
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
          onClick={() =>
            window.open(
              "https://calendar.google.com/calendar/render?action=TEMPLATE&text=งานแต่งงาน+จิรายุ+&dates=20270624T170000Z/20270625T070000Z&details=ขอเชิญร่วมงานแต่งงานของเราที่กรุงเทพฯ&location=กะทิบ้านอาหารไทย",
              "_blank"
            )
          }
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
          src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752492697/schedule-final_tf2vmu.png"
          alt="Schedule Image"
          className="schedule-img"
        />
      </section>

      <section className="gallery-section">
        <h2>GALLERY</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/AR3vQpwamug?si=Xjn5p7AnN5JvI5Wj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="gallery-images" ref={galleryRef}>
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471543/IMG_0125_mgrg68.jpg"
            alt="Gallery Image 1"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471256/IMG_0126_mlevgc.jpg"
            alt="Gallery Image 2"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471252/IMG_0127_a417wo.jpg"
            alt="Gallery Image 3"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471255/IMG_0121_qekwgf.jpg"
            alt="Gallery Image 4"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471249/IMG_0131_qx5aik.jpg"
            alt="Gallery Image 5"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471252/IMG_1387_ko7r80.jpg"
            alt="Gallery Image 6"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471541/IMG_0660_tpepm6.jpg"
            alt="Gallery Image 7"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471251/IMG_0133_jo0sky.jpg"
            alt="Gallery Image 8"
          />
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471257/IMG_0132_2_dlm7nb.jpg"
            alt="Gallery Image 9"
          />
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
          <img
            src="https://res.cloudinary.com/dslqqqxil/image/upload/v1752471543/IMG_0125_mgrg68.jpg"
            alt="RSVP Couple Photo"
          />
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
        <h3>📍 กะทิบ้านอาหารไทยและขนม</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.214413321803!2d100.44724769999999!3d13.782286599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299a6443567b5%3A0xa22e91c6139854ad!2z4LiB4Liw4LiX4Li04Lia4LmJ4Liy4LiZ4Lit4Liy4Lir4Liy4Lij4LmE4LiX4Lii4LmB4Lil4Liw4LiC4LiZ4Lih!5e1!3m2!1sth!2snz!4v1752480097631!5m2!1sth!2snz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        <div className="map-address">
          📌 14 ถ. บรมราชชนนี ฉิมพลี เขตตลิ่งชัน กรุงเทพมหานคร 10170 ไทย
        </div>
        <button
          className="map-button"
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/2kj2jUnsaui2b3er7",
              "_blank",
              "noopener,noreferrer"
            )
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
