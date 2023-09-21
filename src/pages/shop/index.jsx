import { NavLink } from "react-router-dom";
export const ShopPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to our Pet Shop</h1>
                <p className="select-text">Please select a pet category to explore our offerings.</p>

        <div className="pic-with-text-container">
        <div className="dogs-shop">
           < NavLink to="/dogs" > <img src="https://www.dailypaws.com/thmb/-p5VyaOMxdnepW4PwgbPqFe_Ba0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rottweiler-headshot-678833089-2000-e87e6d01c6964debad70bedee2094120.jpg" alt="" className="dog-img-shop" />
           <p className="pet-text-shop"> dogs</p>  </NavLink>
        </div>

        <div className="cats-shop">
        < NavLink to="/cats" > <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg" alt="" className="cat-img-shop" />
        <p className="pet-text-shop"> cats</p>  </NavLink>
        </div>

        <div className="birds-shop">
        < NavLink to="/birds" > <img src="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="bird-img-shop" />
        <p className="pet-text-shop"> birds</p>  </NavLink>
        </div>

        <div className="fishes-shop rab-fish">
        < NavLink to="/fishes" > <img src="https://i.guim.co.uk/img/media/508a81fbec626742e8417bdf449df106f61538fc/0_452_4300_2580/master/4300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=01e153091f75c604c08dc099ed08ae5d" alt="" className="fish-img-shop" />
        <p className="pet-text-shop"> fishes</p>  </NavLink>

        </div>

        <div className="rabbit-shop rab-fish">
        < NavLink to="/rabbit" > <img src="https://t3.ftcdn.net/jpg/02/47/33/08/360_F_247330858_RvSJWAhMbfrqsM5VUmjLD4gzzSKUaJls.jpg" alt="" className="rabbit-img-shop" />
        <p className="pet-text-shop"> rabbit</p>
  </NavLink>
        </div>

            </div>

        </div>
    );
}