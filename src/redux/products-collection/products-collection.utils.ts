import { ProductsCollectionProps } from "./products-collection.types";

type FindExistingItemOption = {
  items: Array<any>;
  key: string;
  value: string;
};

const findExistingItem = ({ items, key, value }: FindExistingItemOption) =>
  items.find((item) => item[key] === value);

export const handleCollectionUpdates = (
  collections: ProductsCollectionProps[],
  collectionUpdate: ProductsCollectionProps
): ProductsCollectionProps[] => {
  const { collectionName } = collectionUpdate;

  if (!collections.length || !collectionUpdate) return collections;

  // Include the new update to an existing collection in collections array
  const updatedCollections = collections.map((collection) =>
    collection.collectionName === collectionName
      ? {
          ...collection,
          ...collectionUpdate,
        }
      : collection
  );

  return updatedCollections;
};

export const handleFetchCollectionStart = (
  collections: ProductsCollectionProps[],
  newCollection: ProductsCollectionProps
) => {
  const { collectionName } = newCollection;
  const existingCollection = findExistingItem({
    items: collections,
    key: "collectionName",
    value: collectionName,
  });

  // When the collection is not existing, insert the newCollection
  if (!existingCollection) return [...collections, newCollection];

  return collections.map((collection) =>
    collection.collectionName === collectionName
      ? { ...collection, ...newCollection }
      : collection
  );
};
