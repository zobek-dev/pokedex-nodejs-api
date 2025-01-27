import mongoose, { Schema, Document } from 'mongoose'
import AutoIncrementFactory from 'mongoose-sequence'

//@ts-ignore
const AutoIncrement = AutoIncrementFactory(mongoose)

export interface IPokemon extends Document {
  id: number // Unique ID for the Pokémon
  name: string // Pokémon name
  url: string // Pokémon URL
  timestamp: Date // Timestamp for when the Pokémon was added
}

const PokemonSchema: Schema = new Schema(
  {
    id: { type: Number, unique: true }, // Auto-incremented ID
    name: { type: String, required: true }, // Pokémon name
    url: { type: String, required: true }, // Pokémon URL
    timestamp: { type: Date, default: Date.now }, // Automatically set timestamp
  },
  {
    timestamps: false, // Disable auto `createdAt` and `updatedAt`
  }
)

// Add auto-increment to the `id` field
// @ts-ignore
PokemonSchema.plugin(AutoIncrement, { inc_field: 'id' })

export const Pokemon = mongoose.model<IPokemon>('Pokemon', PokemonSchema)
