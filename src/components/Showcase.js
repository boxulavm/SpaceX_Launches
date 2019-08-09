import React from 'react'
import { Parallax } from "react-parallax";

  const image1 = "https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";
  
  const Showcase = () => (
    <div>
      <Parallax bgImage={image1} strength={400}>
        <div className='text-center showcase'>
            <h3 className='text-light'>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</h3>
        </div>
      </Parallax>
    </div>
  );

export default Showcase