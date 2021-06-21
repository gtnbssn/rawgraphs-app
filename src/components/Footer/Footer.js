import React from 'react'
import styles from './Footer.module.scss'
import { Nav, Row, Col, Container, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhoneAlt,faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons'

// #TODO add commit hash
// const commitHash = process.env.REACT_APP_VERSION || 'dev'

export default function Footer(props) {
  return (
  <Container className={styles.footer}>
    <Container className={styles.footerTop}>
    <Row>
      <Col xs={4} sm={4} lg={4} className="d-xs-none d-sm-none d-lg-block">
        <h2>Resource Librarians</h2>
          <ListGroup className={styles.footer_listItem}>
            <li> <a href="http://libguides.nus.edu.sg/areastudies" target="_blank">Area Studies</a></li>
            <li> <a href="http://libguides.nus.edu.sg/business" target="_blank">Business</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sde" target="_blank">Design &amp; Environment</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32292" target="_blank">Reference Management</a></li>
            <li> <a href="http://libguides.nus.edu.sg/engineering" target="_blank">Engineering &amp; Computer Science</a></li>
            <li> <a href="http://libguides.nus.edu.sg/humanities" target="_blank">Humanities</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32284" target="_blank">Law</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32285" target="_blank">Medicine, Pharmacy, &amp; Nursing</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32286" target="_blank">Music</a></li>
            <li> <a href="http://libguides.nus.edu.sg/sb.php?subject_id=32293" target="_blank">Patents</a></li>
            <li> <a href="https://libguides.nus.edu.sg/rdm" target="_blank">Research Data Management</a></li>
            <li> <a href="https://libguides.nus.edu.sg/researchimpact " target="_blank">Research Impact Measurement</a></li>
            <li> <a href="http://libguides.nus.edu.sg/science" target="_blank">Science</a></li>
            <li> <a href="http://libguides.nus.edu.sg/socialscience" target="_blank">Social Sciences</a></li>
            <li> <a href="http://libguides.nus.edu.sg/yale-nus" target="_blank">Yale-NUS College</a></li>
          </ListGroup>
      </Col>



      <Col xs={4} sm={4} lg={4} className="d-xs-none d-sm-none d-lg-block">
        <h2>Libraries</h2>
          <ListGroup className={styles.footer_listItem}>
            <li> <a href="/frontend/ms/central-library/about-central-library" target="_self">Central Library</a></li>
            <li> <a href="/frontend/ms/chinese-library-ch/about-chinese-library" target="_self">Chinese Library</a></li>
            <li> <a href="/frontend/ms/c-j-koh-law-library/about-c-j-koh-law-library" target="_self">C J Koh Law Library</a></li>
            <li> <a href="/frontend/ms/hon-sui-sen-memorial-library/about-hon-sui-sen-memorial-library" target="_self">Hon Sui Sen Memorial Library</a></li>
            <li> <a href="/frontend/ms/medical-library/about-medical-library" target="_self">Medical Library</a></li>
            <li> <a href="/frontend/ms/music-library/about-music-library" target="_self">Music Library</a></li>
            <li> <a href="/frontend/ms/science-library/about-science-library" target="_self">Science Library</a></li>
            <li> <a href="http://library.yale-nus.edu.sg" target="_blank">Yale-NUS College Library</a></li>
          </ListGroup>
      </Col>


      <Col xs={12} sm={12} lg={4} classsName={styles.footerMinContainer}>
      <Col className={styles.footerMin}>
        <Row className={styles.footerMinContent}>
          <ListGroup className={styles.footer_listItem}>
          <h2 className={styles.footerMinContentHeader}>NUS Libraries</h2>
            <li>  <FontAwesomeIcon icon={faLocationArrow} className={styles.icon}/>
              <pre className={styles.address}>Central Library{'\n'}
              12 Kent Ridge Crescent{'\n'}
              Singapore 119275</pre>
              </li>
            <li><FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/><span style={{whiteSpace: 'pre-wrap'}}>+65 6516 2028</span></li>
            <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
              <span id="cloaked12"><a href="mailto:askalib@nus.edu.sg">askalib@nus.edu.sg</a><br /><a href="mailto:" /></span>
            </li>
          </ListGroup> 
        </Row>

        <Row className={styles.footerMinContent}>
          <Nav>
            <Nav.Link href="https://www.facebook.com/NUSLibraries" target="_blank" className={styles.img}><img id="j_id510:0:j_id512" src="facebook" style={{height: 32, width: 32}} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/NUSlibraries" target="_blank" className={styles.img}><img id="j_id510:1:j_id512" src="twitter" style={{height: 32, width: 32}} />
            </Nav.Link>
            <Nav.Link href="https://instagram.com/nuslibraries" target="_blank" className={styles.img}><img id="j_id510:2:j_id512" src="instagram" style={{height: 32, width: 32}} />
            </Nav.Link>
            <Nav.Link href="http://blog.nus.edu.sg/linus/" target="_blank" className={styles.img}><img id="j_id510:3:j_id512" src="word" style={{height: 32, width: 32}} />
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/user/nuslibraries" target="_blank" className={styles.img}><img id="j_id510:4:j_id512" src="youtube" style={{height: 32, width: 32}} />
            </Nav.Link>
            <Nav.Link href="https://www.flickr.com/photos/nuslibraries" target="_blank" className={styles.img}><img id="j_id510:5:j_id512" src="flickr" style={{height: 32, width: 32}} />
            </Nav.Link>
          </Nav>
        </Row>
        </Col>
      </Col>
      </Row>
    </Container>


    <Container className={styles.footerCopyright} style={{display:'flex'}}>
      <Col>
        <Row className={styles.footerBottom}>
            <p>©<a href="http://www.nus.edu.sg">National University of Singapore</a>. All Rights Reserved.</p>
        </Row>
        <Row className={styles.footerBottom}>
          <Nav>
              <li><a href="http://www.nus.edu.sg/legal-information-notices" target="_blank">Legal</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://www.nus.edu.sg/identity" target="_blank">Branding guidelines</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://www.nus.edu.sg/contact" target="_blank">Contact us</a></li><FontAwesomeIcon icon={faCircle} className={styles.pseudoIcon}/>
              <li><a href="http://cn.nus.edu.sg/" target="_blank">中文</a></li>
          </Nav>
        </Row>
      </Col>
    </Container>

</Container>
  )
}