import React, { use, useEffect, useState } from "react";
import styles from "../../styles/productUi/ProductUi.module.css";
import pizza from "../../arrayFronted/pizzaArray/PizzaArray";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Loader from "../loader/Loader";
import ProductUIDesc from "../productUiDesc/ProductUIDesc";
import { IoMdArrowDropdown } from "react-icons/io";



const ProductUi = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);

  const [Isopen, setIsopen] = useState(false);
  const handlebtn = (item) => {

    setSelectedPizza(item);
  }
  const [active, setactive] = useState('img4')
  const handleactive = (page, col) => {
    setactive(page)
    setgridlayout(col)

  }
  const handledrop = () => {
    setdropdown(!dropdown)
  }
  const [selectedCategory, setSelectedCategory] = useState("All Pizza");
  const [gridlayout, setgridlayout] = useState(4);
  const [IsLoading, setIsLoading] = useState(true)
  const [dropdown, setdropdown] = useState(false)

  const filteredPizzas = pizza.filter((item) => {
    if (selectedCategory === item.collection || selectedCategory === 'All Pizza') return true;
    return item.collection === selectedCategory;

  });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      {IsLoading ? (
        <Loader />

      )
        : (


          <div className={styles.productui}>
            <div className={styles.filter}>
              <div className={styles.boxes}>
                <div className={styles.box1}>
                  <div className={styles.bo} onClick={handledrop} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <p>{selectedCategory}</p><IoMdArrowDropdown />
                  </div>
                  {dropdown && (
                    <div className={styles.dropdown}>
                      <p onClick={() => { setSelectedCategory("All Pizza"); setdropdown(false); }}>All Pizza</p>
                      <p onClick={() => { setSelectedCategory("classic flavors"); setdropdown(false); }}>Classic Flavors</p>
                      <p onClick={() => { setSelectedCategory("favorite flavors"); setdropdown(false); }}>Favorite Flavors</p>
                      <p onClick={() => { setSelectedCategory("Premium Flavors"); setdropdown(false); }}>Premium Flavors</p>
                      <p onClick={() => { setSelectedCategory("super Loaded Pizza"); setdropdown(false); }}>Super Loaded Pizza</p>
                    </div>

                  )}

                </div>

                <div className={styles.totalpro}>
                  {filteredPizzas.length} products
                </div>
              </div>
              <div className={styles.grid}>
                <div onClick={() => handleactive('img1', 1)} className={`${active === 'img1' ? styles.active : ''}`}>
                  <img src="/fImages/menu/svgexport-31.png" alt="" />
                </div>
                <div onClick={() => handleactive('img2', 2)} className={`${active === 'img2' ? styles.active : ''}`}>
                  <img src="/fImages/menu/svgexport-32.png" alt="" />
                </div>
                <div onClick={() => handleactive('img3', 3)} className={`${active === 'img3' ? styles.active : ''}`}>
                  <img src="/fImages/menu/svgexport-33.png" alt="" />
                </div>
                <div onClick={() => handleactive('img4', 4)} className={`${active === 'img4' ? styles.active : ''}`}>
                  <img src="/fImages/menu/svgexport-34.png" alt="" />
                </div>
              </div>

            </div>
            {/* <hr /> */}
            <div className={`${styles.cards} ${styles[`gridlayout${gridlayout}`]} `} >
              {filteredPizzas.map((item, index) => (

                <div key={index} className={styles.card}>
                  <button className={styles.btn1} onClick={() => handlebtn(item)}>

                    <div className={styles.img}>

                      <img src={item.image} alt={item.title} />

                      {item.NewIn && <div className={styles.NewIn}>New</div>}

                    </div>
                  </button>
                  <div className={styles.body}>
                    <div className={styles.heart}>
                      <CiHeart />
                    </div>
                    <button className={styles.btn1} onClick={() => handlebtn(item)}>
                      <h1>
                        {item.title}
                      </h1>

                      <p>{item.description.slice(0, 50)}...</p>
                      <p className={styles.price}>
                        From Rs <span>{item.price}</span>
                      </p>
                      <button className={styles.btn}>
                        <MdOutlineShoppingCart />
                        Add to cart
                      </button>
                    </button>


                  </div>

                </div>



              ))}
            </div>

          </div >
        )}

      <ProductUIDesc
        Isopen={Isopen}
        close={() => setIsopen(false)}
        pizza={selectedPizza}
      />
    </>
  );
};

export default ProductUi;
