import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../src/assets/css/views/style.css';
import HomeView from './views/HomeView.js';
import ContactsView from './views/ContactsView.js';
import NotFoundView from './views/NotFoundView.js';
import ShoppingCartView from './views/ShoppingCartView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import { ProductContext, GridProductsContext, FeaturedProductsContext } from './contexts/contexts.js';


function App() {
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [gridProducts, setGridProducts] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData(); 
    
    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())
    }
    fetchFeaturedData(); 

    const fetchGridProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setGridProducts(await result.json())
    }
    fetchGridProducts(); 

  }, [setProducts, setFeaturedProducts, setGridProducts])


  return (
    <>
      <BrowserRouter> 
          <ProductContext.Provider value={products}> 
          <GridProductsContext.Provider value={gridProducts}>
          <FeaturedProductsContext.Provider value={featuredProducts}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<NotFoundView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:productName" element={<ProductsDetailsView />} />
           
            </Routes>
          </FeaturedProductsContext.Provider>
          </GridProductsContext.Provider>
          </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
