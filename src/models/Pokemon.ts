import mongoose, { Schema, Document } from 'mongoose'

interface IPokemon extends Document {
  readonly id: number // Pokémon ID (immutable)
  name: string // Pokémon name
  types: {
    name: string
    url: string
  }[] // Pokémon types
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean // Whether the ability is hidden
    slot: number // Ability slot
  }[] // Pokémon abilities
  base_experience: number // Base experience
  weight: number // Pokémon weight in units
  height: number // Pokémon height in units
  stats: {
    stat: {
      name: string
      url: string
    }
    base_stat: number // Base stat value
    effort: number // Effort value
  }[] // Pokémon stats
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number // Level at which move is learned
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[] // Pokémon moves
  sprites: {
    front_default: string // Front default sprite URL
    back_default: string // Back default sprite URL
    front_shiny: string // Front shiny sprite URL
    back_shiny: string // Back shiny sprite URL
  } // Sprite URLs
  description?: string // Optional custom description
  location: 'party' | 'pc' // Pokémon location in the app
  createdAt?: Date // Creation timestamp (optional)
  updatedAt?: Date // Last update timestamp (optional)
}

export default IPokemon

const PokemonSchema: Schema = new Schema(
  {
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
  },
  {
    timestamps: true, // Enables `createdAt` and `updatedAt` fields
  }
)

const Pokemon = mongoose.model<IPokemon>('Pokemon', PokemonSchema)

export { Pokemon, IPokemon }
