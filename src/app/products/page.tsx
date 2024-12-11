// 'use client'
// import Loader from '@/components/common/Loader';
// import ProductCard from '@/components/products/ProductCard';
// import { fetchProducts } from '@/redux/state-slice/ProductSlice';
// import { AppDispatch, RootState } from '@/redux/store/Store';
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// const ProdcutsPage = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { products, loading, error } = useSelector((state: RootState) => state.product);

//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

//   useEffect(() => {
//     dispatch(fetchProducts({ category: '', brand: '', keyword: '' }));
//   }, [dispatch]);

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories(prev =>
//       prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
//     );
//   };

//   const handleBrandChange = (brand: string) => {
//     setSelectedBrands(prev =>
//       prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
//     );
//   };

//   const filteredProducts = products.filter(product =>
//     (!selectedCategories.length || selectedCategories.includes(product.category)) &&
//     (!selectedBrands.length || selectedBrands.includes(product.brand))
//   );


//   if (loading) return <Loader/>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className='flex flex-row gap-5 py-10'>
//       <div className='w-[15%] hidden md:block'>
//         <div className='text-center bg-light_white py-1'>
//           <h1 className='text-md font-medium'>Category</h1>
//         </div>
//         <div className=" flex flex-col gap-1 p-5">
//           {[...new Set(products.map(product => product.category))].map(category => (
//             <div key={category} className='flex flex-row gap-2 items-center'>
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               <span className='text-xs font-normal'>{category}</span>
//             </div>
//           ))}
//         </div>
//         <div className='text-center bg-light_white py-1'>
//           <h1 className='text-md font-medium'>Brand</h1>
//         </div>
//         <div className=" flex flex-col gap-1 p-5">
//           {[...new Set(products.map(product => product.brand))].map(brand => (
//             <div key={brand} className='flex flex-row gap-2 items-center'>
//               <input
//                 type="checkbox"
//                 checked={selectedBrands.includes(brand)}
//                 onChange={() => handleBrandChange(brand)}
//               />
//               <span className='text-xs font-normal'>{brand}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className=' w-[100%] md:w-[80%]'>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {
//             filteredProducts && filteredProducts.map((item,) => (
//               <ProductCard product={item} key={item.id} />
//             ))
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProdcutsPage


'use client';
import Loader from '@/components/common/Loader';
import ProductCard from '@/components/products/ProductCard';
import { fetchProducts } from '@/redux/state-slice/ProductSlice';
import { AppDispatch, RootState } from '@/redux/store/Store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useRouter } from 'next/navigation';

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { products, loading, error } = useSelector((state: RootState) => state.product);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    const categories = searchParams.get('categories')?.split(',') || [];
    const brands = searchParams.get('brands')?.split(',') || [];
    const keyword = searchParams.get('search') || '';

    setSelectedCategories(categories);
    setSelectedBrands(brands);

    dispatch(fetchProducts({ category: categories.join(','), brand: brands.join(','), keyword }));
  }, [dispatch, searchParams]);

  const updateQueryParams = () => {
    const params = new URLSearchParams();

    if (selectedCategories.length) params.set('categories', selectedCategories.join(','));
    if (selectedBrands.length) params.set('brands', selectedBrands.join(','));

    router.push(`/products?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
    setTimeout(updateQueryParams, 0);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setTimeout(updateQueryParams, 0);
  };

  if (loading) return <Loader />;
  if (error) return <p className=' flex justify-center items-center h-screen text-xl md:text-4xl font-semibold'>Not found products</p>;

  return (
    <div className="flex flex-row gap-5 py-10">
      <div className="w-[15%] hidden md:block">
        <div className="text-center bg-light_white py-1">
          <h1 className="text-md font-medium">Category</h1>
        </div>
        <div className="flex flex-col gap-1 p-5">
          {[...new Set(products.map((product) => product.category))].map((category) => (
            <div key={category} className="flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="text-xs font-normal">{category}</span>
            </div>
          ))}
        </div>
        <div className="text-center bg-light_white py-1">
          <h1 className="text-md font-medium">Brand</h1>
        </div>
        <div className="flex flex-col gap-1 p-5">
          {[...new Set(products.map((product) => product.brand))].map((brand) => (
            <div key={brand} className="flex flex-row gap-2 items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span className="text-xs font-normal">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] md:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products &&
            products.map((item) => <ProductCard product={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
