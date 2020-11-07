class BaseError extends Error {
  constructor(e?: string) {
    super(e)
    this.name = new.target.name
  }
}

export class MissingParameterError extends BaseError {
  constructor(message?: string, e?: string) {
    super(e)
    this.message = message || 'argument is missing'
  }
}
