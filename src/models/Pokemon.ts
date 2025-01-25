import mongoose, { Schema, Document } from 'mongoose'

interface IPokemon extends Document {
  id: number // Pokémon ID
  name: string // Pokémon name
  types: { name: string; url: string }[] // Pokémon types
  abilities: {
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
  }[] // Abilities
  base_experience: number // Base experience
  weight: number // Pokémon weight
  height: number // Pokémon height
  stats: {
    stat: { name: string; url: string }
    base_stat: number
    effort: number
  }[] // Stats
  moves: {
    move: { name: string; url: string }
    version_group_details: {
      level_learned_at: number
      move_learn_method: { name: string; url: string }
      version_group: { name: string; url: string }
    }[]
  }[] // Moves
  sprites: {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
  } // Sprite URLs
  description: string // Custom description (optional)
  location: 'party' | 'pc' // Location of Pokémon in the app
}

const PokemonSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  types: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  abilities: [
    {
      ability: {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
      is_hidden: { type: Boolean, required: true },
      slot: { type: Number, required: true },
    },
  ],
  base_experience: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  stats: [
    {
      stat: {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
      base_stat: { type: Number, required: true },
      effort: { type: Number, required: true },
    },
  ],
  moves: [
    {
      move: {
        name: { type: String, required: true },
        url: { type: String, required: true },
      },
      version_group_details: [
        {
          level_learned_at: { type: Number, required: true },
          move_learn_method: {
            name: { type: String, required: true },
            url: { type: String, required: true },
          },
          version_group: {
            name: { type: String, required: true },
            url: { type: String, required: true },
          },
        },
      ],
    },
  ],
  sprites: {
    front_default: { type: String, required: true },
    back_default: { type: String, required: true },
    front_shiny: { type: String, required: true },
    back_shiny: { type: String, required: true },
  },
  description: { type: String }, // Optional custom field
  location: {
    type: String,
    enum: ['party', 'pc'],
    default: 'pc',
  },
})

const Pokemon = mongoose.model<IPokemon>('Pokemon', PokemonSchema)

export { Pokemon, IPokemon }
