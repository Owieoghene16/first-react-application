import React from 'react';
import './story.css';
import { Outlet } from "react-router-dom";
import { BsCardImage } from "react-icons/bs";

const Story = () => {
  return (
    <>
      <section className="home-section">
				  <div className="home-content">
            <div className="home-story">
              <div className="left">
					   		<i> <BsCardImage /> </i>
                <p>Add a cover</p>
                <input id='files' type="file" multiple />
              </div>
              <div className="right">
                <div className="book-details">
                  <h className="books">Books Details</h>
                </div>
                <div className="big-title">
                  <p className="title">Title</p>
                  <form>
                    <input type="text" /><br></br>
                  </form>
                </div>
                <div className="text-space">
                  <h className="descrip">Description</h>
                  <i className="fa fa-info"></i>
                  <div>
                    <textarea className="text-area" name="text" type="text"></textarea>
                  </div>
                </div>
                <div className="price">
                  <h className="descrip">Price</h>
                  <i className="fa fa-money"></i>
                  <form>
                    <input type="number" />
                  </form>
                </div>
                <div className="big-title">
                  <h className="character">PDF</h>
                  <i className="fa fa-info"></i>
                  <form>
                    <input id='files' type="file" multiple />
                  </form>
                </div>
                <div className="create">
                  <p>Create Book</p>
                </div>
                <footer>
                  <p className="footer">Bookstack &copy; 2021</p>
                </footer>
							</div>
            </div>
					</div>
        </section>
      <Outlet />
    </>
  );
}
  
export default Story;