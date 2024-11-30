import { Category, Product } from "@/sanity.types";
import ProductGrid from "./product-grid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* Categories */}
      <div className="w-full sm:w-[200px]">
        {/*  <CategoriesSelectorComponent categories={categories} /> */}
      </div>

      {/* Products */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;