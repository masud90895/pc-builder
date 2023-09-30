import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      category: "Processor",
      Image: "https://media.istockphoto.com/id/959811410/vector/microchip-line-icon-cpu-central-processing-unit-computer-processor-chip-symbol-in-circle.jpg?s=612x612&w=0&k=20&c=bB82GLTVpAupkg_P2PA3T-EN5oQ3VEGFGngrmemec94=",
      products: [],
    },
    {
      category: "Motherboard",
      Image: "https://elements-video-cover-images-0.imgix.net/files/381165279/1920.png?auto=compress%2Cformat&fit=min&h=281&w=500&s=b43f6a8fe434876cfd0ee82c333eef82",
      products: [],
    },
    {
      category: "RAM",
      Image: "https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-ram-icon-png-image_1595519.jpg",
      products: [],
    },
    {
      category: "Storage Device",
      Image: "https://w7.pngwing.com/pngs/1000/717/png-transparent-dark-disk-drive-ssd-whcompare-servers-web-hosting-icon.png",
      products: [],
    },
    {
      category: "Monitor",
      Image: "https://w7.pngwing.com/pngs/182/181/png-transparent-laptop-computer-monitors-computer-icons-monitor-electronics-computer-logo.png",
      products: [],
    },
    {
      category: "Others",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Symbol_Resin_Code_7_OTHER.svg/1000px-Symbol_Resin_Code_7_OTHER.svg.png",
      products: [],
    },
  ],
  totalProduct: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const { category, product } = action.payload;
      const categoryIndex = state.products.findIndex(
        (item) => item.category === category
      );

      if (categoryIndex !== -1) {
        const existingProductIndex = state.products[
          categoryIndex
        ].products.findIndex((item) => item.productId === product.productId);

        if (existingProductIndex !== -1) {
          // If the product already exists, replace it with the selected product
          state.products[categoryIndex].products[existingProductIndex] =
            product;
        } else {
          // If the product doesn't exist, add it to the products array
          state.products[categoryIndex].products.push(product);
          state.totalProduct = state.totalProduct + 1;
        }
      }
    },
  },
});

export const { addToBuilder } = productSlice.actions;
export default productSlice.reducer;
