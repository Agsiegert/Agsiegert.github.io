import { socialCardsAttributes } from '../_metaDataAttributes';

const SearchResults = Scrivito.provideObjClass('SearchResults', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    ...socialCardsAttributes,
  },
});

export default SearchResults;
