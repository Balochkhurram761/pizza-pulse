import React, {  useState } from 'react'
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/productUiDesc/ProductUiDesc.module.css'
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ProductUIDesc = ({ Isopen, close, pizza }) => {
 const [selections, setSelections] = useState({
    size: "small",
    crust: "",
    optional: [],
    instructions: false,
  });

  const handleToggle = (key, value) => {
   setSelections((prev)=>{
    if(key==="optional"){
      const handleOptional=prev.optional.includes(value) ?
      prev.optional.filter((item)=>item!==value):
      [...prev.optional , value ]
      return  {...prev, optional:handleOptional}
    }
    return { ...prev, [key]: prev[key] === value ? "" : value };

  })
  
  };

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
                {pizza.sizes.map((sizepizz,index) => (
                  <div key={index} className={`${styles.sizepizza} ${selections.size===sizepizz.size ? styles.selectshow :""}` }  onClick={()=>handleToggle("size" ,sizepizz.size)}>
                     
                    <div className={styles.img}>
                      <img src={sizepizz.image} alt={sizepizz.name} />
                    </div>
                    <div className={styles.bdpizza}>
                      <h5>{sizepizz.size}</h5>
                      <p>Rs {sizepizz.price}</p>
                      <p>({sizepizz.serves})</p>
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

               
                {pizza.pizza_crust.map((item ,index) => (
                  <label className={`${styles.pizzacard1} `}>

                  <div key={index} className={`${styles.sizepizza1} ${selections.crust===item.title ? styles.selectionbox :""} ` } onClick={()=>handleToggle("crust" ,item.title)}>
                <div className={`${styles.box} ${selections.crust===item.title ? styles.boxselected:""}`}  ></div>
                  
                    <div className={styles.image1}>
                      <img src={item.image} alt="Pan Crust" />
                    </div>
                    <input type="radio"  checked={selections.crust===item.title} name="crust" className={styles.radio} onClick={()=>handleToggle("crust", item.title)} />
                    <div className={styles.bdp}>
                      <div className={styles.bdpizza}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  </label>
                ))}
              

            </div>
            <div className={styles.size}>
              <div className={styles.info}>
                <h2><strong> More</strong><span>Add Extra Toppings</span></h2>
                <h3>Option</h3>
              </div>
              <div className={styles.bdy}>
                <div className={styles.rates}>               
                   {pizza.options.map((item,index)=>(
                   <label key={index} htmlFor=""   >
                  <div className={`${styles.boxes1} ${selections.optional.includes(item.title) ? styles.optionselection :""} ` } onClick={()=>handleToggle("optional", item.title)} >
                     {item.price!==null && (
              <div className={styles.boxes}>
                <div  className={`${styles.box}`}>
                  <div className={styles.select}></div>
                  <input type="radio" name="" id="" className={styles.radio} />
                  <h1>{item.title}</h1>
                  </div>
                <span>(+ Rs. {item.price})</span>
              
                </div>
                 )}
              </div>
              </label>
                   ))}
               </div>
 
               </div>
            
            </div>

          </div>
        </div>
        <div className={styles.instruction}  >
               <h1 onClick={()=>handleToggle("instructions", !selections.instructions)} >kitchen Instruction(Options) <IoIosArrowDown /></h1>
               {selections.instructions && (
             <div className={`${styles.chat} ${selections.instructions ? styles.expand : styles.collapse}`}>
              <hr />
              <textarea className={styles.textarea} name="" id=""></textarea>
             </div>
             )}
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