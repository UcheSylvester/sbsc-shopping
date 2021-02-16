import { createSelector } from "reselect";
import { AppStateTypes } from "../root.reducer";

export const selectCollectionsReducer = (state: AppStateTypes) =>
  state.productsCollectionsReducer;

export const selectCollections = createSelector(
  [selectCollectionsReducer],
  (collectionsReducer) => collectionsReducer.productsCollections
);

export const selectCollectionByName = (collectionName: string) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.collectionName === collectionName
    )
  );
