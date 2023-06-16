import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" >
        <Container>
{/*********************************  Header Logo Başlangıç ******************************************/}   
          <Navbar.Brand href="#home" className='col-2' >            
            <img
              src='/img/logo-new.png'
              alt='LOGOMUZ'
              width="120"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand> 
{/*********************************  Header Logo Bitiş ******************************************/}   

{/*********************************  Header Navbar Başlangıç ******************************************/}   
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='col-10 ' >

            {/*****************  Header Navbar > Sayfa Linkleri Başlangıç **************************/}   
            <Nav className="mx-auto ">
              <Nav.Link
              className='px-5'
              style={{ color: "black" }} 
              href="https://rastmobile.com/iletisim/" 
              target='_blank' 
              > Hakkımızda </Nav.Link>

              <Nav.Link 
              className='px-5' 
              style={{ color: "black" }} 
              href="https://rastmobile.com/case-study/juri-yarisma-yazilimi/" 
              target='_blank' 
              >Juri-Yarışma Yazılımı</Nav.Link>

              <Nav.Link 
              className='px-5' 
              style={{ color: "black" }} 
              href="https://getwordninja.com/" 
              target='_blank' 
              >Word Ninja</Nav.Link>

              <Nav.Link 
              className='px-5' 
              style={{ color: "black" }} 
              href="https://rastmobile.com/case-study/word-pyramids-kelime-bulmaca-oyunu/" 
              target='_blank' 
              >Word Pyramids</Nav.Link>
            </Nav>
            {/*****************  Header Navbar > Sayfa Linkleri Bitiş **************************/}   

            {/*****************  Header Navbar > İletişim İconları Başlangıç  ******************/}   
            <Nav>
              <Nav.Link 
              className='my-auto d-none d-lg-block' 
              href='https://www.youtube.com/' 
              target='_blank' 
              rel='nofollow' >
                <img
                  src='img/icons-youtube.png'
                  width={"30"}
                  height={"30"}
                  alt=''
                />
              </Nav.Link>

              <Nav.Link 
              className='my-auto d-none d-lg-block' 
              href="https://www.instagram.com/mobilerast/" 
              target='_blank' 
              rel='nofollow' >
                <img
                  src='img/icons-instagram.png'
                  width={"30"}
                  height={"30"}
                  alt=''
                />
              </Nav.Link>

              <Nav.Link 
              className='my-auto d-none d-lg-block' 
              href="https://www.behance.net/rastmobile" 
              target='_blank' 
              rel='nofollow' >
                <img
                  src='/img/icons-behance.png'
                  width={"25"}
                  height={"25"}
                  alt=''
                />
              </Nav.Link>

              <Nav.Link 
              className='my-auto d-none d-lg-block' 
              href="https://www.linkedin.com/company/rastmobile/" 
              target='_blank' 
              rel='nofollow' >
                <img
                  src='/img/icons-linkedin.png'
                  width={"23"}
                  height={"23"}
                  alt=''
                />
              </Nav.Link>
            </Nav>
            {/*****************  Header Navbar > İletişim İconları Bitiş  *********************/}   
          </Navbar.Collapse>
{/*********************************  Header Navbar Bitiş ******************************************/}   
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
