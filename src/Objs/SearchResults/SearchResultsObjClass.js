import { socialCardsAttributes } from '../_socialCardsAttributes';

const SearchResults = Scrivito.provideObjClass('SearchResults', {
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
    ...socialCardsAttributes,
  },
});

export default SearchResults;
