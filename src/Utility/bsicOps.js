
export default function basicOps(products,searchTerm,sortType,currcategory,categories,setCurrcategory,pageNum,pageSize) {
let filteredProducts=products.filter((product)=>{
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
});

let sortedProducts=filteredProducts.sort((a,b)=>{
    if(sortType==='1'){
        return a.price-b.price;
    }
    else if(sortType==='-1'){
        return b.price-a.price;
    }
}
);

let filteredGroupedProducts = sortedProducts;
if (currcategory !== "All categories") {
  filteredGroupedProducts = filteredGroupedProducts.filter((product) => {
    return product.category === currcategory; 
  });
}

const totalPages = Math.ceil(filteredGroupedProducts.length / pageSize);

const sidx = (pageNum - 1) * pageSize;
const eidx = sidx + pageSize;

filteredGroupedProducts = filteredGroupedProducts.slice(sidx, eidx); 
  return {filteredGroupedProducts , totalPages};
};