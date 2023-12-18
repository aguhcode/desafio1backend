class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      // validacion
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      
      const isCodeDuplicate = this.products.some(p => p.code === product.code);
      if (isCodeDuplicate) {
        console.error("El código del producto ya existe.");
        return;
      }
  
      
      const newProduct = {
        id: this.productIdCounter++,
        ...product
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
  
      if (product) {
        return product;
      } else {
        throw new Error("Producto no encontrado.");
      }
    }
  }
  
  // instancia de ProductManager
  const productManager = new ProductManager();
  
  console.log("Productos al inicio:", productManager.getProducts());
  
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
  });
  
  console.log("Productos después de agregar uno:", productManager.getProducts());
  
  try {
    productManager.addProduct({
      title: "producto repetido",
      description: "Este es otro producto repetido",
      price: 150,
      thumbnail: "Otra imagen",
      code: "abc123",
      stock: 10
    });
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const nonExistentProductId = 99;
    const nonExistentProduct = productManager.getProductById(nonExistentProductId);
    console.log(`Producto con ID ${nonExistentProductId}:`, nonExistentProduct);
  } catch (error) {
    console.error(error.message);
  }
  