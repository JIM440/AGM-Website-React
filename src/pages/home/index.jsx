import tower from '../../assets/images/AGM-images/tower.jpeg'
import Hero from '../../common/Hero';
import useScrollTop from '../../common/components/UseScrollTop'

const Home = () => {
  const scrollToTop = useScrollTop();
  return (
    <>
    
    {/* <!-- hero section --> */}
    <Hero />

    {/* <!--=== intro section ===--> */}
    <section id="intro">
      <div className="container">
        <div className="even-columns">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              exercitationem iste sit cupiditate cum, ducimus repellendus unde
              at in incidunt eligendi eum, labore accusamus aut tenetur deserunt
              rerum animi, odit sapiente dolorem? Porro iusto ipsum cum totam
              rem dolores minima, sapiente explicabo! Odio maxime, modi
              praesentium repudiandae fugiat odit rem?
            </p>
            <div className="btn-container">
              <a href="./about/agm" className="btn btn-white">Learn More</a>
              <a href="./contact/prayerrequests" className="btn">Contact Us</a>
            </div>
          </div>
          <div>
            <img src={tower} alt=""
            />
          </div>
        </div>
      </div>
    </section>

    {/* <!-- =======featured content========== --> */}
    <section id="featured-content">
      <div className="container">
        <h2 className="header">Featured Content</h2>
        <h3>Q & A</h3>
        <div className="content-container">
          <div className="content-box">
            <img
              src="https://media.swncdn.com/cms/BST/29983-cain-slaying-abel-jacopo-palma-1590.800w.tn.jpg"
              alt=""
            />
            <div className="text">
              <h3>Who did Cain marry?</h3>
              <div>
                <a href="articles/id">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
          <div className="content-box">
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="text">
              <h3>Is football godly or evil?</h3>
              <div>
                <a href="./home/singlearticle.html">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <h3>Visions</h3>
        <div className="content-container">
          <div className="content-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQI5ARs0atJoYRaiwT6yPHbgoPPynNr37-7PyQrmGgXp1RsnUB7las58Ytx1nqiFLXFo&usqp=CAU" alt="" />
            <div className="text">
              <h3>Vision of the seven lamp stands.</h3>
              <div>
                <a href="./home/singlearticle.html">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
          <div className="content-box">
            <img src="https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA=" alt="" />
            <div className="text">
              <h3>Vision of the Dragon.</h3>
              <div>
                <a href="./home/singlearticle.html">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <a href="./home/articles.html" className="link">See more contents</a>
      </div>
    </section>

    {/* <!-- ========= testimonies ========== --> */}
    <section id="testimonies">
      <div className="container">
        <h2 className="header">Testimonies</h2>
        <div className="testimony-container">
          <div className="testimony-box">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg" alt="" />
              <div className="title">
                <p className="name">Sarah Maine</p>
                <span className="country text-muted">Kenya</span>
              </div>
            </div>
            <div className="testimony-content">
              In Kenya, Sarah, a faithful member of our church, experienced a miraculous healing. After prayers, her chronic illness vanished, leaving doctors amazed. This powerful testimony has inspired our church community and ignited faith in God's healing power.
            </div>
          </div>
          <div className="testimony-box">
            <div>
              <img src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D" alt="" />
              <div className="title">
                <p className="name">Mark Frenchy</p>
                <span className="country text-muted">Gabon</span>
              </div>
            </div>
            <div className="testimony-content">
              In our church, we witnessed a remarkable financial favor. After prayer, Mark received an unexpected job offer with a significant salary increase, bringing relief and gratitude. This testimony inspires others to trust in God's provision and seek His favor. Glory to God for His faithfulness in providing abundantly.
            </div>
          </div>
        </div>
        <div className="btn-container">
          <a href="contact/testimonies" className="btn btn-white">Add Your Testimony</a
          ><a href="testimonies" className="btn">View More</a>
        </div>
      </div>
    </section>

    {/* <!-- =================== featured products ================= --> */}
    <section id="featured-products">
      <div className="container">
        <h2 className="header">Featured Products</h2>
        <div className="product-container">
          <div className="product-box book-card">
            <img src="https://www.redemptionstore.church/cdn/shop/products/Good-Morning-Holy-Spirit_800x.png?v=1583535433" alt="" />
            <p><span>The Horn Of Favor</span> by Prophet Kevin Nubidga</p>
            <div>
              <p className="price">$10</p>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ======featured videos======= --> */}
    <section id="featured-videos">
      <div className="container">
        <h2 className="header">Featured Videos</h2>

        <div className="video-container">
          <div className="videos">
            {/* <!-- give .videos max-width and margin auto  --> */}
            <div className="video-card">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wJ3O3kHZE0c?si=zvCKQt4YJUifuxCe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3 className="video-title">THE WORD OF HIS POWER By Prophet Kevin N.</h3>
              <p className="share">
                Help Us Reach More People By Sharing This Video To Others.
              </p>
              <div className="video-btns">
                <a href="facebook.com/prophetkevinonline" className="btn fb">
                  <i className="bx bxl-facebook"></i>
                  <p>Share On Facebook</p>
                </a>
                <a href="youtube.com/prophetkevinonline" className="btn yt">
                  <i className="bx bxl-youtube"></i>
                  <p>Subscribe</p>
                </a>
              </div>
            </div>
            <div className="video-card">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MLo-hZPMGdg?si=wNNuPMluMrjE8NBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3 className="video-title">STANDING COMPLETE IN ALL THE WILL OF GOD By Prophet Kevin N.</h3>
              <p className="share">
                Help Us Reach More People By Sharing This Video To Others.
              </p>
              <div className="video-btns">
                <a href="facebook.com/prophetkevinonline" className="btn fb">
                  <i className="bx bxl-facebook"></i>
                  <p>Share On Facebook</p>
                </a>
                <a href="youtube.com/prophetkevinonline" className="btn yt">
                  <i className="bx bxl-youtube"></i>
                  <p>Subscribe</p>
                </a>
              </div>
            </div>
            <div className="video-card">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aRiGEN2aFUQ?si=SCsGj86_5onPTzQF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3 className="video-title">
CONTENDING FOR THE FAITH By Prophet Kevin N. </h3>
              <p className="share">
                Help Us Reach More People By Sharing This Video To Others.
              </p>
              <div className="video-btns">
                <a href="facebook.com/prophetkevinonline" className="btn fb">
                  <i className="bx bxl-facebook"></i>
                  <p>Share On Facebook</p>
                </a>
                <a href="youtube.com/prophetkevinonline" className="btn yt">
                  <i className="bx bxl-youtube"></i>
                  <p>Subscribe</p>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- side news --> */}
          <div className="side-news">
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://www.dioceseoflaredo.org/sites/default/files/images/Technology/cross-sunset-humility-devotion-161089-e1505933053195.jpeg" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Receive Christ</h3>
                <p>
                  Experience the love of Christ and it's transforming power that brings hope and eternal joy to your life.
                </p>
                <a href="salvation" className="btn">Receive Christ</a>
              </div>
            </div>
            <div className="subscribe">
              <div>
                <img src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-1/415987895_914223870095213_4984103714017541932_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=596444&_nc_ohc=Du_2e5m_thUAX9DIbrB&_nc_ht=scontent-lis1-1.xx&cb_e2o_trans=t&oh=00_AfB1wrdinV13L2Tpbgmbej7Ir6CzLS58jQ4ZMpCmW9072w&oe=6599D2AC" alt="" />
                <div>
                  <h3>Prophet Kevin Online</h3>
                  <p><span>54k Followers</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2k subscribers</span></p>
                </div>
              </div>
              <div className="btns">
                <a href="facebook.com/prophetkevinonline" className="btn fb">
                  <img
                    src="public/assets/images/Facebook.svg"
                    alt="facebook link"
                  />
                  <p>Follow</p>
                </a>
                <a href="youtube.com/prophetkevinonline" className="btn yt">
                  <i className="bi bi-youtube"></i>
                  <p>Subscribe</p>
                </a>
              </div>
            </div>
            <div className="news-letter">
              <h3>Join Our Newsletter</h3>
              <p>
                Sign up to our newletter to receive updates of upcoming events and new materials that will build you up spiritually.
              </p>
              <form action="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="btn">Send</button>
              </form>
            </div>
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://holyspirit.tv/img/book.png" alt="" />
              </div>
              <div className="side-news-text">
                <h3>The Oil Of Favour</h3>
                <p>
                  Experience God's Favor and discover how to align yourself with God's purpose, opening the floodgates to abundant blessings and extraordinary miracles.
                </p>
                <a href="" className="btn">Order Now</a>
              </div>
            </div>

            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://images.squarespace-cdn.com/content/v1/5a1d221bbce17620f86369aa/1656545664935-BKIQSX7ETWBB0Y4E58Y6/PartnerGiving.jpg?format=1500w" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Become a partner</h3>
                <p>
                  Help us reach more people by partnering with us. Join us in sharing the life-transforming message of hope and salvation.
                </p>
                <a href="contact/partner" className="btn">Become a partner</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- ==== ========= faqs section ========== ==== --> */}
    <section id="faqs-section">
      <div className="container container-faqs-section">
        <h2 className="header">Frequently Asked Questions</h2>
        <div className="faqs-container">
          <div className="faqs">
            <div className="question">
              <h3>Who are we?</h3>
              <i className="bi bi-chevron-down"></i>
            </div>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>How can I give to AGM?</h3>
              <i className="bi bi-chevron-down"></i>
            </div>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>How can I become a partner?</h3>
              <i className="bi bi-chevron-down"></i>
            </div>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div className="faqs">
            <div className="question">
              <h3>How can I get help?</h3>
              <i className="bi bi-chevron-down"></i>
            </div>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
        </div>
        <div className="more-questions">
          <h3>Still have questions?</h3>
          <p>If you still have questions, feel free to contact us.</p>
          <a href="contact/questions" className="btn">Contact Us</a>
        </div>
      </div>
    </section>

</>
  );
};
  export default Home;