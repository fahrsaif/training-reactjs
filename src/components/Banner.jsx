import React from 'react'
import './Banner.css'
import { Zoom, Fade } from 'react-reveal';

const Banner = () => {
  return (
    <>
      <section id="header" className="mt-5">
        <div className="container">
          <div className="row">
            <Zoom>
              <div className="col-md-6 pt-5 pt-lg-0 order-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Buy stuff. Earn reward. Only in
                  <strong className="text-primary"> As-Suqy Store</strong>
                </h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem amet ratione at eaque architecto natus. Perferendis quis reprehenderit iste fugiat fugit. Tempore ratione nihil atque.
                </p>
                <div className="mt-4">
                  <a className="btn btn-outline-primary">Get Started</a>
                </div>
              </div>
            </Zoom>
            <Fade left>
              <div className="col-md-6 order-1 order-lg-2">
                <img src="banner.svg" alt="" className="img-fluid animation" />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner