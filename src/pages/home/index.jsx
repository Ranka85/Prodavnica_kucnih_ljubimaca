import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import dogPic from '../../assets/dog.jpg';
import birdPic from '../../assets/bird.jpg';
import catPic from '../../assets/cat.jpg';
import rabbitPic from '../../assets/rabbit.jpg';

export const HomePage = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

  
    const goToShopPage = () => {
      navigate('/shop');
    }

    
    const goToSellingPage = () => {
    {user?.userId ? (
        navigate('/postnewad')
      ) : (
        navigate('/login')
      )}
    }

    return <>
    

    <div className="looking-for-div">
        <p className="home-title">What are you looking for? <br />
        
        <button className="buying-pet-button" onClick={goToShopPage}>buying pet</button>
        <button className="selling-pet-button" onClick ={goToSellingPage}>selling pet</button>
        </p>
      
    </div>

    <div className="browse-categories">
        <h1 className="h-browse-cate">Browse categories</h1>
        </div>
    <div className="pets">
        <div className="dogs">
           < NavLink to="/shop/dogs" > <img src={dogPic} alt="dog picture" className="dog-img" />
           <p className="pet-text"> dogs</p>  </NavLink>
        </div>

        <div className="cats">
        < NavLink to="/shop/cats" > <img src={catPic} alt="" className="cat-img" />
        <p className="pet-text"> cats</p>  </NavLink>
        </div>

        <div className="birds">
        < NavLink to="/shop/birds" > <img src={birdPic} alt="" className="bird-img" />
        <p className="pet-text"> birds</p>  </NavLink>
        </div>

        <div className="fish">
        < NavLink to="/shop/fish" > <img src="https://i.guim.co.uk/img/media/508a81fbec626742e8417bdf449df106f61538fc/0_452_4300_2580/master/4300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=01e153091f75c604c08dc099ed08ae5d" alt="" className="fish-img" />
        <p className="pet-text"> fish</p>  </NavLink>

        </div>

        <div className="rabbit">
        < NavLink to="/shop/rabbit" > <img src={rabbitPic} alt="" className="rabbit-img" />
        <p className="pet-text"> rabbit</p>
  </NavLink>
        </div>

        </div>
<div className="post-free-ad">
<button className="post-free-button" onClick={goToSellingPage}><p className="p-post-add">POST FREE AD</p></button>
</div>



        
       
     
    
    </>
   
}