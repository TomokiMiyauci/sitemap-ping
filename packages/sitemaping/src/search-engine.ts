export abstract class SearchEngine {
  abstract ping(): Promise<number | never>
}

export default SearchEngine
