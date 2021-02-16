export const ROOT_REDUX_PERSIST_KEY = "SCRADER_TECHNICAL_TEST_723553";

// Names of search strings to use for fetching products and grouping
export const PRODUCTS_COLLECTION_NAMES: string[] = ["bags", "shoes", "cloth"];

export const PLACEHOLDER_PRODUCT_IMAGE =
  "https://cel.ac/wp-content/uploads/2016/02/placeholder-img-1.jpg";

export const formatter = (amount: number) =>
  new Intl.NumberFormat("en-US").format(amount);

export const scrollToTop = () =>
  document.body.scrollIntoView({ behavior: "smooth", block: "start" });
