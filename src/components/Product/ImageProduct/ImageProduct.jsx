import { imagesURL } from "@/config";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ImageProduct = ( {product} ) => {
    const [imagesCount, setImagesCount] = useState([]);

    


    return  product._id ? (

        <div className="flex gap-4 w-full h-max-[100px] ">
            <div className="basis-1/5 flex flex-col gap-2 h-max-[100px]  overflow-hidden ">
                
                <img 
                    src={`${imagesURL}/products/${product._id}/1.jpg`}
                    alt={`Imagen de ${product.title}`}/>
                <img 
                    src={`${imagesURL}/products/${product._id}/2.jpg`}
                    alt={`Imagen de ${product.title}`}/>
                <img 
                    src={`${imagesURL}/products/${product._id}/3.jpg`}
                    alt={`Imagen de ${product.title}`}/>
                <img 
                    src={`${imagesURL}/products/${product._id}/4.jpg`}
                    alt={`Imagen de ${product.title}`}/>
        
                
            </div>
            <div className="flex-1">
            <img 
                    src={`${imagesURL}/products/${product._id}/principal.jpg`}
                    alt={`Imagen de ${product.title}`}/>
            </div>
        </div>
       ) : (<div > <FontAwesomeIcon className="animate-spin" width={32} icon={faRefresh} /> </div>)

}
export default ImageProduct;