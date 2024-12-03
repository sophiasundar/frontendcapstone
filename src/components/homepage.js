import React from 'react';
import Image from 'react-bootstrap/Image';
import NavBar from './navBar/navBar';






function HomePage( ){
 

    return(
        <div className="conhome">
            
               <NavBar/>
          
          <h1 className="homeh">welcome to Item catalog</h1>
            <Image className="homeImg" src='https://images.ctfassets.net/wob906kz2qeo/56FBR5kKTBM0JuWRbgqkN6/944a753bb80a3792fe85d6dc0e65391b/ItemCatalog_Blog-Email_2x.png' />
               <div className="about">
            <h3 ><b>About :</b> </h3>
            

            <div className="subhead">

            <p ><b>Purpose : </b> </p>
            <p className="pur"><b>An item catalog is primarily focused on showcasing and presenting items or products to users. 
            It serves as a digital representation or catalog of the available items, allowing users to browse, search, and view information about each item.</b></p>

            <p ><b>Functionality : </b></p> 
            <p className="fun"><b>A typical item catalog includes features such as item listings, 
            search functionality, filtering options, and item descriptions. It also include user authentication and also CRUD operations.</b></p>

            <p ><b>Scope: </b></p> 
            <p className="sc"><b>The scope of an item catalog is to provide information and promote items to users, rather than managing inventory or facilitating transactions. It may be used for 
                informational or promotional purposes, such as displaying products on a website or in a digital brochure.</b></p>
        
            <p ><b>Examples: </b></p> 
            <p className="ex"><b>Examples of item catalogs include online marketplaces, digital product catalogs, library catalogs, and online galleries showcasing artwork or collections.</b></p>
            
            <p className="note"><b>Note for search: </b></p> 
            <p className="ex"><b>You can search general words related to the dsiplayed Items in the drop-down like <b>search by common name, brand name, phone, laptop, sarees, perfume, lipsticks, cotton, shirt, foundation, kajal</b> etc...</b></p>
            
            </div>
            </div>
        </div>
    )
}

export default HomePage;