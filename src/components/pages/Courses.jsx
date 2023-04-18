import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';

function Courses() {
  return (
     <div>
     <div className='courses'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cutmap.ac.in/wp-content/uploads/2021/02/4-Ways-a-Blog-Can-Help-Management-Students.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://facilitymanagementcourses.com/wp-content/uploads/2023/02/Max-Migold-Asset-management-courses-800x300.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thetrainingbrokers.co.uk/wp-content/uploads/2021/08/online-classes-800x300.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Footer />
    </div>
  );
}

export default Courses;