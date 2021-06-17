import React from 'react'
import styles from './Footer.module.scss'
import "../../styles/style.css"
import "../../styles/bootstrap.css"
import { Row, Col, Container } from 'react-bootstrap'
import { BsFillEnvelopeFill, BsBarChartFill } from 'react-icons/bs'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
  <footer id="bs-footer" className="wrap bs-footer" role="navigation" aria-label="Footer menu">
    <div className="bs-spotlight bs-footnav row">
      <div className="col-lg-4 col-md-4 col-sm-4 hidden-sm hidden-xs">
        <div className="bs-module module " id="Mod92">
          <div className="module-inner">
            <h3 className="module-title "><span>Resource Librarians</span></h3>
            <div className="module-ct">
              <div className="custom">
                <ul>
                  <li><a href="http://libguides.nus.edu.sg/areastudies" target="_blank">Area Studies</a></li>
                  <li><a href="http://libguides.nus.edu.sg/business" target="_blank">Business</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sde" target="_blank">Design &amp; Environment</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sb.php?subject_id=32292" target="_blank">Reference Management</a></li>
                  <li><a href="http://libguides.nus.edu.sg/engineering" target="_blank">Engineering &amp; Computer Science</a></li>
                  <li><a href="http://libguides.nus.edu.sg/humanities" target="_blank">Humanities</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sb.php?subject_id=32284" target="_blank">Law</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sb.php?subject_id=32285" target="_blank">Medicine, Pharmacy, &amp; Nursing</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sb.php?subject_id=32286" target="_blank">Music</a></li>
                  <li><a href="http://libguides.nus.edu.sg/sb.php?subject_id=32293" target="_blank">Patents</a></li>
                  <li><a href="https://libguides.nus.edu.sg/rdm" target="_blank">Research Data Management</a></li>
                  <li><a href="https://libguides.nus.edu.sg/researchimpact " target="_blank">Research Impact Measurement</a></li>
                  <li><a href="http://libguides.nus.edu.sg/science" target="_blank">Science</a></li>
                  <li><a href="http://libguides.nus.edu.sg/socialscience" target="_blank">Social Sciences</a></li>
                  <li><a href="http://libguides.nus.edu.sg/yale-nus" target="_blank">Yale-NUS College</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col-lg-4 col-md-4 col-sm-4 hidden-sm hidden-xs">
        <div className="bs-module module " id="Mod92">
          <div className="module-inner">
            <h3 className="module-title "><span>Libraries</span></h3>
            <div className="module-ct">
              <div className="custom">
                <ul>
                  <li><a href="/frontend/ms/central-library/about-central-library" target="_self">Central Library</a></li>
                  <li><a href="/frontend/ms/chinese-library-ch/about-chinese-library" target="_self">Chinese Library</a></li>
                  <li><a href="/frontend/ms/c-j-koh-law-library/about-c-j-koh-law-library" target="_self">C J Koh Law Library</a></li>
                  <li><a href="/frontend/ms/hon-sui-sen-memorial-library/about-hon-sui-sen-memorial-library" target="_self">Hon Sui Sen Memorial Library</a></li>
                  <li><a href="/frontend/ms/medical-library/about-medical-library" target="_self">Medical Library</a></li>
                  <li><a href="/frontend/ms/music-library/about-music-library" target="_self">Music Library</a></li>
                  <li><a href="/frontend/ms/science-library/about-science-library" target="_self">Science Library</a></li>
                  <li><a href="http://library.yale-nus.edu.sg" target="_blank">Yale-NUS College Library</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="bs-module module footnav-info " id="Mod94">
          <div className="module-inner"><h3 className="module-title "><span>NUS Libraries</span></h3>
            <div className="module-ct">
              <div className="custom footnav-info">
                <ul className="fa-ul">
                  <li><span className="fa-li fa fa-location-arrow" /><span style={{whiteSpace: 'pre-wrap'}}>Central Library
                      12 Kent Ridge Crescent
                      Singapore 119275</span></li>
                  <li><span className="fa-li fa fa-phone" /><span style={{whiteSpace: 'pre-wrap'}}>+65 6516 2028</span></li>
                  <li><span className="fa-li fa fa-envelope" />
                    <span id="cloaked12"><a href="mailto:askalib@nus.edu.sg">askalib@nus.edu.sg</a><br /><a href="mailto:" /></span>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        <div className="bs-module module footnav-info footnav-social">
          <div className="module-inner">
            <div className="module-ct">
              <div className="custom footnav-info footnav-social">
                <div>
                  <a href="https://www.facebook.com/NUSLibraries" target="_blank"><img id="j_id510:0:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1ks9rFDEUx18Hi!UXqCtKkUKtoiCSObhSpRYEf1XZteBaQT1lZt5Os80kMXmzHS1686Lgxas3r3rRv8BrwUv!BkFEBBHEq0m2KC2Y2wvffL-f917efodxZ-G0tiXjA960B67PLDpd2xzZkkN7e7M4sWTFFU4cwmmd-5bAjg7syy1ywstaESoiONgZ8CFPJVdlupgNMKe5DuzExgjv-RCewlgHJipdiL7AYrMeH3JZYywa41lOBouG9XmOjuW6Mlp5b9YjH7SgZYG2x4do761!mH!1-lM3gaQDu3LJnbvFK9zK0CMrVOkZdjv!pogeBIdHlEKnPbSCS!GYZxLnGhPiT!lI5moVASSSYyjZHV52kZZ1cbUxvhMntIpzABjbC9BYmBxBe-l23ft0!cXn3-2XSdS1!ur-Ob159rz38!7GxaAIBMfCMgaZdjF6u9-Nysjsx5Ffez4e6IbsMLiJ1SmYPL7Gc!JgXVT1Na0JLTNcKHoCUFtoPYhNs7AaP8s4lncbd798nVq7HoN9PwnBocDHhGaLNZmavBB5RbA!Xse3o7Ua06zehAW!6Ue6ppTQU!n9sGaZKjl9afb8hTNn29Nbfsf8zH8JZ!zoCY6mItfKpQX2eS0pDT8g03qFGVX-AR2Q64I_" style={{height: 32, width: 32}} />
                  </a>
                  <a href="https://twitter.com/NUSlibraries" target="_blank"><img id="j_id510:1:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1kk1rFEEQhiuDwfgF6ooSIRCjKIj0HLKiEgOCX1FmDThGUE-9M7WTHnq6x-6a3dGgNy8KXrx686oX!QVeA17yGwQREUQQr3b3BiUB-1bN2-!7VFW!!Q6T1sBpbQrGS952SztgBq1uTIZsxaK5vVmcWDHiCicO!nTOfotgRwL7MoOc8LJWhIoIDiYlH!JYclXEy!0SM1pIYCe2tXCeD-EpTCQwVelcDATmm!XkkMsGQ9HWjuWkt2jZgGdoWaarWivnzVJyQUta5mhSPkRzb!3D4qvXn3oRRAnsyiS39havcCtDSkaowjHstu5NHjwIDo8phY5TNIJL8Zj3JS60tY8!5SKZbVQAkEiWoWR3eNFDWtX51bZ2nVihVZgDwMRegNbA9BjaSbfr3sfrLz7!7r6Mgq7zV!fP6c2z5-nP-xsXvcITHPPLKPvahujtfjeqWvZ!HPm15-OBns!2g5sazcD08TWekQProWquaU1oWM2FoicAjYHOg9A086txswxjebdx98vXmbXrIdj1ExEc8nxMaLbcUN2QEyKvCPaH6!B2vNa6bkc3Yclt-pFuKCZ0VG4!rF2lSs5eOnf-wpn57uyW37E491!COTd6gqOxyLSycY4D3khnOhIUulDFHzQg61o_" style={{height: 32, width: 32}} />
                  </a>
                  <a href="https://instagram.com/nuslibraries" target="_blank"><img id="j_id510:2:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1kk1rFEEQhiuLwfgF6kokYCBGURDpOWTFSAwIfkXZNeAaQT3VztROeunpbrtrNqNBb14UvHj15lUv-gu8BrzkNwgiIoggXu3pDUoC9q2at9!3qap--x3GvYMzxuUCB1i1Br4vHHlTupTEiid3e6s4ueLkFWSE-jTPfWvArjYcSB0h02WjmTQzHG4PcIiJQp0ny70BpbzQht1UWRk8H8JTGGvDRGEy2ZeUbdXjQ1QlxaKygeVUbVGJPqbkRWoKa3TwFl0OQUtGZeS6OCR3b-PD4qvXnzoNaLRhT6rQ-1tY0HaGLjup88Cw14c3WfRgmBxRSpN0yUlU8jH2FC1Uto4!HSKFL3UEUMRekBJ3MO8Qr5rsamVDJ14aHecAMLYfoHIwNYIO0p2698nGi8-!Wy8bUdf8q!vn9ObZ8-7P-5sXa0VNcLxexqBnfIze6XejsKr34-ivfR8PdersenATa9MwdWIdUw5gHdLlNWOYnLAoNT8BKB00H8SmRb2aMMs4lnebd798nV6!HoNDPw2GIzWfkEYsl2xLDkLCguFgvI5vR2u1tlq7CUth049MyQlToAr7EdUqF2rm0vn5C2fnWjPbfsfi7H8JZ8PoGY4lMjXaJxn1sVScSO0Zc4eFsDr!AwuF7A8_" style={{height: 32, width: 32}} />
                  </a>
                  <a href="http://blog.nus.edu.sg/linus/" target="_blank"><img id="j_id510:3:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1ks1rFTEUxW8Hi!UL1CdKwUKtoiCSWfSJSi0IflWZZ8GxgrrKm7lvmiGTxOTOe6NFd24U3Lh151Y3-he4Lbjp3yCIiCCCuDWTV5QWnF2Gk3N-99y8!Q6TzsJpbQvGS950SzdgFp2ubYZsxaG9vXk4sWLFFU4c2q9z9lsEOxLYl1nkhJe1IlREcDAp-ZDHkqsiXu6XmNFCAjuxMcJ7PoSnMJHAVKVzMRCYb54nh1zWGA6N8SwnW4uGDXiGjmW6Mlp5b5aSD1rSMkeb8iHae-sfFl-9!tSLIEpgVya5c7d4hVsZUrJCFZ5ht!N38uBBcHhMKXScohVcise8L3GhMW38KR!JXK0CgERyDCW7w4se0qrOrzbGT-KEVqEHgIm9AI2F6TG0l27XvY!XX3z-3X0ZBV3nr-6f05tnz9Of9zcutoqW4Fi7jLKvXYje7nejMrL!48ivPR8P9Nrstrip0QxMH1!jGXmwHqr6mtaElhkuFD0BqC10HoShWbsa32Wo5d3G3S9fZ9auh2A!T0RwqOVjQrPlmkxNXoi8Itgffoe747Ua04xuwpLf9CNdU0zoqfx-WLNKlZy9dO78hTPz3dktr2Nx7r-Ec756gqOxyLRycY4DXkuKR9rmoW1mVPEHDKrsMg__" style={{height: 32, width: 32}} />
                  </a>
                  <a href="https://www.youtube.com/user/nuslibraries" target="_blank"><img id="j_id510:4:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1ks9rFDEUx18Hi!UXqCuVCoVaRUEkc-iKlVoQ!FVl14JjBfWUmXm7zZJJYvJmO1r05kXBi1dvXvWif4HXgpf-DYKICCKIV5NsUVowtxe--X4!7728!Q7jzsIZbfuMD3jTHrges-h0bQtkKw7t7a3i5IoVVzhxCKd17lsCuzpwoLDICS9rRaiI4HBnwIc8lVz10-V8gAUtdGA3NkZ4z4fwFMY6MFHpUvQEllv1-JDLGmPRGM9yKlg0rMcLdKzQldHKe7OMfNCSliXajA!R3tv4sPjq9aduAkkH9hSSO3eLV7idISMrVN8z7HX-TRk9CCZHlEKnGVrBpXjMc4kLjQnxp30kc7WKABLJMZTsDu93kVZ1ebUxvhMntIpzABjbD9BYmBpBe-lO3ft048Xn3-2XSdS1!ur-Ob159jz7eX!zYlAEguNhGYNcuxi90-9GZWT-4-ivfR8PdUN2GNzE2jRMnVjnBXmwLqr6mtaElhkuFD0BqC20HsSmWViNn2Ucy7vNu1--Tq9fj8G-n4TgSOBjQrPlmkxNXoi8IjgYr-Pb0VqNadZuwpLf9CNdU0roqfx-WLNKlZy5dH7-wtm59sy237E4-1!CWT96gmOpKLRyaYk9XktKg3OdIzOq!wc0J-tU" style={{height: 32, width: 32}} />
                  </a>
                  <a href="https://www.flickr.com/photos/nuslibraries" target="_blank"><img id="j_id510:5:j_id512" src="/frontend/a4j/s/3_3_1.SP3org.ajax4jsf.resource.UserResource/n/n/-1426352622/DATA/eAF1kk1rFEEQhiuDwfgF6oqyh0CMoiDSc8iKSgwIfkWZNeAaQT31ztRMeuzpbrtrNqNBb14UvHj15lUv-gu8BrzkNwgiIoggXu3pDUoC9q2at9!3qap--x0mnYVT2haMl7zplS5nFp2ubYps2aG9tVkcX7biMicO7emc-RbBjgT2pRY54SWtCBURHExKPuKx5KqIl4YlpjSfwE5sjPCeD-EpTCQwVelM5AKzzXpyxGWNoWiMZznRWjQs5yk6lurKaOW92YB80KKWGdoBH6G9u!5h4dXrT!0IogR2pZI7d5NXuJVhQFaowjPsdv5NFjwIDo8phY4HaAWX4jEfSpxvTBt!0kcyV6sAIJEcQ8lu86KPtKKzK43xnTihVZgDwMRegMZCdwztpdt17-P1F59!915GQdf5q!vn9ObZ88HPexsXWkVLcLRdRjnULkRv97teGTn8ceTXno8H-m12O7ip1WnoHlvjKXmwPqr6qtaElhkuFD0BqC107oemWbsaP8swlncbd758nV67FoJ9PxHBoZaPCc2WajI1eSHyimB!uA5vx2s1plm9AYt-0490TTGhp!L7Yc0KVXLm4tlz50!P9Wa2!I6F2f8SzvrRE3RjkWrl4gxzXkuKcynSB74JVfwBRu3qwQ__" style={{height: 32, width: 32}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  <section className="bs-copyright" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="copyright-info">
          <small>© <a href="http://www.nus.edu.sg">National University of Singapore</a>. All Rights Reserved.</small>
        </div>
      </div>
      <div className="row">
        <div className="copyright-links ">
          <ul className="nav nav-pills nav-stacked ">
            <li className="item-118"><a href="http://www.nus.edu.sg/legal-information-notices" target="_blank">Legal</a></li>
            <li className="item-118"><a href="http://www.nus.edu.sg/identity" target="_blank">Branding guidelines</a></li>
            <li className="item-118"><a href="http://www.nus.edu.sg/contact" target="_blank">Contact us</a></li>
            <li className="item-118"><a href="http://cn.nus.edu.sg/" target="_blank">中文</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</footer>

    // <Container fluid style={{ backgroundColor: 'var(--dark)' }}>
    //   <Container className={styles.footer}>
    //     <Row>
    //       <Col xs={6} sm={{ span: 5, order: 1 }} lg={{ span: 3, order: 1 }}>
    //         <p className="Xsmall">
    //           RAWGraphs is an open source project designed and developed by{' '}
    //           <a
    //             href="http://densitydesign.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             DensityDesign
    //           </a>
    //           ,{' '}
    //           <a
    //             href="https://calib.ro/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Calibro
    //           </a>{' '}
    //           and{' '}
    //           <a
    //             href="https://inmagik.com/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Inmagik
    //           </a>
    //           .
    //           <br />© 2013-2021{' '}
    //           <a href="https://raw.github.com/rawgraphs/rawgraphs-app/master/LICENSE">
    //             (Apache License 2.0)
    //           </a>
    //         </p>
    //       </Col>
    //       <Col xs={6} sm={{ span: 5, order: 3 }} lg={{ span: 3, order: 1 }}>
    //         <p className="Xsmall"></p>
    //       </Col>
    //       {/* <Col xs={6} sm={{span:5, order:3}} lg={{span:3,order:1}}><p className="Xsmall">This <span title={commitHash}>version</span> is intended to be available only for the backers of the crowdfunding campaign.</p></Col> */}
    //       <Col
    //         xs={6}
    //         sm={{ span: 6, offset: 1, order: 2 }}
    //         md={{ span: 3 }}
    //         lg={{ offset: 0 }}
    //         xl={{ span: 2, offset: 2 }}
    //       >
    //         <p>
    //           <BsFillEnvelopeFill /> hello at rawgraphs.io
    //         </p>
    //         <p>
    //           <FaTwitter />{' '}
    //           <a
    //             href="https://twitter.com/rawgraphs"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             @rawgraphs
    //           </a>
    //         </p>
    //       </Col>
    //       <Col
    //         xs={6}
    //         sm={{ span: 6, offset: 1, order: 4 }}
    //         md={{ span: 2 }}
    //         lg={{ offset: 0 }}
    //         xl={{ span: 2, offset: 0 }}
    //       >
    //         <p>
    //           <FaGithub />{' '}
    //           <a
    //             href="https://github.com/rawgraphs"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Github
    //           </a>
    //         </p>
    //         <p>
    //           <BsBarChartFill />{' '}
    //           <a
    //             href="https://old.rawgraphs.io"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             RAWGraphs v.1
    //           </a>
    //         </p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Container>
  )
}


