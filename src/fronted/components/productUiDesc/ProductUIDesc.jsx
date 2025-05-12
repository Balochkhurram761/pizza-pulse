import React from 'react'
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/productUiDesc/ProductUiDesc.module.css'
import { IoMdClose } from "react-icons/io";
const ProductUIDesc = ({ Isopen, close, pizza }) => {
  if (!pizza) return null;
  return (
    <Dialog open={Isopen} onClose={close} PaperProps={{
      style: {
        borderRadius: '27px',
      },
    }}>
      <div className={styles.dialong}>
        <div className={styles.close} onClick={close} >
          <IoMdClose />

        </div>
        <div className={styles.card}>
          <div className="img">
            <img src={pizza?.image} alt="" />
          </div>
          <div className={styles.container}>
            <div className={styles.body}>
              <h1>{pizza.title}</h1>
              <p>{pizza.description}</p>
              <p className={styles.price} >Rs {pizza.price}</p>
            </div>


            <div className={styles.size}>
              <div className={styles.info}>
                <h2><strong> Step 1 </strong><span>Chosse Pizza Size</span></h2>
                <h3>Required</h3>
              </div>
              <div className={styles.pizzacard}>
                {pizza.sizes.map((size) => (
                  <div key={size.name} className={styles.sizepizza}>
                    <div className={styles.img}>
                      <img src={size.image} alt={size.name} />
                    </div>
                    <div className={styles.bdpizza}>
                      <h5>{size.name}</h5>
                      <p>Rs {size.price}</p>
                      <p>({size.serves})</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className={styles.size}>
              <div className={styles.info}>
                <h2><strong> Step 2 </strong><span>Choose Crust</span></h2>
                <h3>Required</h3>
              </div>

              <label className={styles.pizzacard1}>
                {pizza.pizza_crust.map((item) => (
                  <div className={styles.sizepizza1}>


                    <div className={styles.image1}>
                      <img src={item.image} alt="Pan Crust" />
                    </div>
                    <input type="radio" name="crust" className={styles.radio} />
                    <div className={styles.bdp}>
                      <div className={styles.bdpizza}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>



                  </div>
                ))}
              </label>

            </div>
            <div className={styles.size}>
              <div className={styles.info}>
                <h2><strong> More</strong><span>Add Extra Toppings</span></h2>
                <h3>Option</h3>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.addtocart}>
          <div className={styles.btn}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className={styles.amount}>
            <p>Add to cart</p>
            <p>Rs 650</p>
          </div>
        </div>
      </div>


    </Dialog >
  )
}

export default ProductUIDesc