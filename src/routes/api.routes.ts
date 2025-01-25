import { Router, Request, Response } from 'express'
import { Pokemon, IPokemon } from '../models/Pokemon'

const router = Router()

// Get all Pokémons
router.get('/', async (req: Request, res: Response) => {
  try {
    const pokemon = await Pokemon.find()
    res.status(200).json(pokemon)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
})

// Get one Pokémon
//@ts-ignore
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    // Check if `id` is null or invalid
    if (id === null || id.trim() === '') {
      return res.status(400).json({ error: 'Invalid or missing Pokemon ID' })
    }

    const pokemonId = parseInt(id, 10) // Convert `id` to a number
    if (isNaN(pokemonId)) {
      return res.status(400).json({ error: 'Invalid Pokemon ID' })
    }

    const pokemon = await Pokemon.findOne({ id: pokemonId })
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokemon not found' })
    }

    res.status(200).json(pokemon)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
})
//Post a Pokemón
router.post('/', async (req: Request, res: Response) => {
  try {
    const pokemonData: IPokemon = req.body
    const pokemon = new Pokemon(pokemonData)
    await pokemon.save()
    res.status(201).json(pokemon)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
})

// Update a Pokémon
//@ts-ignore
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (id === null || id.trim() === '') {
      return res.status(400).json({ error: 'Invalid or missing Pokemon ID' })
    }

    const pokemonId = parseInt(id, 10) // Convert `id` to a number
    if (isNaN(pokemonId)) {
      return res.status(400).json({ error: 'Invalid Pokemon ID' })
    }

    const updatedPokemon = await Pokemon.findOneAndUpdate(
      { id: pokemonId },
      req.body,
      { new: true }
    )
    if (!updatedPokemon) {
      return res.status(404).json({ error: 'Pokemon not found' })
    }

    res.status(200).json(updatedPokemon)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
})

// Delete a Pokémon
//@ts-ignore
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (id === null || id.trim() === '') {
      return res.status(400).json({ error: 'Invalid or missing Pokemon ID' })
    }

    const pokemonId = parseInt(id, 10) // Convert `id` to a number
    if (isNaN(pokemonId)) {
      return res.status(400).json({ error: 'Invalid Pokemon ID' })
    }

    const deletedPokemon = await Pokemon.findOneAndDelete({ id: pokemonId })
    if (!deletedPokemon) {
      return res.status(404).json({ error: 'Pokemon not found' })
    }

    res.status(200).json({ message: 'Pokemon deleted', deletedPokemon })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'An unknown error occurred' })
    }
  }
})

export default router
