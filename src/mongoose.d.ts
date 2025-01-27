declare module 'mongoose-sequence' {
  import mongoose from 'mongoose'

  interface AutoIncrementOptions {
    id?: string
    inc_field?: string
    reference_fields?: string[]
    start_seq?: number
    disable_hooks?: boolean
  }

  function AutoIncrementFactory(
    schema: mongoose.Schema
  ): (schema: mongoose.Schema, options?: AutoIncrementOptions) => void

  export = AutoIncrementFactory
}
