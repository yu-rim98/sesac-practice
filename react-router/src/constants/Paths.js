const PATHS = {
  ROOT: {
    INDEX: "/",
  },

  DUMMY: {
    INDEX: "/dummy",
    PRODUCTS: "/dummy/products",
    PRODUCT_DETAIL: "/dummy/products/:productId",
    getProductDetailPath: (productId) => `/dummy/products/${productId}`,
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    POST_DETAIL: "/dummy/posts/:postId",
    getPostDetailPath: (postId) => `/dummy/posts/${postId}`,
  },
};

export default PATHS;
