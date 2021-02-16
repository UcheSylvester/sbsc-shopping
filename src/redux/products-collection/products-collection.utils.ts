import { ProductsCollectionProps } from "./products-collection.types";

export const handleCollectionUpdates = (
  collections: ProductsCollectionProps[],
  collectionUpdate: ProductsCollectionProps
): ProductsCollectionProps[] => {
  if (!collections.length || !collectionUpdate) return collections;

  const { collectionName } = collectionUpdate;

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
