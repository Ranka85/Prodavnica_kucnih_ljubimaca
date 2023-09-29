import { NavLink } from "react-router-dom";
import dogPic from '../../assets/dog.jpg';
import birdPic from '../../assets/bird.jpg';
import catPic from '../../assets/cat.jpg';
import rabbitPic from '../../assets/rabbit.jpg';
export const PetPage = () => {
    return (
        <div>
                <p className="select-text">Please select a pet category to explore our offerings.</p>

        <div className="pic-with-text-container">
        <div className="dogs-shop">
           < NavLink to="/shop/dogs" > <img src={dogPic} alt="" className="dog-img-shop" />
           <p className="pet-text-shop"> dogs</p>  </NavLink>
        </div>

        <div className="cats-shop">
        < NavLink to="/shop/cats" > <img src={catPic} alt="" className="cat-img-shop" />
        <p className="pet-text-shop"> cats</p>  </NavLink>
        </div>

        <div className="birds-shop">
        < NavLink to="/shop/birds" > <img src={birdPic} alt="" className="bird-img-shop" />
        <p className="pet-text-shop"> birds</p>  </NavLink>
        </div>

        <div className="fish-shop rab-fish">
        < NavLink to="/shop/fish" > <img src="https://i.guim.co.uk/img/media/508a81fbec626742e8417bdf449df106f61538fc/0_452_4300_2580/master/4300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=01e153091f75c604c08dc099ed08ae5d" alt="" className="fish-img-shop" />
        <p className="pet-text-shop"> fish</p>  </NavLink>

        </div>

        <div className="rabbit-shop rab-fish">
        < NavLink to="/shop/rabbit" > <img src={rabbitPic} alt="" className="rabbit-img-shop" />
        <p className="pet-text-shop"> rabbit</p>
  </NavLink>
        </div>

            </div>

        </div>
    );
}